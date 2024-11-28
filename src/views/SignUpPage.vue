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
                        <label><input type="checkbox" >Remember me</label>
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
                        <label><input type="checkbox" required id="term">I agree to the </label>
                        <a href="#" class="terms" @click.prevent="ShowModal">terms & conditions</a>
                            <el-dialog
                            title="Terms & Conditions"
                            v-model="isModalVisible"
                            width="40%"
                            @close="isModalVisible = false"
                            :append-to-body="true"
                            center>
                            <el-scrollbar height="400px">
                            <p>1.	 General rules

•	 Welcome to register as a user of this platform. Please read the following terms carefully before registering. Once you click the "Register" button, it means that you have read and agreed to abide by these terms.
<br>
2.	 User qualification

•	 Registered users should be natural persons with full civil capacity, and minors need to register and use this platform with the consent of their guardians. Users must provide true, accurate and complete registration information.
<br>
3.	 Account security

•	 Users shall be responsible for the security of their accounts and passwords, and be responsible for all activities carried out through their accounts. If you find that the account has been stolen or used abnormally, you should notify the platform immediately.
<br>
4.	 User Code of Conduct

•	 When users publish content on the platform, they should abide by relevant national laws and regulations, and shall not publish any content involving illegal, infringement, falsehood, defamation, harassment, etc.

•	 The platform has the right to review, modify and delete the content published by the user, and has the right to suspend or terminate the user's account when it finds any violation of the terms.
<br>
5.	 Privacy protection

•	 The platform attaches importance to the protection of users' personal information and promises not to disclose users' personal information to third parties without the user's consent, except as otherwise provided by laws and regulations.

•	 The platform will use user information reasonably in order to provide better services to users.
<br>
6.	 Content management

•	 All content published by users in the forum should comply with the norms of the platform community, and it is forbidden to publish information that violates national laws and regulations and public order and morals.

•	 The platform has the right to delete the content that violates the regulations and deal with the user's account accordingly according to the severity of the circumstances.
<br>
7.	 Disclaimer

•	 All the promotion information and content provided by this platform are for reference only and do not constitute suggestions for users' decision-making. Users should make independent judgments according to their personal circumstances.

•	 The platform is not responsible for the communication or transaction behavior between users, and users are requested to bear their own risks.
<br>
8.	 Service change or termination

•	 The platform has the right to modify, suspend or terminate part or all of the services at any time according to the actual situation. Any change, suspension or termination of the service will be notified to the user in advance.
<br>
9.	 Amendment of terms

•	 The platform has the right to modify the registration terms as needed, and the modified terms will be published on the website and take effect from the date of publication. If the user continues to use the platform, he accepts the revised terms.
<br>
10.	 Application of law and dispute resolution

•	 This clause shall apply to the laws of the People's Republic of China. Disputes arising from this clause shall be resolved by friendly negotiation between the two parties; if the negotiation fails, either party may file a lawsuit in the people's court where the platform is located.</p>
                                </el-scrollbar>
                                <span slot="footer" class="dialog-footer">
                                    <el-button class="button" @click="isModalVisible = false">Disagree</el-button>
                                    <el-button class="button" type="primary" @click="Confirmation">Agree</el-button>
                                </span>
                            </el-dialog>
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

<script scoped>
export default {
  data() {
    return {
      isRegisterActive: false, // 控制表单状态的变量
      isModalVisible: false,
    };
  },
  methods: {
    switchToRegister() {
      this.isRegisterActive = true; // 切换到注册表单
    },
    switchToLogin() {
      this.isRegisterActive = false; // 切换回登录表单
    },
    ShowModal() {
        console.log("Success");
        this.isModalVisible = true;
        document.getElementById(`term`).checked = false;
    },
    Confirmation() {
        this.isModalVisible = false;
        document.getElementById(`term`).checked = true;
    }
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
.remember-forgot .terms{
    font-weight:500;
    text-decoration: underline;
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
    font-size:20px;
    color: #e4e4e4;
    text-decoration: none;
    font-weight: 500;
    margin-right:30px;
    transition: .5s;
}
.navbar a::after{
    content:'';
    bottom:-6px;
    position:absolute;
    left:0;
    width:100%;
    height:2px;
    background: #42426F;
    border-radius: 5px;
    transform:translateY(10px);
    transition: .5s;
    opacity: 0;
}
.navbar a:hover{
    color:#42426F;
}
.navbar a:hover::after{
    transform:translateY(0);
    opacity: 1;
}
.search-bar{
    width:300px;
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
    background: url('../../public/SignupBG.webp') no-repeat;
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
    font-size: 40px;
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
    background:url('../../public/SignupBG.webp') no-repeat;
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
.dialog-footer {  
  display: flex;
  justify-content: flex-end;
}
.dialog-footer .button{
    width:100px;
}
</style>