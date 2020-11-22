import socket from "socket.io-client";

import sequelize from "./db/connection";
import "./db/relation";

sequelize.sync().then(async ()=> {
    console.log("Database connected");
}).catch((error) => {
    console.log(error)
});

// @ts-ignore
export const io = socket("ws://localhost:8081");

io.emit("serverConnected", "db", (err: any) => {
    if (!err) {
        console.log("Server connected to socket server");
    } else {
        console.log(err)
    }
});

import "./routes/routes";
