<!-- src/App.vue -->
<template>
    <div id="app">
      <Home/>
      <!-- Add other content here -->
    </div>
  </template>
  
  <script>
  
  import Navbar from './components/Navbar.vue'
  import Home from './views/Home.vue'
  
  export default {
    components: {
      Home
    },
  };
  // src/shims-vue.d.ts
  
  </script>
  
  <style>
  #app {
    text-align: center;
    background-color: black; /* Main background color */
    color: white;
    min-height: 100vh;
  }
  </style>
  
  
    