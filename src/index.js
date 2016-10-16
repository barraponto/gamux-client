import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import app from './app';
import UI from './components/app.vue';


document.addEventListener('DOMContentLoaded', () => {
  app.ui = new Vue({
    el: 'body',
    render: h => h(UI),
  });
});
