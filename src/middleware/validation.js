import { ValidationError } from "../utils/error.js";
import { registerSchema, loginSchema } from "../utils/validation.js";

export default (req, res, next) => {
  try {
    if (req.url === "/user/register" && req.method === "POST") {
      const { error } = registerSchema.validate(req.body);
      if (error) throw new ValidationError(403, error.message);
    }

    if (req.url === "/user/login" && req.method === "POST") {
      const { error } = loginSchema.validate(req.body);
      if (error) throw new ValidationError(403, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};
