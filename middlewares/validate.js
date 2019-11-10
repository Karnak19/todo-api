const Joi = require("@hapi/joi");

const joiValidation = (schema, propWhoNeedValidation) => (req, res, next) => {
  const { error } = schema.validate(req[propWhoNeedValidation]);
  const isValid = error == null;

  if (isValid) {
    next();
  } else {
    const { details } = error;
    res.status(422).json(details[0]);
  }
};

module.exports = joiValidation;
