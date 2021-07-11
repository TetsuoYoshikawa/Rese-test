<template>
  <div>
    <Header />
    <div class="mypage" style="display:flex"> 
      <h2 class="title" @click="watchRight">予約状況</h2>
      <div v-for="reserve in reserves" :key="reserve.id" >
        <div v-if="left" key="left" class="reserve">
          <div class="reserve-info" style="margin-top:100px">
            <div class="reserve-top" style="display:flex">
              <img src="../assets/time.png" style="height:30px;width:30px;margin:0 20px">
              <p>予約 No.{{reserve.id}}</p>
              <img src="../assets/cross.png" style="height:30px;width:30px;margin-left: auto;padding-right:20px">
            </div>
            <div class="flex">
              <div>
                <img :src="reserve.url" class="restaurantPic flex" style="height:400px;width:400px">
              </div>
              <div class="reserve-list">
                <div class="reserve-itme block">
                  <p>NAME: {{reserve.name}}</p>
                </div>
                <div class="reserve-date block">
                  <p>DATE: {{reserve.date}}</p>
                </div>
                <div class="resevre-time block">
                  <p>TIME: {{reserve.time}}</p>
                </div>
                <div class="reserve-number block">
                  <p>NUMBER: {{reserve.number}}</p>
                </div>
                <button>変更</button>
                <button>削除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="title" @click="watchLeft">お気に入り店舗</h2>
        <div v-if="right" key="right" class="favorite">
          <div class="restaurant-info flex" v-for="restaurant in restaurantList" :key="restaurant.name">
            <img :src="restaurant.url" class="restaurantPic" style="height:400px;width:400px">
            <div class="restaurantDetail">
                <div class="restaurantName">
                <p>{{restaurant.name}}</p>
              </div>
              <div class="tag">
                <p>#{{restaurant.prefecture}} #{{restaurant.genre}}</p>
              </div>
              <div>
                <button @click="$router.push({name:'Detail',params:{id:restauranr.id}})">詳しく見る</button>
                <img  class="heart">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
  export default {
    data() {
      return {
        right: false,
        left: true,
        reserves:[{
          id:1,
          name:"仙人",
          date:'2021-08-30',
          time:'18:00',
          number:3,
          url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
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
        this.left = false;
        this.right = true;
      },
      watchRight() {
        this.left = true;
        this.right = false;
      },
    },
    components:{
      Header
    }
  };
</script>

<style scoped>

.flex{
  display: flex;
  flex-wrap: wrap;
}
.title{
  margin:15px;
  font-size:20px;
}
img{
  display: block;
  padding:10px 0;
}

.reserve h2{
  padding:30px;
  font-size:30px;
}
.sereve{
  width:1000px;
}
.reserve-info{
  background-color: orange;
  border-radius: 5px;
}
.reserve-top{
  background-color: rgb(255, 214, 101);
}
.reserve-top p{
  margin : 0 auto;
}
.reserve-list{
  margin:30px 50px;
  background-color:rgb(255, 214, 101);
  width:45%;
  padding:20px 20px;
  border-radius: 5px;
}
.block{
  font-size:16px;
  padding-bottom: 30px;
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
button{
  padding:10px 15px;
  margin-right:20px;
  border-radius: 5px;
}
</style>
