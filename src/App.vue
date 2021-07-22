<template>
  <div id="app">
    <Transcribe/>
  </div>
</template>

<script>
import Transcribe from './components/Transcribe.vue'

export default {
  name: 'App',
  components: {
    Transcribe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
