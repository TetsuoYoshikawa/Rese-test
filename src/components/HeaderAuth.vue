<template>
  <div class="header">
    <img class="header-img" src="../assets/store.png" />
    <h2 class="header-title">RESE</h2>
    <div class="right flex">
      <select v-model="searchPrefecture">
        <option value="">All Prefecutes</option>
        <option v-for="prefecture in prefectures" :key="prefecture.name" >{{prefecture.name}}</option>
      </select>
      <select v-model="searchGenre">
        <option value="">All Genre</option>
        <option v-for="genre in genres" :key="genre.name">{{genre.name}}</option>
      </select>
      <input type="text" placeholder="Restaurant Name" v-model="searchRestaurant">
      <button class="button" type="submit" @click="searching">Search</button>
    </div>
    <div class="mypage">
      <button type="submit" @click="$router.push({path: '/mypage'}, () => {})">マイページ</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default{
  props:['id'],
  data(){
    return{
      restaurants: [],
      prefectures:[],
      genres:[],
      searchPrefecture:"",
      searchGenre:"",
      searchRestaurant:""
    }
  },
  
  methods:{
    prefectureData(){
      this.$emit('catchPrefecture',this.refecture)
    },
    genreData(){
      this.$emit('catchGenre',this.searchGenre)
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
    async searching(){
      await axios
      .get("http://127.0.0.1:8000/api/vi/restaurants" 
      + this.$store.state.restaurant.id,
      {
        param:{
          restaurant_id:this.searchRestaurant,
          prefecture_id:this.searchPrefecture,
          genre_id:this.searchGenre,
        },
      }
      )
      .then((response) => {
        this.restaurantList = response.data.restaurant;
        this.prefectureList = response.data.prefecture;
        this.genreList = response.data.genre;
      })
    },
  },
  created(){
    this.getPrefecture();
    this.getGenre();
  }
};
</script>
<style scoped>
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
button{
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
}
</style>

