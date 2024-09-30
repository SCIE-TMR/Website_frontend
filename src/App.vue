<!-- src/App.vue -->
<template>
    <div id="app">
      <HomePage v-if="showNav"/>
      <transition name="fade" mode="out-in"><router-view/></transition>
    </div>
  </template>
  
  <script>
  //import Hp from '/Users/ljq/Desktop/Website_frontend/src/views/Hp.vue'
  import HomePage from '@/views/HomePage.vue'
  import SignUpPage from '@/views/SignUpPage.vue'
  export default {
    components: {
      HomePage,
      SignUpPage,
    },
    computed: {
      showNav(){
        return this.$route.name !== 'SignUpPage' && this.$route.name !== 'Login' && this.$route.name !== 'Forum' && this.$route.name !== 'Resources' && this.$route.name !== 'Aboutus';
      }
    }
  };
  // src/shims-vue.d.ts
  
  </script>
  
  <style>
  #app {
    background-color:#020410; /* Main background color */
    min-width: 100vh;
  }
  .fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(30px); /* 加上位移效果 */
}
  </style>
  
  
    