<!-- src/App.vue -->
<template>
    <div id="app">
      <HomePage v-if="showNav"/>
      <router-view/>
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
  
  <style scoped>
  #app {
    background-color:#020410; /* Main background color */
    min-width: 100vh;
  }
  </style>
  
  
    