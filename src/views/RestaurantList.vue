<template>
  <div>
    <HeaderAuth />
    <div class="restaurant-list contents">
      <div class="item">
        <div class="restaurant-card flex" v-for="restaurant in restaurantList" :key="restaurant.name">
          <img :src=restaurant.url class="restaurant-pic">
          <div class="restaurant-detail">
            <div class="restaurant-name">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restaurant.prefecture}} #{{restaurant.genre}}</p>
            </div>
            <div>
              <button @click="$router.push({name:'Detail',params:{id:restauranr.id}})">詳しく見る</button>
              <vue-star animate="animated rubberBand" color="#F05654">
                <a slot="icon" class="fa fa-heart" @click="handleClick"></a>
              </vue-star>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueStar from 'vue-star';
import HeaderAuth from '../components/HeaderAuth.vue';
export default{
  props:['id'],
  data(){
    return{
      prefectures:[],
      genres:[],
      restaurants:[],
      searchPrefecture:"",
      searchGenre:"",
      searchRestaurant:"",
      restaurantList:[
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"},
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"},
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"},
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"},
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"},
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg"}
      ],
    };
  },
  methods:{
  },
  components:{
    HeaderAuth,
    VueStar,
  }
};
</script>

<style scoped>
.item{
  width:90%;padding-left:20px;
  margin:0 auto;
}
.item{
  display: flex;
  flex-wrap: wrap;
}
.restaurant-card{
  height:450px;
  width:30%;
  box-shadow: 2px 2px 2px black;
  margin:20px 20px;
}
.restaurant-pic{
  width:100%;
  height:300px;
}
.restaurant-name{
  padding:15px 20px;
  font-size:25px;
}
.tag{
  padding-left:20px;
  font-size:20px;
  padding-bottom: 15px;
}
button{
  padding:10px 20px;
  margin-left: 20px;
  background-color:#ff7300;
  border:none;
  border-radius: 10px;
}
.VueStar {
      position: relative;
    }
    .VueStar__icon .fa {
      font-size: 3em;
      cursor: pointer;
    }

</style>
