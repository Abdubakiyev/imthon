import { Router } from "express";
import BranchController from "../controllers/BranchController.js";
import checkToken from "../middleware/checkToken.js";

const BranchRouter = Router();

BranchRouter.post("/", checkToken(["SuperAdmin", "Admin"], "addBranch"), BranchController.addBranch);
BranchRouter.put("/:id", checkToken(["SuperAdmin", "Admin"], "changeBranch"), BranchController.changeBranch);
BranchRouter.delete("/:id", checkToken(["SuperAdmin", "Admin"], "deleteBranch"), BranchController.deleteBranch);
BranchRouter.get("/", checkToken(["SuperAdmin", "Admin"], "branches"), BranchController.getAllBranches);
BranchRouter.get("/:id", checkToken(["SuperAdmin", "Admin"], "branches"), BranchController.getBranchById);

export default BranchRouter;
