import {AdminService} from "../servise/AdminServise.js";

export default class AdminController {
  static async addAdmin(req, res, next) {
    try {
      const admin = await AdminService.addAdmin(req.body, req.user);
      res.status(201).json(admin);
    } catch (error) {
      next(error);
    }
  }

  static async getAdmins(req, res, next) {
    try {
      const admins = await AdminService.getAdmins(req.user);
      res.json(admins);
    } catch (error) {
      next(error);
    }
  }

  static async getAdminById(req, res, next) {
    try {
      const admin = await AdminService.getAdminById(req.params.id, req.user);
      res.json(admin);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAdmin(req, res, next) {
    try {
      const result = await AdminService.deleteAdmin(req.params.id, req.user);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
