<template>
  <div class="demo">
    <!-- 数字和 'Members' 放在一起 -->
    <p class="big-number">{{ tweened.number.toFixed(0) }} + Members</p>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import gsap from 'gsap'

const targetNumber = 1000 // 直接指定目标数字
const tweened = reactive({
  number: 0 // 初始值为 0
})

onMounted(() => {
  // 使用 GSAP 来为数字添加动画效果
  gsap.to(tweened, { duration: 2, number: targetNumber })
})
</script>

<style scoped>
.demo {
  position: absolute;
  top: 150px; /* 距离页面顶部 20px */
  left: 125px; /* 距离页面左侧 20px */
}

.big-number {
  font-weight: bold;
  font-size: 4em;
  font-family: "ahsing";
  color: white; /* 设置文字颜色 */
}

body {
  background-color: black; /* 背景颜色为黑色 */
}
</style>