const createHttpError = require('http-errors');
const { CREATE_USER_VALIDATION_SCHEMA, CREATE_PHONE_VALIDATION_SCHEMA } = require('../utils/validatedSchemas');

module.exports.validationOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUser = await CREATE_USER_VALIDATION_SCHEMA.validate(body);
    req.body = validatedUser;
    next();
  } catch (err) {
    next(createHttpError(422, err));
  }
};

module.exports.validationOnCreatePhone = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedPhone = await CREATE_PHONE_VALIDATION_SCHEMA.validate(body);
    req.body = validatedPhone;
    next();
  } catch (err) {
    next(createHttpError(422, err));
  }
};