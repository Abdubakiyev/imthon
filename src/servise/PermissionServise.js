import { permissionModel } from "../models/PermissionModel.js";
import { NotFoundError, ValidationError } from "../utils/error.js";

export class PermissionService {
  static async addPermission(payload) {
    const exists = await permissionModel.findOne({
      staff: payload.staff,
      permissionModel: payload.permissionModel,
    });
    if (exists) throw new ValidationError(400, "Permission already exists");

    const permission = await permissionModel.create(payload);
    return permission;
  }

  static async deletePermission(id) {
    const deleted = await permissionModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundError(404, "Permission not found");
    return { message: "Permission deleted" };
  }

  static async changePermission(id, updates) {
    const permission = await permissionModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!permission) throw new NotFoundError(404, "Permission not found");
    return permission;
  }

  static async allPermissions() {
    return await permissionModel.find().populate("staff", "-password");
  }

  static async ownPermissions(staffId) {
    return await permissionModel.find({ staff: staffId });
  }
}
