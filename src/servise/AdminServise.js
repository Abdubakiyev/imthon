import { adminModel } from "../models/AdminModel.js";
import sha256 from "sha256";
import { ForbiddenError, NotFoundError } from "../utils/error.js";

export class AdminService {
  static async addAdmin(payload, currentUser) {
    if (currentUser.role !== "SuperAdmin") {
      throw new ForbiddenError(403, "Faqat SuperAdmin qoshishi mumkin");
    }

    payload.password = sha256(payload.password);

    const exists = await adminModel.findOne({ username: payload.username });
    if (exists) throw new ForbiddenError(403, "Bunday admin allaqachon mavjud");

    return await adminModel.create(payload);
    
  }

  static async getAdmins(currentUser) {
    if (currentUser.role !== "SuperAdmin") {
      throw new ForbiddenError(403, "Faqat SuperAdmin ko‘rishi mumkin");
    }

    return await adminModel.find();
  }

  static async getAdminById(id, currentUser) {
    if (currentUser.role !== "SuperAdmin") {
      throw new ForbiddenError(403, "Faqat SuperAdmin ko‘rishi mumkin");
    }

    const admin = await adminModel.findById(id);
    if (!admin) throw new NotFoundError(404, "Admin topilmadi");

    return admin;
  }

  static async deleteAdmin(id, currentUser) {
    if (currentUser.role !== "SuperAdmin") {
      throw new ForbiddenError(403, "Faqat SuperAdmin o‘chira oladi");
    }

    const admin = await adminModel.findByIdAndDelete(id);
    if (!admin) throw new NotFoundError(404, "Admin topilmadi");

    return { message: "Admin o‘chirildi" };
  }
}
