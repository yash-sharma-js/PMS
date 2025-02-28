const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
    res.send('Server is running on port ' + port);
});

io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callEnded');
    });

    socket.on('callUser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('callUser', { signal: signalData, from, name });
    });

    socket.on('answerCall', (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
        console.log("data signal ",data.signal)
    });
});

server.listen(port, () => {
    console.log('Server listening on port', port);
});
