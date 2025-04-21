import './assets/index.scss'
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/700.css';
import '@fontsource/ubuntu/500.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
