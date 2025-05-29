import {BranchService} from "../servise/BranchServise.js";

export default class BranchController {
  static async addBranch(req, res, next) {
    try {
      const branch = await BranchService.addBranch(req.body);
      res.status(201).json(branch);
    } catch (error) {
      next(error);
    }
  }

  static async changeBranch(req, res, next) {
    try {
      const updated = await BranchService.changeBranch(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBranch(req, res, next) {
    try {
      const deleted = await BranchService.deleteBranch(req.params.id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }

  static async getAllBranches(req, res, next) {
    try {
      const branches = await BranchService.getAllBranches();
      res.status(200).json(branches);
    } catch (error) {
      next(error);
    }
  }

  static async getBranchById(req, res, next) {
    try {
      const branch = await BranchService.getBranchById(req.params.id);
      res.status(200).json(branch);
    } catch (error) {
      next(error);
    }
  }
}
