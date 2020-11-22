import {Request, Response} from "express";

export const pageNotFound = (req: Request, res: Response) => {
    res.status(404).send({Error: "Request not Found"})
}