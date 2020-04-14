<template>
  <div id="app">
    <navbar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <page1 />
  </div>
</template>


<script>
import navbar from './components/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import page1 from './views/page1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    page1,
    navbar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  padding-top: 40px;
}

#page1 {
  padding-top: 40px;
}
</style>
