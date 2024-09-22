import './assets/main.css'
// 引入 Swiper 的样式
import '/Users/ljq/Desktop/Website_frontend/node_modules/swiper/swiper.min.css';
import './assets/style/fonts.css'
// 引入 Tailwind CSS

import './assets/tailwind.css'; 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './App.vue'
import router from './router'
import App from './App.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')




