import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'

import './assets/styles/main.css'
import './assets/styles/vuetify.css'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)

app.mount('#app')
