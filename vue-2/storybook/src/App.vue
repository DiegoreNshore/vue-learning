<template>
  <div id="app">
    <MyHeader
      :user="user"
      @onLogin="onLogin"
      @onLogout="onLogout"
      @onCreateAccount="onCreateAccount"
    />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TheButton label="Hello" @onClick="handleClicks" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import TheButton from './stories/Button.vue'
import MyHeader from './stories/Header.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TheButton,
    MyHeader
  },
  data:function() {
    return {
        user: {
          name: null
        }
      };
  },
  methods: {
    handleClicks() {
      console.log('Testing')
    },
    onLogin() {
      console.log('onLogin')
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
      console.log('onLogout')
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
      console.log('onCreateAccount')
    },
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
