<template>
        <el-container>
            <el-header height="11vh" class="hd">
                <Nav/>
            </el-header>
            <el-container>
                <el-main> <!--主要部分-->
                    <el-scrollbar height="89vh">
                    <div class="container">
                        <div class="OurMission">
                            <h class="UpperText">OUR MISSION</h>
                            <div class="MiddleText">We firmly believe that every SCIE student possesses a brilliant spark waiting to ignite their future. That's why we've dedicated ourselves to crafting an all-in-one application platform - a guiding light to illuminate your journey and banish the shadows of doubt and worry!</div>
                            <img src="@/assets/img/AB1.png" alt="AB1" class="Image-left">
                            <img src="@/assets/img/AB2.png" alt="AB2" class="Image-right">
                        </div>
                        <div class="OurLS">
                            <div class="BG1">
                                <a herf="#" class="text">Forum<i class='bx bx-link link'></i></a>
                                <h class="text1">Engage in enriching discussions and exchange valuable insights with accomplished graduates and ambitious peers!</h>
                            </div>
                            <div class="BG2">
                                <a herf="#" class="text">University Gallery<i class='bx bx-link link'></i></a>
                                <h class="text1">Gain a deep understanding of your dream institutions through the meticulously curated university profiles.</h>
                            </div>
                            <div class="BG3">
                                <a herf="#" class="text">Application Process<i class='bx bx-link link'></i></a>
                                <h class="text1">Visualize and manage your application progress with well-organized system.</h>
                            </div>
                            <div class="BG4">
                                <a herf="#" class="text">Resources<i class='bx bx-link link'></i></a>
                                <h class="text1">Discover a wealth of resources specifically selected to meet your unique needs and goals.</h>
                            </div>
                            <img class="BG5" src="@/assets/img/AB3.png" alt="AB3">
                            <h class="sideText">OUR LIGHTSPOT</h>
                        </div>
                        <div class="OurTL">
                            <h  class="text">OUR TIMELINE</h>
                            <el-timeline style="max-width: 43em" class="tl">
                                <el-timeline-item center timestamp="2024/1/1" placement="top"> 
                                    <h class="text1">Event start</h>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2024/1/1" placement="top">
                                    <el-card class="card">
                                        <h4>Update Github template</h4>
                                        <p>Tom committed 2024/1/1 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2024/1/1" placement="top">
                                    <el-card class="card">
                                        <h4>Update Github template</h4>
                                        <p>Tom committed 2024/1/1 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2024/1/1" placement="top" >
                                    <el-card class="card">
                                        <h4>Update Github template</h4>
                                        <p>Tom committed 2024/1/1 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item timestamp="2024/1/1" placement="top">
                                    <el-card class="card">
                                        <h4>Update Github template</h4>
                                        <p>Tom committed 2024/1/1 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                                <el-timeline-item center timestamp="2024/1/1" placement="top">
                                    <h class="text1">Event end</h>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                        <div class="MOT">
                            <h  class="text">MEET OUR TEAM!</h>
                            <div class="ABUS">
                            <ABUS/>
                            </div>
                            <div class="like">
                                <button @click="launchConfetti" class="button" id="btn">
                                    <span>🥕</span>
                                    <span>Like</span>
                                </button>
                            </div>
                            <img src="@/assets/img/AB4.png" alt="image" class="AB4">
                        </div>
                        <div class="Collaboration">
                            <p class="text3">OUR COLLABORATION</p>
                            <div class="show">
                                <div class="container1">
                                    <div class="card">
                                        <img src="@/assets/img/SignupBG.png" alt="page">
                                        <div class="head">Page 1</div>
                                    </div>

                                    <div class="card">
                                        <img src="@/assets/img/SignupBG.png" alt="page">
                                        <div class="head">Page 2</div>
                                    </div>

                                    <div class="card">
                                        <img src="@/assets/img/SignupBG.png" alt="page">
                                        <div class="head">Page 3</div>
                                    </div>

                                    <div class="card">
                                        <img src="@/assets/img/SignupBG.png" alt="page">
                                        <div class="head">Page 4</div>
                                    </div>

                                    <div class="card">
                                        <img src="@/assets/img/SignupBG.png" alt="page">
                                        <div class="head">Page 5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
</template>

<script setup scoped>
import Nav from '@/components/Nav.vue';
import ABUS from '@/components/ABUS.vue';
import confetti from 'canvas-confetti'

