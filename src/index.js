import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';

import UI from './components/app.vue';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new Vue({
    el: 'body',
    render: h => h(UI),
  });
  console.log(ui);
});
