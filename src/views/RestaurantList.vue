<template>
  <div>
    <div class="header">
      <img class="header-img" src="../assets/store.png" />
      <h2 class="header-title">RESE</h2>
      <div class="right flex">
        <select v-model="searchData.prefecture">
          <option value="">All Prefecutes</option>
          <option v-for="prefecture in prefectures" :key="prefecture.name">{{prefecture.name}}</option>
        </select>
        <select v-model="searchData.genre">
          <option value="">All Genre</option>
          <option v-for="genre in genres" :key="genre.name">{{genre.name}}</option>
        </select>
        <input type="text" placeholder="Restaurant Name" v-model="searchData.restaurant">
        <button class="search" type="submit" @click="storeSearch">Search</button>
      </div>
      <div class="mypage">
        <button type="submit" @click="$router.push('/mypage')">マイページ</button>
      </div>
    </div>
    <div class="restaurant-list contents">
      <div class="item">
        <div class="restaurant-card flex" v-for="restaurant in restaurants" :key="restaurant.id">
          <img :src=restaurant.image_url class="restaurant-pic">
          <div class="restaurant-detail">
            <div class="restaurant-name">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restaurant.prefecture.name}} #{{restaurant.genre.name}}</p>
            </div>
            <div class="button">
              <button @click="
                $router.push({
                path:'/detail/' + restaurant.id,
                name:'Detail',
                params:{id:restaurant.id}})">詳しく見る
                </button>
                <div>
                  <v-icon name="heart" scale="2" class="heart" @click="favoritePost(restaurant)"
                  v-if="restaurant.favorites.length === 0">
                  </v-icon>
                  <img class="heart" src="../assets/heart_red.png" @click="favoriteDlete(restaurant)" style="height:30px;width:30px;"
                  v-else />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import axios from "axios";
export default{
  props:['id'],
  data(){
    return{
      restaurants: [],
      prefectures:[],
      genres:[],
      favorites:[],
      searchData:{
        prefecture:"",
        genre:"",
        restaurant:"",
      },
    }
  },
  computed:{
    storeSearch(){
      return this.restaurants.filter(restaurant => {
        return restaurant.prefecture.name.includes(this.searchData.prefecture) ||
        restaurant.grnre.name.includes(this.searchData.genre) ||
        restaurant.prefecture.name.includes(this.searchData.restaurant)
      })
    }
  },
  methods:{
    async getRestaurant(){
      await axios
        .get("http://127.0.0.1:8000/api/restaurants")
        .then((response => {
          this.restaurants = response.data.data.restaurant;
        }))
        .catch(error => {
          console.log(error)});
    },
    async getFavorite(){
      await axios
        .get('http://127.0.0.1:8000/api/favorites')
        .then((response) => {
          this.favorites = response.data.data;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    async favoritePost(restaurant){
      await axios
      .post('http://127.0.0.1:8000/api/favorites',{
        user_id:this.$store.state.user_id,
        restaurant_id:restaurant.id,
      })
      .then((response) => {
        console.log(response);
        alert('いいねしました');
      });
    },
    async favoriteDelete(restaurant){
      await axios
      .delete('http://127.0.0.1:8000/api/favorites',{
        data:{
          user_id:this.$store.state.user_id,
          restaurant_id:restaurant.id
        }
      })
      .then((response) => {
        console.log(response);
        alert('いいねを削除しました')
      })
    },
    async getPrefecture(){
      await axios
        .get("http://127.0.0.1:8000/api/prefectures")
        .then((response) => {
          this.prefectures = response.data.data;
        })
    },
    async getGenre(){
      await axios
        .get("http://127.0.0.1:8000/api/genres")
        .then((response) => {
          this.genres = response.data.data;
        })
    },
  },
  components:{
    'v-icon':Icon,
  },
  created(){
    this.getRestaurant();
    this.getFavorite();    
    this.getPrefecture();
    this.getGenre();
  }
};
</script>

<style scoped>
/*////////////////
    ヘッダー
////////////////*/
.header{
  display:flex;
  height:70px;
  align-items: center;
  background-color:#ff7300;
}
.header-img{
  width:20px;
  height: 20px;
  margin:0 20px;
}
.header-title{
  color:white;
  font-size:25px;
}
.right{
  align-items:center;
  margin: 0 auto;
}
.right p {
  margin-right:20px;
  cursor: pointer;
}
.logo{
  width:150px;
  cursor: pointer;
}
select{
  padding:15px;
  border:none;
  font-size: 16px;
}
input{
  padding:17px;
  border:none;
}
.search{
  background-color:white;
  padding:17px;
  border:none;
  margin-top:1px;
}
.mypage{
  margin:0 20px;
  border-radius: 10px;
}
.mypage button{
  border-radius: 30px;
  background-color:white;
}
/*////////////////
    店舗情報
////////////////*/
.button{
  display: flex;
  flex-wrap: wrap;
}
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
.heart{
  padding-left:80px;
  color:#F05654;
}
button{
  padding:10px 20px;
  margin-left: 20px;
  background-color:#ff7300;
  border:none;
  border-radius: 10px;
}
</style>
