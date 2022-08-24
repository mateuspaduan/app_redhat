
const server = require("../www.js")
const io = require('socket.io')(server);

io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
  });