<template>
  <div id="app">
    <Navbar />
    <MainPage />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MainPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  background: #333744 !important;
}
body {
  background: #333744 !important;
}
.container {
  margin: 50px auto;
  color: white;
  padding: 2rem;
  background: linear-gradient(30deg, rgb(44, 188, 99), rgb(22, 164, 138) 70%);
  position: relative;
}
</style>
