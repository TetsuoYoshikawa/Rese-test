<template>
  <div class="header">
    <img class="header-img" src="../assets/store.png" />
    <h2 class="header-title" @click="$router.push({path: '/'}, () => {})">RESE</h2>
    <div class="right text-area">
      <li v-if="$store.state.auth" key="auth" class="menu" :class="menu">
        <ul class="moble-ul left">
          <a @click="$router.push({path: '/RestaurantListAdmin'}, () => {})">
          店舗一覧
          </a>
        </ul>
        <ul class="moble-ul ber">
          <a @click="logout">
          ログアウト
          </a>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    hamberger(){
      const target = document.getElementById("menu");
      target.addEventListener('click', () => { 
      target.classList.toggle('open');
      const nav = document.getElementById("nav");
      nav.classList.toggle('in');
      });
    }
  },
}
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
  width:320px;
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
.mobile-show {
  display: none;
}
</style>
