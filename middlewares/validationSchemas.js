const Joi = require("@hapi/joi");

module.exports.newTodo = Joi.object({
  desc: Joi.string().required()
});

module.exports.uuid = Joi.object({
  id: Joi.string()
    .guid({ version: "uuidv4" })
    .required()
});
