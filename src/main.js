import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import "./assets/tailwind.css"

const app = createApp(App)

app.use(router).use(VueCookies).mount('#app')