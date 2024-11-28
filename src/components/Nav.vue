<template>
    <header class="header">
        <input type="checkbox" name="check" id="check"></input>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <h1 class="logo">
        SCIE TOMORROW
        </h1>
     <nav class="nav">
        <h1 class="logo">
        SCIE TOMORROW
        </h1>
        <div class="divider"></div>
        <router-link to="/Home">Home</router-link>
        <b>|</b>
        <router-link to="/Resources">Resources</router-link>
        <b>|</b>
        <router-link to="/Forum">Forum</router-link>
        <b>|</b>
        <router-link to="/Aboutus" class="c">About us</router-link>
        <b>|</b>
     </nav>

     <div class="user-form-group">
        <router-link class="login" to="/login">Login</router-link>
        <router-link class="signup" to="/signup">Sign Up</router-link>
        <label for="check">
            <i class='bx bx-menu menu'></i>
            <i class='bx bx-x close-menu'></i>
        </label>
     </div>
    </header>
</template>

<script>

</script>

<style scoped>
.header{
    display:flex;
    align-items:center;
    justify-content: space-around;
    background: #181642;
    height:12vh;
    backdrop-filter: blur(10px);
    background-image: url('@/assets/logo_img/logo_header.webp');
    background-size: 350px;
    background-position: left;
    background-repeat: no-repeat;
    width:100%;
}
.logo{
    font-family: 'ahsing', sans-serif;
    letter-spacing: 0.1em;
    font-size: 27px;
    margin:0px;
    font-weight: bold;
    color: white;
    margin-bottom: -5px;
    margin-left:40px;
}
.nav .logo{
    display:none;
}
.nav a{
    color:white;
    text-decoration: none;
    font-weight:600;
    font-size:23px;
    font-family: 'Bodoni',sans-serif;
    padding:8px 40px;
    transition:0.3s;
    border-radius:99px;
}
.nav .c{
    color:white;
    text-decoration: none;
    font-weight:600;
    font-size:23px;
    font-family: 'Bodoni',sans-serif;
    padding:8px 40px;
    transition:.3s;
    border-radius:99px;
    background-image: url('@/assets/logo_img/logo2_header.webp');
    background-position: center;
    background-size: 5em;
    background-repeat: no-repeat;
    will-change: transform;
}
.nav b{
    color:white;
    text-decoration: none;
    font-weight:600;
    font-size:23px;
    font-family: 'Bodoni',sans-serif;
    padding:8px 15px;
}
.nav a:hover{
    background: #42426F;
}
.nav .c:hover{
    background: #42426F;
}
.user-form-group a {
    color:white;
    text-decoration: none;
    font-weight:600;
    font-size:23px;
    font-family: 'Bodoni',sans-serif;
}
.signup{
    border: rgba(255,255,255,0.5) 2px solid;
    padding:8px 16px;
    margin-left:30px;
    border-radius: 99px;
    transition:300ms;
}
.signup:hover{
    background: #42426F;
    color:white;
}
#check{
    display:none;
}
.user-form-group label{
    display:none;
}
@media (max-width: 1340px ){
    .header{
        background-size:500px;
        z-index: 99;
        position:relative;
    }
    .nav{
        position: absolute;
        left:-100%;
        top:0;
        display:flex;
        flex-direction:column;
        background: rgb(15, 23, 42);
        height:102vh;
        width:50%;
        padding:0px 20px;
        gap:16px;
        transition:500ms;
        box-shadow: 10px 0px 10px rgba(0,0,0,0.2);
        z-index: 99;
    }
    .nav .c{
        background-image: none ;
        z-index:99;
    }
    .nav b{
        display:none;
        z-index: 99;
    }
    
    .nav .logo{
        margin-left: 16px;
        margin-top: 40px;
        display:block;
        z-index: 99;
    }
    .divider{
        background: rgba(255,255,255,0.5);
        width:100%;
        height:2px;
        margin:16px 0;
        z-index: 99;
    }
    .user-form-group{
        display:flex;
        align-items:center;
    }
    .signup{
        margin-right: 20px;
    }
    .menu {
        font-size:45px;
        color:white;
        display: flex;
        cursor:pointer;
    }
    #check:checked~.user-form-group .menu {
        display:none;
    }
    .user-form-group .close-menu{
        display:none;
    }
    .close-menu {
        font-size:45px;
        color:white;
        display: flex;
        cursor:pointer;
    }
    #check:checked~.user-form-group .close-menu{
        display:block;
    }
    #check:checked~.nav{
        left:0%;
    }
    .user-form-group label{
    display:flex;
}
}
@media(max-width:570px){
    .logo{
        display: none;
    }
    .header{
        background-image: none;
    }
}
</style>