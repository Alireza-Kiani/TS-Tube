import socket from "socket.io-client";

// @ts-ignore
const io = socket("ws://localhost:8081");

io.emit("serverConnected", "user", (err: any) => {
    if (!err) {
        console.log("Server connected to socket server");
    } else {
        console.log(err)
    }
});

export {io};