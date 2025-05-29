import { Router } from "express";
import PermissionController from "../controllers/PermissionController.js";
import checkToken from "../middleware/checkToken.js";
import checkRole from "../middleware/checkRole.js";
import checkPermission from "../middleware/checkPermission.js";

const PermissionRouter = Router();

PermissionRouter.use(checkToken);

PermissionRouter.post("/add", checkRole("Admin", "SuperAdmin"), checkPermission("addPermission"), PermissionController.addPermission);
PermissionRouter.delete("/delete/:id", checkRole("Admin", "SuperAdmin"), checkPermission("deletePermission"), PermissionController.deletePermission);
PermissionRouter.put("/change/:id", checkRole("Admin", "SuperAdmin"), checkPermission("changePermission"), PermissionController.changePermission);
PermissionRouter.get("/all", checkRole("Admin", "SuperAdmin"), checkPermission("allPermissions"), PermissionController.allPermissions);
PermissionRouter.get("/own", PermissionController.ownPermissions);

export default PermissionRouter;
