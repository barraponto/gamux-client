import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import io from 'socket.io-client';
import feathers from 'feathers-client';

import UI from './components/app.vue';


document.addEventListener('DOMContentLoaded', () => {
  const socket = io('http://localhost:3030/');
  const app = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket));

  app.ui = new Vue({
    el: 'body',
    render: h => h(UI),
  });
});
