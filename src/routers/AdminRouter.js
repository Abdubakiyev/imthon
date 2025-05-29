import { Router } from "express";
import AdminController from "../controllers/AdminController.js";
import checkToken from "../middleware/checkToken.js";
import isSuperAdmin from "../middleware/isSuperAdmin.js";

const AdminRouter = Router();

AdminRouter
    .post("/addAdmin",checkToken,isSuperAdmin, AdminController.addAdmin)
    .get("/admins",checkToken,isSuperAdmin, AdminController.getAdmins)
    .get("/admin/:id",checkToken,isSuperAdmin, AdminController.getAdminById)
    .delete("/admin/:id",checkToken,isSuperAdmin, AdminController.deleteAdmin)

export default AdminRouter;
