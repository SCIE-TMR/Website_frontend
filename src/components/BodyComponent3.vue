<template>
  <div class="container">
    <div class="text-wrapper">
      <div class="curved-text" viewBox="0 0 600 200">
        WE
      </div>
      <div class="curved-text1" viewBox="0 0 600 200">
        CAN
      </div>
      <div class="regular-text">
        <p>transfer our</p>
        <p>dreams into reality!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurvedTextComponent',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90vh;
  width:100vw;
  background-color: black;
  color: white;
  padding-right: 50px;
}

.text-wrapper {
  text-align: right;
}

.curved-text {
  font-size:130px;
  font-family:"ahsing", serif;
  margin-right: 600px;;
  margin-bottom: -220px;
  animation: rotateText1 2s forwards; /* 旋转动画 */
  transform-origin: 50% 50%; /* 设置围绕 SVG 的中心点旋转 */
}
.curved-text1 {
  font-size:130px;
  font-family:"ahsing", serif;
  margin-right: 300px;;
  margin-bottom: 0px;
  animation: rotateText2 2s forwards; /* 旋转动画 */
  transform-origin: 50% 50%; /* 设置围绕 SVG 的中心点旋转 */
}
.regular-text {
  font-size: 70px;
  font-family: 'Bodoni', sans-serif; 
  text-transform:lowercase;
  margin-bottom:40px;
  letter-spacing: 0.3rem;
}

.regular-text p {
  margin-bottom: 0px;
  padding: 0px;
}
@keyframes rotateText1 {
  0% {
    transform: rotate(-360deg) ; /* 从360度外开始旋转 */
  }
  100% {
    transform: rotate(-13deg) ; /* 旋转到正常位置 */
  }
}
@keyframes rotateText2 {
  0% {
    transform: rotate(-360deg) ; /* 从360度外开始旋转 */
  }
  100% {
    transform: rotate(-6deg) ; /* 旋转到正常位置 */
  }
}
</style>