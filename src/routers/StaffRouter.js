import { Router } from "express";
import { StaffController } from "../controllers/StaffController.js";
import checkToken from "../middleware/checkToken.js";

const StaffRouter = Router();

StaffRouter.post("/staff", checkToken(["SuperAdmin", "Admin"], "addStaff"), StaffController.addStaff);
StaffRouter.put("/staff/:id", checkToken(["SuperAdmin", "Admin"], "changeStaff"), StaffController.changeStaff);
StaffRouter.delete("/staff/:id", checkToken(["SuperAdmin", "Admin"], "deleteStaff"), StaffController.deleteStaff);
StaffRouter.get("/staff", checkToken(["SuperAdmin", "Admin"], "staffs"), StaffController.getAllStaffs);
StaffRouter.get("/staff/:id", checkToken(["SuperAdmin", "Admin"], "staffs"), StaffController.getStaffById);

export default StaffRouter;
