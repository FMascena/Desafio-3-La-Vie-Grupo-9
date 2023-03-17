const { validate, Joi} = require("express-validation");

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    // query: Joi.object({
    //     page: Joi.number().required(),
    //     limit: Joi.number().required(),
    // }),
});