<!-- src/App.vue -->
<template>
    <div id="app">
      <HomePage/>
    </div>
  </template>
  
  <script>
  //import Hp from '/Users/ljq/Desktop/Website_frontend/src/views/Hp.vue'
  import HomePage from '@/views/HomePage.vue'
  export default {
    components: {
      HomePage
    },
  };
  // src/shims-vue.d.ts
  
  </script>
  
  <style>
  #app {
    background-color: black; /* Main background color */
    min-height: 100vh;
  }
  </style>
  
  
    