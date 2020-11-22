import {Router} from "express";

import UserController from "../controller/user";

const userRouter = Router();

userRouter.post("/signup", UserController.signUp);

userRouter.post("/login", UserController.logIn);

export default userRouter;