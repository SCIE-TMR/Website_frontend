<template>
    <div class="home-container flex h-full">
      <!-- 导航栏 -->
      <Navbar />
  
      <!-- 轮播的主体部分 -->
      <div class="body-container" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
        <!-- 动态加载 body 组件 -->
        <transition name="fade" mode="out-in">
          <component :is="bodies[currentIndex]" :key="currentIndex"></component>
        </transition>
      </div>
  
      <!-- 圆点指示器 -->
      <div class="dots">
        <span
          v-for="(body, index) in bodies"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToPage(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Navbar from '../components/Navbar.vue';
  

  
  // 导入4个 body 组件
  import BodyComponent1 from '../components/BodyComponent1.vue';
  import BodyComponent2 from '../components/BodyComponent2.vue';
  import BodyComponent3 from '../components/BodyComponent3.vue';
  import BodyComponent4 from '../components/BodyComponent4.vue';
  
  // 轮播组件的列表
  const bodies = [BodyComponent1, BodyComponent2, BodyComponent3, BodyComponent4];
  
  // 当前展示的组件索引
  const currentIndex = ref(0);
  let interval;
  
  // 自动轮播的时间间隔
  const carouselInterval = 5000;
  
  // 自动轮播逻辑
  const startCarousel = () => {
    interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % bodies.length;
    }, carouselInterval);
  };
  
  // 暂停轮播
  const pauseCarousel = () => {
    clearInterval(interval);
  };
  
  // 恢复轮播
  const resumeCarousel = () => {
    startCarousel();
  };
  
  // 点击圆点切换到对应页面
  const goToPage = (index) => {
    currentIndex.value = index;
  };
  
  // 生命周期管理
  onMounted(() => {
    startCarousel();
  });
  
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    position: relative;
  }
  
  .body-container {
    width: 100%;
    height: 750px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dots {
  position: absolute;
  bottom: 60px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 120px;
}

.dot {
  width: 55px;
  height: 35px;
  background-image: url('src/assets/img/SH5.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s, filter 0.3s;

  /* Default fill deep gray */
  filter: grayscale(100%) brightness(50%) ;
}

.dot.active {
  /* Active state with purple fill */
  filter: invert(70%) sepia(9%) saturate(791%) hue-rotate(201deg) brightness(250%) contrast(88%);
  transform: scale(1.2);
}

  /* 动画样式 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out; /* 将过渡时间延长为1.5秒，并加入 ease-in-out 过渡效果 */
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>