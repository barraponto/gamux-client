<script>
  import Login from './login.vue';

  export default {
    components: {
      login: Login
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div id="gamux-client">
    <h1>Hello World</h1>
    <login></login>
  </div>
</template>

<style>
  h1 { color: blue; }
</style>
