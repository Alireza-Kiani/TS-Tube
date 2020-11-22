import {io} from "../server";
import UserController from "../controller/user/userController";

io.on("signUpRes", async (input: any, cb: any) => {
    await UserController.addUser(input, cb)
});

io.on("logInRes", async (input: any, cb: any) => {
    await UserController.findUser(input, cb)
});
