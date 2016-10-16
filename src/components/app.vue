<script>
  import app from '../app';
  import Login from './login.vue';

  const registerUser = (vm) => (result) => { 
    vm.user = result.data.email;
  };

  export default {
    data(){
      return {
        user: null,
      }
    },
    mounted(){
      app.authenticate()
        .then(registerUser(this))
        .catch(() => {/* let user authenticate with login component */});

      // reauthenticate on transport upgrade, see https://docs.feathersjs.com/authentication/client.html
      app.io.io.engine.on('upgrade', () => {
        app.authenticate()
          .then(registerUser(this))
          .catch(() => {/* @TODO: figure out what to do. */});
      });
    },
    components: {
      login: Login,
    },
    methods: {
      onLogin(data){
        app.authenticate({
          type: 'local',
          email: data.email,
          password: data.password
        })
          .then(registerUser(this))
          .catch(error => { /* @TODO: show an error */ });
      },
    },
  }
</script>

<template>
  <div id="gamux-client" class="container">
    <div class="jumbotron">
      <h1>Welcome to Gamux</h1>
      <login @login="onLogin" v-if="!user"></login>
    </div>
  </div>
</template>
