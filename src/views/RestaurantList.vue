
<template>
  <div>
    <HeaderAuth @click="parentsPrefecture,parentGenre"/>
    <div class="restaurant-list contents">
      <div class="item">
        <div class="restaurant-card flex" v-for="(restaurant,index) in restaurants" :key="index">
          <img :src=restaurant.image_url class="restaurant-pic">
          <div class="restaurant-detail">
            <div class="restaurant-name">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restaurant.prefecture_id}} #{{restaurant.genre_id}}</p>
            </div>
            <div>
              <button @click="
              $router.push({
                path:'/detail/',
                name:'Detail',
                params:{id:restaurant.id}})">詳しく見る</button>
              <vue-star animate="animated rubberBand" color="#F05654">
                <a slot="icon" class="fa fa-heart" @click="fav(restaurant)"></a>
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
import axios from "axios";
export default{
  props:['id'],
  data(){
    return{
      restaurants: [],
      prefectures:[],
      genres:[],
    }
  },
  mounted: function(){
    this.$refs.ThumbsUp.$data.active = true;
    console.log(this.$refs.ThumbsUp.$data);
  },
  methods:{
    parentPrefecture(){
      console.log();
    },
    async getRestaurant(){
      await axios
        .get("http://127.0.0.1:8000/api/restaurants")
        .then((response => {
          this.restaurants = response.data.data.restaurant;
        }))
        .catch(error => {
          console.log(error)});
    },
    fav() {
      console.log(this.$refs.ThumbsUp.$data);
      axios
        .post("http://127.0.0.1:8000/api/favorites",{
          user_id:this.$store.state.user.id,
        })
        .then((response) => {
          console.log(response);
          this.$router.go({
            path:this.$router.currentRoute.path,
            force:true,
          });
        });
    },
  },
  components:{
    HeaderAuth,
    'VueStar':VueStar,
  },
  created(){
    this.getRestaurant();
  }
};
</script>

<style scoped>
/*////////////////
    店舗情報
////////////////*/
.item{
  width:90%;padding-left:20px;
  margin:0 auto;
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
