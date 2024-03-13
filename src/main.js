import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaRegularEnvelope, FaAngleDoubleLeft, FaGithub, FaLinkedin, FaSpellCheck } from 'oh-vue-icons/icons'

addIcons(FaRegularEnvelope, FaAngleDoubleLeft, FaGithub, FaLinkedin, FaSpellCheck)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')
