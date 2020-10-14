const router = require("express").Router();
const schemas = require("./schemas");
const services = require("./services");

router.post("/create", async (req, res) => {
    try {
        await schemas.create.validateAsync(req.body);
    } catch (error) {
        return res.status(400).send({error});
    }

    try {
        const output = await services.create(req.body);
        return res.send({
            finalTemplateURL: `${req.protocol}://${req.get("host")}/${output}`,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({error: {message: "internal server error"}});
    }
});

module.exports = router;
