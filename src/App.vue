<!-- src/App.vue -->
<template>
    <div id="app">
      <div v-if="isScreenValid">
        <router-view/> 
      </div>
      <div v-else class="warning">
        <h>Your screen is too small, please switch to Laptop or Ipad :]</h>
      </div>
    </div>
  </template>
  
  <script scoped>
  import HomePage from '@/views/HomePage.vue'
  import SignUpPage from '@/views/SignUpPage.vue'
  import AboutUsPage from '@/views/AboutUsPage.vue'
  import ErrorPage from '@/views/ErrorPage.vue'
  export default {
    components: {
      HomePage,
      SignUpPage,
      AboutUsPage,
      ErrorPage
    },
    computed: {
      showhome(){
        return this.$route.name == 'Home';
      },
    },
    data() {
    return {
      isScreenValid: true, // 用于存储当前屏幕是否符合要求
      minWidth: 100, // 最小宽度要求
      minHeight: 0, // 最小高度要求
    };
  },
  methods: {
    checkScreenSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 根据宽度和高度判断屏幕是否满足要求
      this.isScreenValid = width >= this.minWidth && height >= this.minHeight;
    },
  },
  mounted() {
    // 页面挂载时检测屏幕尺寸
    this.checkScreenSize();

    // 监听窗口大小调整
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器，避免内存泄漏
    window.removeEventListener('resize', this.checkScreenSize);
  },
  };
  // src/shims-vue.d.ts
  
  </script>
  
  <style scoped>
  #app {
    background-color:#020410; /* Main background color */
  }
  </style>
  
  
    