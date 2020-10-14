const sharp = require("sharp");

module.exports = {
    create: async ({template, image, imageDetails}) => {
        const imageBufferPromise = sharp(`images/${image}`)
            .resize(imageDetails.width, imageDetails.height)
            .rotate(imageDetails.angel)
            .toBuffer();

        const templateMetadataPromise = sharp(`images/${template}`).metadata();

        const [imageBuffer, templateMetadata] = await Promise.all([
            imageBufferPromise,
            templateMetadataPromise,
        ]);

        await sharp({
            create: {
                width: templateMetadata.width,
                height: templateMetadata.height,
                channels: 4,
                background: {r: 0, g: 0, b: 0},
            },
        })
            .composite([
                {
                    input: imageBuffer,
                    top: imageDetails.startPoint[0],
                    left: imageDetails.startPoint[1],
                },
                {input: `images/${template}`},
            ])
            .toFile("public/output.png");

        return "output.png";
    },
};
