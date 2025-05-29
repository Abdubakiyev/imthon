import { branchModel } from "../models/BranchModel.js";
import { NotFoundError } from "../utils/error.js";

export class BranchService {
  static async addBranch(payload) {
    return await branchModel.create(payload);
  }

  static async changeBranch(id, payload) {
    const updated = await branchModel.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) throw new NotFoundError(404, "Filial topilmadi");
    return updated;
  }

  static async deleteBranch(id) {
    const deleted = await branchModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundError(404, "Filial topilmadi");
    return deleted;
  }

  static async getAllBranches() {
    return await branchModel.find();
  }

  static async getBranchById(id) {
    const branch = await branchModel.findById(id);
    if (!branch) throw new NotFoundError(404, "Filial topilmadi");
    return branch;
  }
}
