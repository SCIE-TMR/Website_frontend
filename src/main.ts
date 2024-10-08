import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/tailwind.css'; 
import 'swiper/swiper-bundle.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './App.vue'
import router from './router'
import App from './App.vue';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')




