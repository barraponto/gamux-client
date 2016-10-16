import io from 'socket.io-client';
import feathers from 'feathers-client';

const socket = io('http://localhost:3030/');
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({
    storage: window.localStorage,
  }));

module.exports = app;
