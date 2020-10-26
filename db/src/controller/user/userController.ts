import {RequestHandler} from "express";
import validator from "validator";
import UserServices from "../user/userServices";

class UserController {

    addUser: RequestHandler = async (req, res) => {
        try {
            const input = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
            }

            if (!input.name || !input.password || !input.username) {
                throw ({message: "Invalid Input"});
            }

            const user = await UserServices.createUser(input);

            res.status(201).send(user);
        } catch (error){
            console.log({place: "DB server / UserController / add user", error})
            res.status(400).send(error);
        }
    }

    findUser: RequestHandler = async (req, res) => {
        try {

            const input: {
                input: string,
                type: "EMAIL" | "USERNAME",
                password: string
            } = {
                input: req.body.input,
                type: validator.isEmail(req.body.input) ? "EMAIL" : "USERNAME",
                password: req.body.password,
            }

            const user = await UserServices.login(input);

            res.status(200).send(user);
        } catch (error){
            console.log({place: "DB server / UserController / add user", error})
            res.status(400).send(error);
        }
    }

    editUser: RequestHandler = async (req, res) => {
        res.status(200).send("editUser");
    }

}

export default new UserController();

