import TextToSpeech from './components/TextToSpeech.vue'
import Bot from './components/Bot.vue'
import Transcribe from './components/Transcribe.vue'


export const routes = [
    {path: '/', component: Bot},
    {path: '/transcribe', component: Transcribe},
    {path: '/translate', component: TextToSpeech},
]