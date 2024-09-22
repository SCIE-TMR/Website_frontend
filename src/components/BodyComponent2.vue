<template>
  <div class="body-component">
    <div class="text-wrapper">
      <!-- 使用 SVG 实现镂空文字 -->
      <svg class="curved-text" viewBox="0 0 600 200">
        <text class="hollow-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
          Unlock Your Potential
        </text>
      </svg>
      
      <div class="regular-text">
        <p class="letter-pullup">transfer our</p>
        <p class="letter-pullup">dreams into reality!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.body-component {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-image: url('/src/assets/img/Page2BG1.png'); /* 这里插入你的背景图片路径 */
  background-size: cover; /* 背景图根据容器大小自动适应 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 不重复背景图 */
  color: white;
  padding-right: 20vw;
}

.text-wrapper {
  position: relative;
  text-align: right;
}

.curved-text {
  width: 600px;
  height: 200px;
  margin-bottom: 20px;
  animation: rotateText 2s forwards; /* 旋转动画 */
  transform-origin: 50% 50%; /* 设置围绕 SVG 的中心点旋转 */
}

.hollow-text {
  font-size: 60px;
  font-family: 'ahsing', serif;
  fill: none; /* 没有填充色，实现镂空 */
  stroke: white; /* 使用白色描边 */
  stroke-width: 2px; /* 描边宽度 */
  letter-spacing: 10px; /* 调整字符间距 */
}

.regular-text {
  font-size: 30px;
  font-family: 'Bodoni', sans-serif;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

.letter-pullup {
  display: inline-block;
  overflow: hidden;
  position: relative;
  animation: pullup 1s forwards;
}

.letter-pullup:nth-child(1) {
  animation-delay: 0s;
}

.letter-pullup:nth-child(2) {
  animation-delay: 0.5s;
}

/* 逐字上拉效果 */
@keyframes pullup {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 文字围绕某个点旋转的动画 */
@keyframes rotateText {
  0% {
    transform: rotate(-360deg); /* 从360度外开始旋转 */
  }
  100% {
    transform: rotate(0deg); /* 旋转到正常位置 */
  }
}
</style>