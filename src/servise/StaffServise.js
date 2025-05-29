import { staffModel } from "../models/StaffModel.js";
import sha256 from "sha256";
import { NotFoundError } from "../utils/error.js";

export class StaffService {
  static async addStaff(payload) {
    // Passwordni hash qilish
    const hashedPassword = sha256(payload.password);

    const staff = await staffModel.create({
      ...payload,
      password: hashedPassword,
    });
    return staff;
  }

  static async changeStaff(id, payload) {
    if (payload.password) {
      payload.password = sha256(payload.password);
    }

    const updated = await staffModel.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) throw new NotFoundError(404, "Hodim topilmadi");
    return updated;
  }

  static async deleteStaff(id) {
    const deleted = await staffModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundError(404, "Hodim topilmadi");
    return deleted;
  }

  static async getAllStaffs() {
    return await staffModel.find().populate("branch", "name address time");
  }

  static async getStaffById(id) {
    const staff = await staffModel.findById(id).populate("branch", "name address time");
    if (!staff) throw new NotFoundError(404, "Hodim topilmadi");
    return staff;
  }
}
