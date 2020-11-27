import { socket } from "../server";
import UserController from "../controller/user/userController";

socket.on("signUpRes", async (input: any, cb: any) => {
    await UserController.addUser(input, cb)
});

socket.on("logInRes", async (input: any, cb: any) => {
    await UserController.findUser(input, cb)
});
