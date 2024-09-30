<template>
    <header class="header">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <nav  class="navbar">
            <router-link to="/Home">Home</router-link>
            <router-link to="/Resources">Resources</router-link>
            <router-link to="/Forum">Forum</router-link>
            <router-link to="/Aboutus">About us</router-link>
        </nav>

        <form action="#" class="search-bar">
            <input type="text" placeholder="Search...">
            <button type="submit"><i class='bx bx-search'></i></button>
        </form>
    </header>
    <div class="background"></div>
    <div class="container">
        <div class="content">
            <h2 class="logo"><i class='bx bxs-cat' ></i>  SCIE Tomorrow</h2>

            <div class="text-sci">
                <h2>Welcome! <br><span>To Your New Journey.</span></h2>
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, unde.</p>

                <div class="social-icons">
                    <a href="#"><i class='bx bxl-linkedin' ></i></a>
                    <a href="#"><i class='bx bxl-facebook' ></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                </div>
            </div>
        </div>
        <div :class="['logreg-box', { 'active': isRegisterActive }]">
            <div class="form-box login">
                <form action="#">
                    <h2>Sign In</h2>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input types="email" required>
                        <label>Email</label>
                     </div>
                    
                     <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input types="password" required>
                        <label>Password</label>
                     </div>

                     <div class="remember-forgot">
                        <label><input type="checkbox" class="ck">Remember me</label>
                        <a href="#" class="first">Forgot Password?<br></a> 
                    </div>

                        <button type="submit" class="btn">Sign In</button>

                        <div class="login-register">
                            <p>Don't have an account?<a href="#" class="register-link" @click.prevent="switchToRegister">Sign up</a></p> 
                        </div>
                     
                </form>
            </div>
            <div class="form-box register">
                <form action="#">
                    <h2>Sign Up</h2>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-user' ></i></span>
                        <input types="text" required>
                        <label>Name</label>
                     </div>

                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope' ></i></span>
                        <input types="email" required>
                        <label>Email</label>
                     </div>

                     <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input types="password" required>
                        <label>Password</label>
                     </div>

                     <div class="remember-forgot">
                        <label><input type="checkbox">I agree to the terms & conditions</label>
                        <a href="#" class="second">Forgot Password?<br></a> <!--记得改路由-->
                    </div>

                        <button type="submit" class="btn">Sign Up</button>

                        <div class="login-register">
                            <p>Already have an account?<a href="#" class="login-link" @click.prevent="switchToLogin">Sign in</a></p> <!--记得改路由-->
                        </div>
                     
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isRegisterActive: false, // 控制表单状态的变量
    };
  },
  methods: {
    switchToRegister() {
      this.isRegisterActive = true; // 切换到注册表单
    },
    switchToLogin() {
      this.isRegisterActive = false; // 切换回登录表单
    },
  },
};
</script>

<style scoped>
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Bodoni',sans-serif;
}
.logreg-box .form-box.login{
    transform: translateX(0);
    transition: transform .6s ease;
    transition-delay: .7s;
}
.logreg-box.active .form-box.login{
    transform: translateX(620px);
    transition-delay: 0s;
}
body{
    background: #020410;
    min-width: 1400px;
}
.header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    padding:25px 12.5%;
    background: yellowgreen;
    display: flex;
    justify-content: space-around;
    align-items:center;
    z-index:100;
    background: transparent;
    min-width: 800px;
}
.navbar a{
    position:relative;
    font-size:16px;
    color: #e4e4e4;
    text-decoration: none;
    font-weight: 500;
    margin-right:30px;
}
.navbar a::after{
    content:'';
    bottom:-6px;
    position:absolute;
    left:0;
    width:100%;
    height:2px;
    background: #e4e4e4;
    border-radius: 5px;
    transform:translateY(10px);
    transition: .5s;
    opacity: 0;
}
.navbar a:hover::after{
    transform:translateY(0);
    opacity: 1;
}
.search-bar{
    width:250px;
    height: 45px;
    background: transparent;
    border: 2px solid #e4e4e4;
    border-radius:6px;
    display: flex;
    align-items: center;
}
.search-bar input{
    width:100%;
    background: transparent;
    border:none;
    outline:none;
    font-size: 16px;
    color:#e4e4e4;
    padding-left: 10px;
}
.search-bar input::placeholder{
    color:#e4e4e4;
}
.search-bar button{
    width:40px;
    height:100%;
    background: transparent;
    display:flex;
    border:none;
    outline:none;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}
