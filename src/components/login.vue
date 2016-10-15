<script>
  export default {
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      onSubmit(){
        this.$emit(
          'login', 
          {email: this.email, password: this.password}
        );
      }
    }
  }
</script>

<template>
  <form class="form-signin" v-on:submit.prevent="onSubmit">
    <h2 class="form-signin-heading">Please sign in</h2>
    <label for="email" class="sr-only">Email address</label>
    <input v-model="email" type="email" id="email" 
      class="form-control" placeholder="Email address" required autofocus>
    <label for="password" class="sr-only">Password</label>
    <input v-model="password" type="password" id="password"
      class="form-control" placeholder="Password" required>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>
</template>

<style>
</style>
