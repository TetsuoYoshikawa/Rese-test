
<template>
  <div class="header">
    <img class="header-img" src="../assets/store.png" />
    <h2 class="header-title" @click="$router.push({path: '/'}, () => {})">RESE</h2>
    <div class="right text-area">
      <li v-if="$store.state.auth" key="auth" class="menu" :class="menu">
        <ul class="moble-ul left">
          <a @click="$router.push({path: '/'}, () => {})">
          店舗一覧
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/mypage'}, () => {})">
          マイページ
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="logout">
          ログアウト
          </a>
        </ul>
      </li>
      <li v-else key="auth" class="menu" :class="menu">
        <ul class="moble-ul left">
          <a @click="$router.push({path: '/'}, () => {})">
          店舗一覧
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/register'}, () => {})">
          会員登録
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="$router.push({path: '/login'}, () => {})">
          ログイン
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
    },

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
  width: 450px;
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
  margin-left: auto;
}
.moble-ul {
  list-style-type: none;
  border-left: 1px solid black;
  margin-left: 45px;
}
.mobile-show {
  list-style-type: none;
  margin-right: 6px;
  border-left: 1px solid black;
  margin-left: 30px;
}
.left {
  border-left: 0;
  padding-left: 0;
}
.ber {
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
@media screen and (max-width: 768px) {
  a {
    text-decoration: none;
    color: white;
  }
  .nav {
    position: absolute;
    height: 100vh;
    width: 50%;
    right: -50%;
    background: #ff7300;
    transition: 0.7s;
  }
  .nav ul {
    padding-top: 80px;
  }
  .nav ul li {
    list-style-type: none;
    margin-top: 50px;
    width: 100px;
  }
.ber {
  padding-left: 0px;
 }
  .text-area {
    background: #ff7300;
    display: inline;
  }
  .moble-ul {
    list-style-type: none;
    border-left: 0px solid black;
    margin-left: -200px;
  }
  .mobile-show {
    list-style-type: none;
    margin-right: 0px;
    border-left: 0px solid black;
    margin-left: 0px;
  }
  .menu {
    display: block;
    width: 36px;
    height: 32px;
    cursor: pointer;
    position: relative;
    left: 20px;
    margin-left: 85%;
  }
  .menu__line--top,
  .menu__line--middle,
  .menu__line--bottom {
    display: inline-block;
    width: 100%;
    right: 0%;
    height: 4px;
    background-color: #000;
    position: absolute;
    transition: 0.5s;
  }
  .menu__line--top {
    top: 0;
  }
  .menu__line--middle {
    top: 14px;
  }
  .menu__line--bottom {
    bottom: 0;
  }
  .menu.open span:nth-of-type(1) {
    top: 14px;
    transform: rotate(45deg);
  }
  .menu.open span:nth-of-type(2) {
    opacity: 0;
  }
  .menu.open span:nth-of-type(3) {
    top: 14px;
    transform: rotate(-45deg);
  }
  .in {
    transform: translateX(-100%);
  }
}
</style>
