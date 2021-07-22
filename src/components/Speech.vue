<template>
  <div class="container">
    <div class="words" contenteditable></div>
    {{status}}
    <div class="spinner">
      <div class="hollow-dots-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status: 'listening'
    }
  },
  mounted() {
    let p = document.createElement("p");
    p.textContent = "Say something!!";
    const words = document.querySelector(".words");
    words.appendChild(p);
    var recognition = new window.webkitSpeechRecognition();
    recognition.addEventListener("result", (e) => {
      this.status = ''
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      p.textContent = transcript;
      if (e.results[0].isFinal) {
        this.status = 'listening..'
        p = document.createElement("p");
        words.appendChild(p);
      }
    });

    recognition.addEventListener("end", recognition.start);
    recognition.start();
  },
};
</script>

<style>
html {
  font-size: 10px;
}
body {
  background: #333744 !important;
  font-size: "helvetica neue";
  font-weight: 200;
  font-size: 20px;
}
p {
  margin: 0 0 3rem;
}
.words:before {
  content: "";
  position: absolute;
  width: 4px;
  top: 0;
  left: 30px;
  bottom: 0;
  border: 1px solid;
  border-color: transparent #efe4e4;
}
.container {
  max-width: 500px;
  margin: 50px auto;
  color: white;
  padding: 1rem 1rem 2rem 5rem;
  background: linear-gradient(30deg, rgb(44, 188, 99), rgb(22, 164, 138) 70%);
  position: relative;
  line-height: 3rem;
}

.hollow-dots-spinner,
.hollow-dots-spinner * {
  box-sizing: border-box;
}

.hollow-dots-spinner {
  height: 15px;
  width: calc(30px * 3);
}

.hollow-dots-spinner .dot {
  width: 15px;
  height: 15px;
  margin: 0 calc(15px / 2);
  border: calc(15px / 5) solid #ff1d5e;
  border-radius: 50%;
  float: left;
  transform: scale(0);
  animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
}

.hollow-dots-spinner .dot:nth-child(1) {
  animation-delay: calc(300ms * 1);
}

.hollow-dots-spinner .dot:nth-child(2) {
  animation-delay: calc(300ms * 2);
}

.hollow-dots-spinner .dot:nth-child(3) {
  animation-delay: calc(300ms * 3);
}

@keyframes hollow-dots-spinner-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
