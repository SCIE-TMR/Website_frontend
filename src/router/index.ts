import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import HomePage from '@/views/HomePage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import AboutUsPage from '@/views/AboutUsPage.vue';  // About us 页面
import ForumPage from '@/views/ForumPage.vue';      // Forum 页面
import ResourcesPage from '@/views/ResourcesPage.vue'; // Resources 页面    // Login 页面

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: SignUpPage,
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: AboutUsPage,  // 指向新的 About us 页面
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumPage,  // 指向新的 Forum 页面
  },
  {
    path: '/resources',
    name: 'Resources',
    component: ResourcesPage,  // 指向新的 Resources 页面
  },
  {
    path: '/login',
    name: 'Login',
    component: SignUpPage,  // 指向新的 Login 页面
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;