// 定义 confetti 触发的方法
const launchConfetti = () => {

  confetti({
    particleCount: 150,
    spread: 60,
    origin: {
      // 计算按钮相对于窗口的位置，确保 confetti 从按钮的位置出现
      x: 0.5,
      y: 0.7
    }
  });
};
</script>

<style scoped>
.hd{
    z-index: 999;
}
.container{
    width:100%;
    height: 500vh;
    display:flex;
    flex-direction: column;
}
.container .OurMission{
    background: #e4e4e4;
    height: 89vh;
    width:100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color:#020410;
}
.container .OurMission .Image-right{
    height: auto;
    width:54.375em;
    border-radius: 10px;
    margin-top:5.625em;
    margin-left:33.125em;
    position:absolute;
    min-width: 54.375em;
    min-height: auto;
}
.container .OurMission .Image-left{
    height: 15em;
    width:auto;
    border-radius: 10px;
    margin-top:60px;
    margin-left:60px;
    position:absolute;
    min-width: auto;
    min-height: 15em;
}
.container .OurMission .UpperText{
    color:white;
    font-size: 60px;
    font-weight: 500;
    font-family: "Times New Roman",sans-serif;
    z-index:100;
    position: absolute;
    margin-top: 145px;
    margin-left: 123px;
    min-width: 500px;
}
.container .OurMission .MiddleText{
    color:white;
    font-size: 25px;
    font-weight: 500;
    font-family:'Times New Roman', Times, serif;
    z-index:100;
    position: absolute;
    margin-top: 295px;
    margin-left: 110px;
    line-height: 60px;
    height: 300px;
    background-color: #4f4f4f;
    opacity: 0.88;
    width:1000px;
    padding:40px 50px 0px;
}
.container .OurLS{
    background: #020410;
    height: 89vh;
    width:100%;
    border-radius: 10px;
    position: relative;
}
.container .OurLS .BG1{
    background-color: #4f4f4f;
    width:430px;
    height:230px;
    margin-top:90px;
    margin-left:225px;
    border-radius: 15px;
    position: absolute;
}
.container .OurLS .BG2{
    background-color: #4f4f4f;
    width:430px;
    height:230px;
    margin-top:90px;
    margin-left:695px;
    border-radius: 15px;
    position: absolute;
}
.container .OurLS .BG3{
    background-color: #4f4f4f;
    width:430px;
    height:230px;
    margin-top:360px;
    margin-left:225px;
    border-radius: 15px;
    position: absolute;
}
.container .OurLS .BG4{
    background-color: #4f4f4f;
    width:430px;
    height:230px;
    margin-top:360px;
    margin-left:695px;
    border-radius: 15px;
    position: absolute;
    z-index: 100;
}
.container .OurLS .BG5{
    height:700px;
    width:auto;
    position: absolute;
    margin-top: 320px;
}
.container .OurLS a{
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    color:white;
    margin-left: 25px;
    position: absolute;
    margin-top: 10px;
    cursor:pointer;
}
.container .OurLS .text .link{
    color: silver;
    margin-left: 10px;
    margin-top: 5px;
    position:absolute;
    font-size: 40px;
}
.container .OurLS .text1{
    color:white;
    font-family: 'Times New Roman', Times, serif;
    margin-top:160px;
    margin-left:10px;
    position: absolute;
    font-size:14px;
}
.container .OurLS .sideText{
   position: absolute;
    writing-mode: vertical-lr;
    color:#e4e4e4;
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    left:1300px;
    margin-top: 60px;
}
.container .OurTL{
    background: #020410;
    height: 89vh;
    width:100%;
    border-radius: 10px;
}
.container .OurTL .tl{
    margin-left: 300px;
    margin-top:60px;
}
.container .OurTL .tl .text1{
    color:#e4e4e4;
    font-family: 'Times New Roman', Times, serif;
    font-weight:500;
}
.container .OurTL .card{
    background-color: #4f4f4f;
    border-color: #4f4f4f;
    color:#e4e4e4;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
}
.container .OurTL .text{
    color:#e4e4e4;
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    margin-left:300px;
    margin-top: 60px;
    min-width: 500px;
}
.container .MOT{
    background: #020410;
    height: 129vh;
    width:100%;
    border-radius: 10px;
    position: relative;
}
.container .MOT .ABUS{
    position: absolute;
    margin-left: 200px;
    margin-top:170px;
}
.container .MOT .text{
    color:#e4e4e4;
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    margin-left:200px;
    margin-top: 40px;
    position: absolute;
}
.container .MOT .AB4{
    position: absolute;
    opacity: 1;
    margin-top:600px;
    margin-left:125px;
    width:800px;
    height:auto;
    border-radius: 20px;
}
.container .MOT .like{
    position:absolute;
    line-height: 1.5;
    min-block-size: 100vh;
    display: grid;
    place-items: center;
    margin-left:1050px;
    margin-top: 550px;
}
.container .MOT .like button{
    cursor:pointer;
    margin:0;
    padding:0;
    width:150px;
    height:70px;
}
.container .MOT .like .button{
    background-color: #42426f;
    color:#e4e4e4;
    border:0;
    font-size:2rem;
    font-weight:400;
    padding:0.5rem 1.25rem;
    z-index: 99;
    position: relative;
    display:flex;
    gap:0.5rem;
    box-shadow: 
    0px 1.7px 2.2px rgba(0,0,0,0.02),
    0px 4px 5.3px rgba(0,0,0,0.028),
    0px 7.5px 10px rgba(0,0,0,0.035),
    0px 13.4px 17.9px rgba(0,0,0,0.042),
    0px 25.1px 33.4px rgba(0,0,0,0.05),
    0px 60px 80px rgba(0,0,0,0.07);
    border-radius: 10px;
    align-items: center;
}
.container .MOT .like button::before{
    content: "";
    width:158px;
    height:78px;
    position: absolute;
    top:-4px;
    left:-4px;
    transition: all .35s;
    border-radius:10px;
    z-index: -1;
    background: linear-gradient(45deg,red,orange,green,cyan,blue,purple,red);
    filter:blur(5px);
    background-size: 1000%;
    animation: amSize 40s linear infinite;
    opacity: 0;

}
.container .MOT .like button::after{
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:#42426f;
    border-radius:10px;
    z-index:-1;
    opacity:1;
}
.container .MOT .like button:hover::before{
    opacity:1;
}
.container .MOT .like button:hover::after{
    opacity: 0;
}
@keyframes amSize {
    0% {background-position: 0 0;}
    100% {background-position: 1000% 0;}
}
.container .Collaboration{
    background: #020410;
    height: 100vh;
    width:100%;
    border-radius: 10px;
    position: relative;
}
.container .Collaboration .show{
    position: relative;
    height:100px;
    margin-top: 290px;
}
.container .Collaboration .container1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:10vmin;
    font-family: sans-serif;
    overflow: hidden;
    transform:skew(5deg);
}
.container .Collaboration .container1 .card{
    flex:1;
    transition: all 1s ease-in-out;
    height:50vmin;
    position:relative;
}
.container .Collaboration .container1 .card:not(:nth-child(5)){
    margin-right: 1em;
}
.container .Collaboration .container1 .card img{
    width:auto;
    height:100%;
    object-fit: cover;
    transition: all 1s ease-in-out;
    filter:grayscale(100%);
    will-change: transform; /* 解决safari渲染问题 , 问题原因未知 */
}
.container .Collaboration .container1 .card .head{
    color:black;
    background:#ff1eadbf;
    padding:0.5em;
    transform: rotate(-90deg);
    transform-origin: 0% 0%;
    transition: all 0.5s ease-in-out;
    min-width:50%;
    text-align:center;
    position:absolute;
    bottom:0;
    left:0;
    font-size: 1em;
    white-space:nowrap;
}
.container .Collaboration .container1 .card:hover{
    flex-grow: 3;
}
.container .Collaboration .container1 .card:hover img{
    filter:grayscale(0);
}
.container .Collaboration .container1 .card:hover .head{
    text-align:center;
    top:calc(100%-2em);
    color:#e4e4e4;
    background:#4f4f4f;
    font-size: 1em;
    transform: rotate(0deg) skew(-5deg);
    opacity: 0.8;
    min-width: 100%;
}
.container .Collaboration .text3{
    color:#e4e4e4;
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    margin-left:200px;
    margin-top: 100px;
    position: absolute;
}
* {
    margin:0;
    padding:0;
    font-family: 'Bodoni',sans-serif;
}
</style>