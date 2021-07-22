<template>
  <div class="container bg-dark">
    <div>
      <button class="btn btn-primary me-3" @click="translate">
        Text-to-Speech
      </button>
      <button class="btn btn-primary me-3" @click="$router.push('/transcribe')">
        Speech-to-Text
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    translate() {
      this.$router.push("/translate");
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
  },
};
</script>

<style scoped>
.container {
  margin: 50px auto;
  color: white;
  padding: 1rem 1rem 2rem 5rem;
  background: linear-gradient(30deg, rgb(44, 188, 99), rgb(22, 164, 138) 70%);
  position: relative;
  line-height: 3rem;
}
</style>