<template>
  <div class="body-page">
    <div class="text-container">
      <div class="line scie font-bold">
        SCIE
      </div>
      <div class="line tomorrow font-bold">
        TOMORROW
      </div>
      <div class="line font-italic text-3xl">
        (static preview)
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BodyPage1',
};
</script>

<style scoped>
.body-page {
  display: flex;
  justify-content: flex-start; /* 水平靠左 */
  align-items: center; /* 垂直居中 */
  height: 90%;
  background-color: black;
  width: 100%; /* 占满整个屏幕宽度 */
}

.text-container {
  display: flex;
  flex-direction: column; /* 垂直排列 SCIE 和 TOMORROW */
  align-items: flex-start; /* 保证左对齐 */
  padding-left: 127px; /* 距离页面左侧一点间距 */
  padding-bottom: 40px;
  letter-spacing: 0.3rem;
}

.line {
  color: white;
  font-family: 'Ahsing', sans-serif; /* 自定义字体 */
  margin-left: 0; /* 确保文本从左侧开始 */
}

.scie {
  font-size: 6.5rem; /* 调整字体大小 */
}

.tomorrow {
  font-size: 6.5rem; /* TOMORROW 的字体更大 */
  margin-top: 5px; /* 控制 SCIE 和 TOMORROW 之间的距离 */
}
</style>