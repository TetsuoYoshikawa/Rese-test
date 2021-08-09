<template>
  <div class="header">
    <img class="header-img" src="../assets/store.png" />
    <h2 class="header-title" @click="$router.push({path: '/'}, () => {})">RESE</h2>
  </div>
</template>

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
  </style>
