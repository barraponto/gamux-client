const io = require('socket.io-client');
const feathers = require('feathers-client');

document.addEventListener('DOMContentLoaded', () => {
  const socket = io('http://localhost:3030/');
  const app = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket));

  app.io.emit('lobby:list');
  console.log('this is working');
});
