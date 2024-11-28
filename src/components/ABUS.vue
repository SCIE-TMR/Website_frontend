<template>
    <div class="container1" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
        <input type="radio" name="select" id="slide_1" hidden @change="updateSlide(1)" :checked="currentSlide === 1">
        <input type="radio" name="select" id="slide_2" hidden @change="updateSlide(2)" :checked="currentSlide === 2">
        <input type="radio" name="select" id="slide_3" hidden @change="updateSlide(3)" :checked="currentSlide === 3">
        <input type="radio" name="select" id="slide_4" hidden @change="updateSlide(4)" :checked="currentSlide === 4">

        <div class="slider">
            <label for="slide_1" class="slide slide-1"></label>
            <label for="slide_2" class="slide slide-2"></label>
            <label for="slide_3" class="slide slide-3"></label>
            <label for="slide_4" class="slide slide-4"></label>
        </div>

        <div class="card card-1" >
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>
        

        <div class="card card-2">
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>
        

        <div class="card card-3">
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>
        
        <div class="card card-4">
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>

        <div class="card card-1" >
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>

        <div class="card card-1" >
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>

        <div class="card card-1" >
            <div class="img">
                <img src="../../public/member/member2.jpg" alt="Peter">
            </div>
            <div class="content">
                <div class="title">Leo Ronaldo</div>
                <div class="text">
                    克里斯蒂亚诺·罗纳尔多(Cristiano Ronaldo),全名克里斯蒂亚诺·罗纳尔多·多斯·桑托斯·阿维罗(Cristiano Ronaldo dos Santos Aveiro),简称C罗,
                    1985年2月5日出生于葡萄牙马德拉群岛丰沙尔,葡萄牙职业足球运动员，司职边锋/中锋，现效力于沙特阿拉伯职业足球联赛的利雅得胜利足球俱乐部
                </div>
                <h>View More</h>
            </div>
        </div>
    </div>
</template>

<script scoped>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const currentSlide = ref(1);
    const totalSlides = 4;
    let interval = null;

    // 开始轮播
    const startCarousel = () => {
      interval = setInterval(() => {
        currentSlide.value = currentSlide.value < totalSlides ? currentSlide.value + 1 : 1;
        document.getElementById(`slide_${currentSlide.value}`).checked = true;
      }, 3000);
    };

    // 暂停轮播
    const pauseCarousel = () => {
      clearInterval(interval);
    };

    // 恢复轮播
    const resumeCarousel = () => {
      startCarousel();
    };

    // 更新 currentSlide 值
    const updateSlide = (slideNumber) => {
      currentSlide.value = slideNumber;
    };

    onMounted(() => {
      startCarousel(); // 组件挂载时启动轮播
    });

    onBeforeUnmount(() => {
      pauseCarousel(); // 组件销毁时清除定时器
    });

    return {
      currentSlide,
      pauseCarousel,
      resumeCarousel,
      updateSlide,
    };
  }
};
</script>

<style scoped>
.container1{
    width:100vw;
    max-width:850px;
    height:350px;
    background-color: #e4e4e4;
    border-radius: 25px;
    box-shadow: 0 10px 50px rgba(0,0,0,0.3);
    position: relative;
}
.card{
    display:flex;
    align-items: center;
    width:100%;
    height:350px;
    padding-left:30px;
    position:absolute;
    overflow:hidden;
}
.card .img{
    width:260px;
    height:260px;
    border-radius: 20px;
    overflow:hidden;
    flex-shrink: 0;
    box-shadow: 0 10px 50px rgba(0,0,0,0.2);
}
.card .img img{
    width:100%;
    height:100%;
    opacity:0;
    transition: 0.6s;
}
.card .card-1{
    width:100%;
    height:100%;
    opacity:0;
    transition:0.6s;
    
}
#slide_1:checked ~ .card-1 img,
#slide_2:checked ~ .card-2 img,
#slide_3:checked ~ .card-3 img,
#slide_4:checked ~ .card-4 img{
    opacity: 1;
    transition-delay:0.2s;
}
.card .content{
    flex:1;
    padding:0 30px 0 35px;
    left:50px;
    opacity:0;
    transition:0.6s;
    position: relative;
}
#slide_1:checked ~ .card-1 .content,
#slide_2:checked ~ .card-2 .content,
#slide_3:checked ~ .card-3 .content,
#slide_4:checked ~ .card-4 .content{
    opacity:1;
    z-index: 9;
    left:0;
    transition-delay: 0.3s;
}

.card .title{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 160px;
}

.card .text{
    font-size: 17px;
    color:#555;
    text-align:left;
    bottom: 50px;
    padding:10px 0px;
    position: absolute;
    transition: .3s;
}
.card h{
    padding:13px 20px;
    background-color: #42426f;
    color:#e4e4e4;
    text-decoration: none;
    border-radius:50px;
    letter-spacing: 1px;
    font-weight: 600;
    box-shadow: 0 10px 50px rgba(0,0,0,0.2);
    float:right;
    cursor: pointer;
}

.slider{
    position: absolute;
    bottom:25px;
    left:55%;
    transform:translateX(-50%);
    z-index: 1;
}
.slider .slide{
    width:50px;
    height:10px;
    background-color: #fefbfb;
    display: inline-flex;
    margin:0 3px;
    border-radius:5px;
    cursor:pointer;
    position: relative;
    overflow: hidden;
}
.slider .slide::before{
    content:"";
    width:0%;
    height:100%;
    background-color:#42426f;
    border-radius: 5px;
    position:absolute;
    left:0;
    top:0;
    transform:scaleX(0);
    transform-origin: left;
    transition: transform 0.6s;
}

#slide_1:checked ~ .slider .slide-1::before,
#slide_2:checked ~ .slider .slide-2::before,
#slide_3:checked ~ .slider .slide-3::before,
#slide_4:checked ~ .slider .slide-4::before{
    width:100%;
    transform:scaleX(1);
}
</style>