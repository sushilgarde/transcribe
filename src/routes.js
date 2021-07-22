import TextToSpeech from './components/TextToSpeech.vue'
import Transcribe from './components/Transcribe.vue'


export const routes = [
    {path: '/transcribe', component: Transcribe},
    {path: '/translate', component: TextToSpeech},
]