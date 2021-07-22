<template>
  <!-- <div class="container bg-dark">
    <div>
      <button class="btn btn-primary me-3" @click="translate">
        Text-to-Speech
      </button>
      <button class="btn btn-primary me-3" @click="transcribe">
        Speech-to-Text
      </button>
      <button class="btn btn-primary me-3" @click="$router.push('/bot')">
        Chat-bot
      </button>
    </div> -->

  <div class="nav-page">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/" exact>Chat-bot</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/translate">Text to Speech</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/transcribe"
          >Speech to Text</router-link
        >
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
import $ from "jquery";
export default {
  methods: {
    translate() {
      $("#stopRecognition").click();
      this.$router.push("/");
      setTimeout(function () {
        let speech = new window.SpeechSynthesisUtterance();
        speech.lang = "en";
        let voices = [];
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        let voiceSelect = document.querySelector("#voices");
        voices.forEach(
          (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
        );
      }, 100);
    },
    transcribe() {
      $("#cancel").click();
      this.$router.push("/transcribe");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover,
a:active,
a.router-link-active {
  color: white;
  border-color: white;
  background: #f1a80a;
}
.nav-page {
  width: max-content;
  margin: 10px auto;
}
</style>