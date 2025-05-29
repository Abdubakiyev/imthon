import { transportModel } from "../models/TransportModel.js";
import { NotFoundError } from "../utils/error.js";

export class TransportService {
  static async addTransport(payload) {
    const transport = await transportModel.create(payload);
    return transport;
  }

  static async changeTransport(id, payload) {
    const updated = await transportModel.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) throw new NotFoundError(404, "Transport topilmadi");
    return updated;
  }

  static async deleteTransport(id) {
    const deleted = await transportModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundError(404, "Transport topilmadi");
    return deleted;
  }

  static async getAllTransports(branchId, search) {
    const query = {};
    if (branchId) query.branch = branchId;
    if (search) {
      query.$or = [
        { model: { $regex: search, $options: "i" } },
        { color: { $regex: search, $options: "i" } },
      ];
    }
    return await transportModel.find(query).populate("branch", "name address time");
  }

  static async getTransportById(id) {
    const transport = await transportModel.findById(id).populate("branch", "name address time");
    if (!transport) throw new NotFoundError(404, "Transport topilmadi");
    return transport;
  }
}
