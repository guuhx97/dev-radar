import socketio from 'socket.io';

exports.setupWebSocket = server => {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log(socket.id);
    console.log(socket.handshake.query);
  });
};
