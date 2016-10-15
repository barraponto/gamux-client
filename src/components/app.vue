<script>
  import io from 'socket.io-client';
  import feathers from 'feathers-client';

  import Login from './login.vue';

  const socket = io('http://localhost:3030/');
  const app = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket))
    .configure(feathers.authentication(
      {storage: window.localStorage}));

  export default {
    components: {
      login: Login
    },
    data: function(){
      return {}
    },
    methods: {
      onLogin(data){
        app.authenticate({
          type: 'local',
          email: data.email,
          password: data.password
        })
        .then(result => { console.log(result); })
        .catch(error => { console.log(error); });
      }
    }
  }
</script>

<template>
  <div id="gamux-client" class="container">
    <div class="jumbotron">
      <h1>Welcome to Gamux</h1>
      <login v-on:login="onLogin"></login>
    </div>
  </div>
</template>

<style>
</style>
