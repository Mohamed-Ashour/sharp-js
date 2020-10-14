const Joi = require("joi");

module.exports = {
    create: Joi.object({
        template: Joi.string()
            .pattern(/^([/|.|\w|\s])*\.(?:jpg|gif|png)$/, "imageName")
            .required(),
        image: Joi.string()
            .pattern(/^([/|.|\w|\s])*\.(?:jpg|gif|png)$/, "imageName")
            .required(),
        imageDetails: Joi.object({
            startPoint: Joi.array()
                .items(Joi.number().integer())
                .length(2)
                .required(),
            width: Joi.number().integer().min(1),
            height: Joi.number().integer().min(1),
            angel: Joi.number().integer(),
        }),
    }),
};
