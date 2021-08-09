<template>
  <div>
    <div class="side_menu">

      <div class="side_menu">
        <div class="flex icon-filed" @click="restaurantAdd">
          <img src="../assets/store.png" style="height:30px;width:30px">
          <p>店舗情報編集</p>
        </div>
        <div class="flex icon-field" @click="restaurantList">
          <img src="../assets/store.png" style="height:30px;width:30px">
          <p>予約内容確認</p>
        </div>
        <div class="flex icon-field" @click="logout">
          <img>
          <p>ログアウト</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
img {
  margin: 10px 20px 10px;
  height:30px;
  width:30px;
}
</style>
