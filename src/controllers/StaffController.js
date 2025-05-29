import {StaffService} from "../servise/StaffServise.js";

export class StaffController {
  static async addStaff(req, res, next) {
    try {
      const staff = await StaffService.addStaff(req.body);
      res.status(201).json(staff);
    } catch (error) {
      next(error);
    }
  }

  static async changeStaff(req, res, next) {
    try {
      const updated = await StaffService.changeStaff(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }

  static async deleteStaff(req, res, next) {
    try {
      const deleted = await StaffService.deleteStaff(req.params.id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }

  static async getAllStaffs(req, res, next) {
    try {
      const staffs = await StaffService.getAllStaffs();
      res.status(200).json(staffs);
    } catch (error) {
      next(error);
    }
  }

  static async getStaffById(req, res, next) {
    try {
      const staff = await StaffService.getStaffById(req.params.id);
      res.status(200).json(staff);
    } catch (error) {
      next(error);
    }
  }
}
