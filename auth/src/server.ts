import socket from "socket.io-client";

//@ts-ignore
const io = socket("ws://localhost:8081");



io.emit("test", {test: "do"})

io.on("res", (ress: any) => {
    console.log(ress);
})