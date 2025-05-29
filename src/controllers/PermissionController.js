import {PermissionService} from "../servise/PermissionServise.js";

export default class PermissionController {
  static async addPermission(req, res, next) {
    try {
      const permission = await PermissionService.addPermission(req.body);
      res.status(201).json(permission);
    } catch (err) {
      next(err);
    }
  }

  static async deletePermission(req, res, next) {
    try {
      const result = await PermissionService.deletePermission(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async changePermission(req, res, next) {
    try {
      const updated = await PermissionService.changePermission(
        req.params.id,
        req.body
      );
      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  }

  static async allPermissions(req, res, next) {
    try {
      const permissions = await PermissionService.allPermissions();
      res.status(200).json(permissions);
    } catch (err) {
      next(err);
    }
  }

  static async ownPermissions(req, res, next) {
    try {
      const permissions = await PermissionService.ownPermissions(req.user.id);
      res.status(200).json(permissions);
    } catch (err) {
      next(err);
    }
  }
}
