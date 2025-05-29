import {Router} from "express";
import userController from "../controllers/UserController.js";
import validation from "../middleware/validation.js";

const UserRouter = Router();

UserRouter.post("/register", validation, userController.UserRegister);
UserRouter.post("/login", validation, userController.UserLogin);

export default UserRouter;
