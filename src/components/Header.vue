<template>
  <div class="header">
    <img class="header-img" src="../assets/store.png" />
    <h2 class="header-title" @click="$router.push({path: '/'}, () => {})">RESE</h2>
    <div class="right text-area">
      <li v-if="$store.state.auth" key="auth" class="menu" :class="menu">
        <ul class="moble-ul left">
          <a @click="$router.push({path: '/'}, () => {})">
          店舗<br class="mobile-show">
          一覧
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/mypage'}, () => {})">
          マイ<br class="mobile-show">
          ページ
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="logout">
          ログ<br class="mobile-show">
          アウト
          </a>
        </ul>
      </li>
      <li v-else key="auth" class="menu" :class="menu">
        <ul class="moble-ul left">
          <a @click="$router.push({path: '/'}, () => {})">
          店舗<br class="mobile-show">
          一覧
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/register'}, () => {})">
          会員<br class="mobile-show">
          登録
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/login'}, () => {})">
          ログ<br class="mobile-show">
          イン
          </a>
        </ul>
      </li>
    </div>
    <div @click="hamburgerOpen" class="hamburger" :class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import $router from 'vue-router';
export default{
  data() {
    return {
      logo:"",
      menu:"",
      hamburger: "",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      $router.replace("/");
    },
    hamburgerOpen(){
      if(this.hamburger == "hamburger"){
        this.logo = "no-logo";
        this.menu = "menu-open";
        this.hamburger = "hamburger-close";
      }else{
        this.logo = "";
        this.menu = "";
        this.hamburger = "hamburger";
      }
    }
  }
};
</script>


<style scoped>
.header {
  display: flex;
  height: 70px;
  padding: 0 20px;
  align-items: center;
  background-color: #ff7300;
}
.text-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 50px;
  width:450px;
  border-radius: 30px;
  text-align: center;
}
.header-img {
  width: 30px;
  height: 30px;
  margin: 0 20px 0 0;
}
.header-title {
  font-size: 25px;
  font-weight: bold;
  color: white;
  line-height: 75px;
  cursor: default;
}
.right {
  margin-left:auto;
}
.moble-ul {
	list-style-type:none;
	border-left:1px solid black;
  margin-left: 45px;
}
.mobile-show{
	list-style-type:none;
	margin-right:6px;
	border-left:1px solid black;
  margin-left: 30px;
}
.left{
  border-left:0;
	padding-left:0;
}
.ber{
  padding-left: 30px;
}
.menu {
  display: flex;
  line-height: 25px;
}
.moble-ul-button {
  margin-top: -12px;
}
.menu a {
  cursor: pointer;
}
.hamburger {
  display: none;
}
.managemant {
  vertical-align: middle;
  background-color: #d4a701;
  border-color: #775d00;
}
.administrate {
  vertical-align: middle;
  background-color: #9b9067;
  border-color: #665f48;
}
.mobile-show {
  display: none;
}
@media screen and (max-width: 480px) {
  .text-area {
    width: 100%;
    justify-content: initial;
  }
  .logo {
    position: absolute;
    top: 0px;
    left: 15px;
    line-height: 80px;
    opacity: 1;
    transition: 0.8s;
  }
  .no-logo {
    opacity: 0;
  }
  .menu {
    width: 320px;
    position: absolute;
    top: 0px;
    left: 100px;
    display: flex;
    font-size: 14px;
    margin-top: 22px;
    line-height: 20px;
    opacity: 0;
    transition: 0.8s;
    pointer-events: none;
  }
  .moble-ul {
    width: 80px;
  }
  .menu-open {
    left: -15px;
    opacity: 1;
    pointer-events: initial;
  }
  .hamburger {
    display: initial;
    width: 48px;
    height: 48px;
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 15px;
    transition: 0.4s;
    z-index: -100;
  }
  .hamburger span {
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 3px;
    background-color: #000;
    transition: 0.8s;
  }
  .hamburger span:nth-of-type(1) {
    top: 12px;
  }
  .hamburger span:nth-of-type(2) {
    top: 24px;
  }
  .hamburger span:nth-of-type(3) {
    top: 36px;
  }
  .hamburger-close span {
    left: 33px;
    width: 4px;
    height: 28px;
  }
  .hamburger-close span:nth-of-type(1) {
    top: 12px;
  }
  .hamburger-close span:nth-of-type(2) {
    top: 12px;
  }
  .hamburger-close span:nth-of-type(3) {
    top: 12px;
  }
  .management-moble {
    height: 45px;
    font-size: 12px;
    margin-top: -2px;
    margin-left: 10px;
  }
  .management-moble-noshow {
    display: none;
  }
  .mobile-show {
    display: initial;
  }
  .moble-ul-button {
    display: flex;
    width: 50px;
    margin-left: -20px;
    margin-top: 0px;
  }
}
</style>
