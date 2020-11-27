import { io } from "socket.io-client";

const socket = io("ws://localhost:8081");

socket.emit("serverConnected", "user", (err: any) => {
    if (!err) {
        console.log("Server connected to socket server");
    } else {
        console.log(err)
    }
});

export { socket };