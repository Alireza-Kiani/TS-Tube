import express from "express";
import morgan from "morgan"
import {json} from "body-parser";


import userRouter from "./routes/user";
import tokenRouter from "./routes/token";
import {pageNotFound} from "./middleware/404";

import sequelize from "./db/connection";
import "./db/relation";

const app = express();


app.use(morgan("dev"));
app.use(json());


app.use("/user", userRouter);
app.use("/token", tokenRouter);

app.use(pageNotFound);

sequelize.sync().then(async ()=> {
    console.log("DB Connected");
}).catch((error) => {
    console.log(error)
});

export default app;