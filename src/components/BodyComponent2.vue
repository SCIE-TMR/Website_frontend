<template>
  <div class="container font-bold">
    <img src="/upper.webp" alt="" class="upper-img">
    <img src="/lower.png" alt="" class="lower-img">
  </div>
</template>

<script setup>

</script>

<style scoped>
.container{
  display: flex;
  justify-content: flex-start; /* 水平靠左 */
  align-items: center; /* 垂直居中 */
  height: 90%;
  background-color: black;
  width: 100%; /* 占满整个屏幕宽度 */
}
.upper-img{
  min-width: 1800px;
  left:-400px;
  min-height:auto;
  top:-300px;
  position: absolute;
  overflow: hidden;
}
.lower-img{
  min-width: 1600px;
  min-height:auto;
  top:0;
  position:absolute;
}
</style>