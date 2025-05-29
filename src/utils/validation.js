import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  branch: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).max(16).required(),
  r_password: Joi.any().valid(Joi.ref("password")).required(),
  birthDate: Joi.string().required(),
  gender: Joi.string().valid("male", "female").required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(8).max(16).required(),
});

export { registerSchema, loginSchema };
