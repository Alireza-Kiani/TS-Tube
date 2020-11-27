import ioserver, { Socket, Server } from 'socket.io';

const port = parseInt(process.env.PORT!);

const io = new Server(port);

io.on('connection', (socket: Socket) => {
    console.log("Socket server is up and running");

    socket.on("test", (inee: any) => {
        socket.emit("res", inee);
    })
});
