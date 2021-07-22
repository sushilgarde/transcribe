<template>
  <div class="container mt-5 bg-dark">
    <h1 class="text-light">Text to Speech</h1>
    <p class="lead text-light mt-4">Select Voice</p>
    <select id="voices" class="form-select bg-secondary text-light"></select>
    <div class="d-flex mt-4 text-light">
      <div class="">
        <p class="lead">Rate</p>
        <input type="range" min="0.1" max="10" value="1" id="rate" step="0.1" />
        <span id="rate-label" class="ms-2">1</span>
      </div>
       <div style='visibility:hidden'>
        <p class="lead">Volume</p>
        <input type="range" min="0" max="1" value="1" step="0.1" id="volume" />
        <span id="volume-label" class="ms-2">1</span>
      </div>
      <div style='visibility:hidden'>
        <p class="lead">Pitch</p>
        <input type="range" min="0" max="2" value="1" step="0.1" id="pitch" />
        <span id="pitch-label" class="ms-2">1</span>
      </div>
    </div>
    <textarea
      class="form-control bg-dark text-light "
      cols="30"
      rows="10"
      placeholder="Type here..."
      style='margin-top: 25px'
    ></textarea>
    <div>
      <button id="start" class="btn btn-success mt-5 me-3" title='Start'><i class="far fa-play-circle icon"></i></button>
      <button id="pause" class="btn btn-warning mt-5 me-3" title='Pause'><i class="fas fa-pause-circle icon"></i></button>
      <button id="resume" class="btn btn-info mt-5 me-3" title='Resume'>Resume</button>
      <button id="cancel" class="btn btn-danger mt-5 me-3" title='Stop'><i class="far fa-stop-circle icon"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(function(){
      let speech = new window.SpeechSynthesisUtterance();
    speech.lang = "en";

    let voices = [];
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
      speech.voice = voices[0];
      let voiceSelect = document.querySelector("#voices");
      voices.forEach(
        (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
      );
    };

    document.querySelector("#rate").addEventListener("input", () => {
      const rate = document.querySelector("#rate").value;
      speech.rate = rate;
      document.querySelector("#rate-label").innerHTML = rate;
    });

    document.querySelector("#volume").addEventListener("input", () => {
      const volume = document.querySelector("#volume").value;
      speech.volume = volume;
      document.querySelector("#volume-label").innerHTML = volume;
    });

    document.querySelector("#pitch").addEventListener("input", () => {
      const pitch = document.querySelector("#pitch").value;
      speech.pitch = pitch;
      document.querySelector("#pitch-label").innerHTML = pitch;
    });

    document.querySelector("#voices").addEventListener("change", () => {
      speech.voice = voices[document.querySelector("#voices").value];
    });

    document.querySelector("#start").addEventListener("click", () => {
      speech.text = document.querySelector("textarea").value;
      console.log('Starting...')
      window.speechSynthesis.speak(speech);
    });

    document.querySelector("#pause").addEventListener("click", () => {
      window.speechSynthesis.pause();
    });

    document.querySelector("#resume").addEventListener("click", () => {
      window.speechSynthesis.resume();
    });

    document.querySelector("#cancel").addEventListener("click", () => {
      window.speechSynthesis.cancel();
    });
    },0)
  },
};
</script>

<style scoped>
.icon{
  font-size: 120%;
}
</style>