<!-- src/components/Header.vue -->
<template>
    <header class="header">
      <img src="@/assets/logo_img/logo_header.png" alt="Logo" class="header_logo" />
      <img src="@/assets/logo_img/logo2_header.png" alt="Logo" class="header2_logo" />
      <div class="logo">
        SCIE TOMORROW
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li href="#" class="nav-item">Home</li>
          <li href="#" class="nav-item">Resources</li>
          <li href="#" class="nav-item">Forum</li>
          <li href="#" class="nav-item">About Us</li>
          <li href="#" class="nav-item-login">Login</li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
    max-width: 3121.75px;
    height: 85px;
    margin:0px;
    margin-right:0px;
    background-color: #181642; /* Dark blue color matching your image */
  }
  .nav-item-login{
    margin:30px;
    margin-bottom: 30px;
    margin-right:40px;
    font-size: 24px;
    color: white;
    cursor: pointer;
    font-family: 'Bodoni',sans-serif;
  }
  .logo {
    font-family: 'ahsing', sans-serif;
    letter-spacing: 0.1em;
    font-size: 27px;
    margin:0px;
    font-weight: bold;
    color: white;
    z-index: 2;
  }
  
  .nav {
    display: flex;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 30px;
    font-size: 23px;
    margin-bottom: 30px;
    color: white;
    cursor: pointer;
    z-index:2;
    font-family: 'Bodoni',sans-serif;
  }
  
  .nav-item::after {
    content: '|';
    margin-left: 60px;
    color: white;
  }
  
  .nav-item:last-child::after {
    content: '';
  }

  .header_logo{
    margin-left:0px;
    position: absolute;
    top: 30%;
    left:0px;
    width:400px;
    z-index: 1; /*第1层*/
  }

  .header2_logo{
    margin-left:1010px;
    position: absolute;
    top: 15%;
    /*left:0px;*/
    width:130px;
    z-index: 1; /*第1层*/
  }

  .nav-item:hover {
  color: #ff7f50; /* 橘红色 */
  /*text-decoration: underline;*/ /* 下划线 */
  transition: color 0.3s;
  text-decoration: 0.3s;
}

.nav-item-login:hover {
  color: #ff7f50; /* 橘红色 */
  /*text-decoration: underline;*/ /* 下划线 */
  transition: color 0.3s;
  text-decoration: 0.3s;
}   
  </style>