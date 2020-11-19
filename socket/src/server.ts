import ioserver, { Socket } from 'socket.io';

const port = process.env.PORT;

// @ts-ignore
const io = ioserver(port);

io.on('connection', (socket: Socket) => {
    console.log("Socket server is up and running");

    socket.on("test", (inee: any) => {
        socket.emit("res", inee);
    })
});
