import { ForbiddenError } from "../utils/error.js";

export default function isSuperAdmin(req, res, next) {
  if (req.user?.role !== "SuperAdmin") {
    throw new ForbiddenError(403, "Faqat SuperAdmin bu amalni bajarishi mumkin");
  }
  next();
}
