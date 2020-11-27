import { io } from "socket.io-client";

const socket = io("ws://localhost:8081");



socket.emit("test", {test: "do"})

socket.on("res", (ress: any) => {
    console.log(ress);
})