<template>
  <div  class="container mt-5 bg-dark">
    <h1 class="text-light">Speech to Text</h1>
    <div class="buttons">
      <button id="startRecognition"  class="btn btn-warning mt-5 me-3" title="Start Recognition">
        <i class="far fa-play-circle start-icon"></i>
      </button>
      <button id="stopRecognition"  class="btn btn-warning mt-5 me-3" title="Stop Recognition">
        <i class="fas fa-stop-circle stop-icon"></i>
      </button>
      <button title="Clear"  class="btn btn-warning mt-5 me-3" style="float: right" @click="clear()">
        <i class="fas fa-trash-alt stop-icon"></i>
      </button>
    </div>
    <div class="seperator"></div>
    <div class="words" contenteditable></div>
    <div class="spinner" v-if="listening">
      <div class="hollow-dots-spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import swal from "sweetalert";
export default {
  data() {
    return {
      listening: false,
    };
  },
  methods: {
    clear() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          $(".words").empty();
          swal("Deleted!", {
            icon: "success",
          });
          let p = document.createElement("p");
          const words = document.querySelector(".words");
          words.appendChild(p);
        } else {
          swal("Data is safe!");
        }
      });
    },
  },
  mounted() {
    var _this = this;
    $(function () {
      try {
        var recognition = new window.webkitSpeechRecognition();
        // var speechRecognitionGrammerList = new window.SpeechGrammarList();
        // speechRecognitionGrammerList.addFromString("#JSGF V1.0;", 1)
      } catch (e) {
        recognition = Object;
      }
      let p = document.createElement("p");
      p.textContent = "Click on Start button!";
      const words = document.querySelector(".words");
      words.appendChild(p);

      // recognition.grammers = speechRecognitionGrammerList;
      // recognition.lang = 'en-US'
      recognition.continuous = true;
      recognition.interimResults = false;
      var txtRec = "";
      recognition.onresult = function (event) {
        txtRec = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          txtRec += event.results[i][0].transcript;
        }
        p.textContent = txtRec;

        if (event.results[0].isFinal) {
          this.status = "listening..";
          p = document.createElement("p");
          words.appendChild(p);
        }
      };
      $("#startRecognition").click(function () {
        p.textContent = "Say something!";
        _this.listening = true;
        recognition.start();
      });
      $("#stopRecognition").click(function () {
        _this.listening = false;
        recognition.stop();
      });
    });
  },
};
</script>

<style scoped>
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
  margin: 50px auto;
  color: white;
  padding: 1rem 1rem 2rem 5rem;
  background: linear-gradient(30deg, rgb(44, 188, 99), rgb(22, 164, 138) 70%);
  position: relative;
  line-height: 3rem;
}
.start-icon,
.stop-icon {
  font-size: 150%;
  color: red;
}

button {
  margin: 0.5rem;
  cursor: pointer;
}
.seperator {
  border-top: 1px solid lightblue;
  margin: 10px 0;
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