.search-bar button i{
    font-size: 22px;
    color:#e4e4e4;

}
.container{
    position: absolute;
    width:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    height:550px;
    background: url('@/assets/img/SignupBG.png') no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
    min-width: 800px;
}
.container .content{
    width:50%;
    height:100%;
    background: transparent;
    position: absolute;
    top:0;
    left:0;
    padding:80px;
    color:#e4e4e4;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.container .logreg-box{
    position: absolute;
    top:0;
    right:0;
    width:55%;
    height:100%;
    overflow: hidden;
}
.content .logo{
    font-size: 30px;
    font-weight: 500;
    font-family: 'ahsing', sans-serif;
}
.text-sci h2{
    font-size: 40px;
    font-weight: 500;
    font-family: 'Bodoni', sans-serif;
    line-height: 1;
}
.text-sci h2 span{
    font-size: 25px;
}
.text-sci p{
    font-size: 16px;
    margin:20px 0;
}
.social-icons a i{
    font-size: 22px;
    color:#e4e4e4;
    margin-right:10px;
    transition:  .5s ease ;
}
.social-icons a:hover i{
    transform: scale(1.2);
}
.logreg-box .form-box{
    position: absolute;
    display:flex;
    justify-content: center;
    align-items:center;
    background: transparent ;
    width:100%;
    height:100%;
    backdrop-filter: blur(20px);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color:#e4e4e4;
}
.logreg-box .form-box.login h2{
    font-size:32px;
    text-align: center;
    font-weight: 500;
}
.logreg-box .form-box.register h2{
    font-size:32px;
    text-align: center;
    font-weight: 500;
}
.remember-forgot .second{
    display:none;
}
.form-box .input-box{
    position: relative;
    width:340px;
    height:50px;
    border-bottom: 2px solid #e4e4e4;
    margin:30px 0;
}
.input-box input{
    width:100%;
    height:100%;
    background: transparent;
    border:none;
    outline:none;
    font-size: 16px;
    color:#e4e4e4;
    font-weight: 500;
    padding-right: 28px;
}
.input-box label{
    position:absolute;
    top: 50%;
    left:0;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 500;
    pointer-events: none;
    transition: .5s ease;
}
.input-box input:focus~label,
.input-box input:valid~label{
    top:-5px;
}
.input-box .icon{
    position: absolute;
    right:0;
    top:13px;
    font-size:19px;
}
.form-box .remember-forgot{
    font-size:14.5px;
    font-weight: 500;
    margin:-15px 0 15px;
    display:inline;
    justify-content: space-between;
}
.remember-forgot .first{
    margin-left: 100px;
    color: #e4e4e4;
    text-decoration: underline;
    transition: .5s ease;
}
.remember-forgot .first:hover{
    color:#42426F;
}
.login-register a{
    margin-left: 10px;
    color: #e4e4e4;
    text-decoration: underline;
    transition: .5s ease;
}
.login-register a:hover{
    color:#42426F;
}
.remember-forgot label input{
    accent-color: #e4e4e4;
    margin-right:3px;
}
.btn{
    width:100%;
    height:45px;
    background: #42426F;
    border:none;
    outline:none;
    border-radius: 4px;
    cursor:pointer;
    font-size: 16px;
    color: #e4e4e4;
    font-weight: 500;
    box-shadow: 0 0 10px rgba(0,0,0, .5);
}
.form-box .login-register{
    font-size: 14.5px;
    text-align: center;
    font-weight: 500;
    margin-top:25px;
}
.background{
    width:100%;
    height:100vh;
    background:url('@/assets/img/SignupBG.png') no-repeat;
    background-size: cover;
    background-position: center;
    filter:blur(10px);
}
.logreg-box .form-box.register{
    transform: translateX(620px);
    transition: transform .6s ease;
    transition-delay: 0s;
}
.logreg-box.active .form-box.register{
    transform: translateX(0);
    transition-delay: .7s;
}
</style>