import {RequestHandler} from "express";
import {emit} from "../utils/socketPromisify";

class User {
    signUp: RequestHandler = async (req, res) => {
        try {
            const input = req.body;
            const response = await emit("signUpReq", input);
            res.status(201).send(response);
        } catch (error) {
            res.status(400).send({error});
        }
    }

    logIn: RequestHandler = async (req, res) => {
        try {
            const input = req.body;
            const response = await emit("logInReq", input);
            res.status(200).send(response);
        } catch (error) {
            res.status(400).send({error});
        }
    }
}

export default new User();