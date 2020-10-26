import {Router} from "express";
import UserController from "../controller/user/userController";

const userRouter = Router();

userRouter.post("/create", UserController.addUser);

userRouter.post("/find", UserController.findUser);

userRouter.patch("/edit", UserController.editUser);

export default userRouter;