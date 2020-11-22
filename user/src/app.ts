import express, {json} from "express";
import morgan from "morgan";

import userRouter from "./routes/user";
import {pageNotFound} from "./middleware/404";

const app = express();


app.use(morgan("dev"));
app.use(json());

app.use("/user", userRouter);

app.use(pageNotFound);

export default app;