<template>
  <div>
    <Header />
    <div class="mypage flex">
      <div v-if="left" key="left" class="reserve">
        <h2 @click="watchLeft">予約状況</h2>
        <div v-for="reserve in reserveList" :key="reserve.id">
          <div class="reserve-info">
            <div class="reserve-top flex">
              <img :src=reserve.url style="height:30px;width:30px;margin:0 20px">
              <p>予約 No.{{reserve.id}}</p>
              <img src="../assets/cross.png" style="height:30px;width:30px;margin-left: auto;padding-right:20px">
            </div>
            <div class="flex">
              <img src="" style="width:40%;height:300px;">
              <div class="reserve-list">
                <div class="reserve-itme">
                  <p>NAME: {{reserve.name}}</p>
                </div>
                <div class="reserve-date">
                  <p>DATE: {{reserve.date}}</p>
                </div>
                <div class="resevre-time">
                  <p>TIME: {{reserve.time}}</p>
                </div>
                <div class="reserve-number">
                  <p>NUMBER:{{reserve.number}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="right" key="right" class="favorite">
        <h2 @click="watchRight">お気に入り店舗</h2>
        <div >
          <div class="item">
            <div class="restaurant-card flex" v-for="restaurant in restaurantList" :key="restaurant.name">
              <img src="" class="restaurant-pic">
              <div class="restaurant-detail">
                <div class="restaurant-name">
                  <p>{{restaurant.name}}</p>
                </div>
                <div class="tag">
                  <p>#{{restaurant.prefecture}} #{{restaurant.genre}}</p>
                </div>
                <div>
                  <button @click="$router.push({name:'Detail',params:{id:restauranr.id}})">詳しく見る</button>
                  <vue-star animate="animated-rubberBand" color="#F05654">
                    <a slot="icon" class="fa fa-heart" @click="handleClick"></a>
                  </vue-star>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header.vue';
  export default {
    data() {
      return {
        right: true,
        left: false,
        reserveList:[
          {
          id:1,
          name:"仙人",
          date:'2021-08-30',
          time:'18:00',
          number:3,
          url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"
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
      watchLeft() {
        this.left = true;
        this.right = false;
      },
      watchRight() {
        this.left = false;
        this.right = true;
      },
    },
    components:{
      Header
    }
  };
</script>

<style scoped>
/*////////////////
    ページ全体
////////////////*/
.mypage {
  justify-content: space-around;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
/*///////////////
    予約状況
///////////////*/
.reserve {
  width: 70%;
  padding-top:20px;
}
.reserve h2{
  margin-left:20%;
}
.reserve-info {
  background-color: orange;
  border-radius: 5px;
  height: 400px;
}
.reserve-top {
  background-color: rgb(255, 214, 101);
}
.reserve-list{
  width:50%;
  padding-left:20px;
  background-color: white;
  margin:0 auto;
  border-radius: 10px;
}
.reserve-list p{
  padding-top: 20px;
}
/*///////////////////
    お気に入り店舗
///////////////////*/
.favorite {
  width: 100%;
  padding-top:20px;
}
.favorite h2{
  margin-left:50%;
}
.item{
  width:90%;
  padding-left:20px;
  margin:0 auto;
}
.restaurant-card{
  height:500px;
  width:30%;
  box-shadow: 2px 2px 2px black;
  margin:10px 20px;
}
.restaurant-pic{
  width:100%;
  height:300px;
}
.restaurant-detail{
    padding-left:20px;
}
.restaurant-name{
  font-size:20px;
}
.tag{
  font-size:16px;
}
img {
  display: block;
  padding: 10px 0;
}
/*/////////////////
     ボタン詳細
/////////////////*/
button {
  position: relative;
  display: inline-block;
  padding: 0.25em 2em;
  text-decoration: none;
  color: #fff;
  background: #ff7300;
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
button:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
vue-star {
position: relative;
}
vue-star .fa {
  font-size: 25px;
  cursor: pointer;
}
.fa{
  padding-left:80px;
}
</style>
