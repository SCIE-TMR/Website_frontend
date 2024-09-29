import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
//import {Home} from 'src/views/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: createApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes:[
    
  ]
});

export default router;