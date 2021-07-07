<template>
  <div>
    <div class="mypage flex">
      <div v-if="left" key="left" class="reserve">
        <h2 @click="watchRight">予約状況</h2>
        <div v-for="reserve in reserves" :key="reserve.id">
          <div class="reserve-info">
            <div class="reserve-top flex">
              <img src="../assets/time.png" style="height:30px;width:30px;margin:0 20px">
              <p>予約 No.{{reserve.id}}</p>
              <img src="../assets/cross.png" style="height:30px;width:30px;margin-left: auto;padding-right:20px">
            </div>
            <div class="reserve-itme flex">
              <p>NAME:</p>
              <p>{{reserve.name}}</p>
            </div>
            <div class="reserve-date flex">
              <p>DATE:</p>
              <p>{{reserve.date}}</p>
            </div>
            <div class="resevre-time flex">
              <p>TIME:</p>
              <p>{{reserve.time}}</p>
            </div>
            <div class="reserve-number flex">
              <p>NUMBER:</p>
              <p>{{reserve.number}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="right" key="right" class="favorite">
        <h2 @click="watchLeft">お気に入り店舗</h2>
        <div class="restaurant-info flex" v-for="restaurant in restaurantList" :key="restaurant.name">
          <img src="../assets/logo.png" class="restaurantPic">
          <div class="restaurantDetail">
            <div class="restaurantName">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restaurant.prefecture}} #{{restaurant.genre}}</p>
            </div>
            <div>
              <button @click="$router.push({name:'Detail',params:{id:restauranr.id}})">詳しく見る</button>
              <img :src="restaurant.url" class="heart">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        right: true,
        left: false,
        reserves:[{
          id:1,
          name:"仙人",
          date:'2021-08-30',
          time:'18:00',
          number:3,
        }],
        restaurantList:[{
          name:"仙人",
          prefecture:"東京",
          genre:"焼肉",
          url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
        }],
      };
    },
    methods: {
      watchleft() {
        this.left = true;
        this.right = false;
      },
      watchRight() {
        this.left = false;
        this.right = true;
      },
    }
  };
</script>

<style scoped>
.mypage{
  justify-content: space-around;
}
.flex{
  display: flex;
  flex-wrap: wrap;
}
img{
  display: block;
  padding:10px 0;
}
.reserve{
  width:100%;
}
.reserve-info{
  background-color: orange;
  border-radius: 5px;
  height:400px;
}
.reserve-top{
  background-color: rgb(255, 214, 101);
}
.favorite{
  width:45%;
}
.restaurant-info{
  box-shadow: 2px 2px  2px 2px black;
  height:400px;
}
.restaurantPic {
  width: 100%;
}
</style>
