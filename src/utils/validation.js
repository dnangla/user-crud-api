const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().required()
});

const validateUser = (data) => {
    return userSchema.validate(data);
};

module.exports = { validateUser };
