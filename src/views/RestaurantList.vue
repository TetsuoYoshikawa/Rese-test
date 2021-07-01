<template>
  <div>
    <HeaderAuth />
    <h2></h2>
    <div class="right flex">
      <select class="search" v-model="searchPrefecture">
        <option value="">All Prefecutes</option>
        <option v-for="(Prefecute,index) in prefecutureList" :key="index" :value="prefecute.id">{{prefecute.name}}</option>
      </select>
      <select class="search" v-model="searchGenre">
        <option value="">All Genre</option>
        <option v-for="(genre,index) in genreList" :key="index" :value="genre.id">{{genre.name}}</option>
      </select>
      <input type="text" placeholder="Restaurant Name" v-model="searchRestaurant">
      <button class="button" type="submit" @click="searching">Search</button>
    </div>

    <div class="restaurantList">
      <div class="restaurantCard" v-for="(restaurant,index) in restaurantList" :key=index :value="restautant.id">
        <img src="">
        <div class="restaurantDetail">
          <div class="restaurantName">
            <p>{{restaurant.name}}</p>
          </div>
          <div class="tag">
            <p>#{{restairant.prefecture}}</p>
            <p>#{{restaurant.genre}}</p>
          </div>
          <div>
            <button @click="detail">詳しく見る</button>
            <div>
              <Favorite />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth.vue';
import Favorite from '../components/Favorite.vue';
export default{
  data(){
    return{
      searchPrefecture:"",
      searchGenre:"",
      searchRestaurant:"",
      prefectureList:[
        {name:"大阪"}
      ],
      genreList:[
        {name:"焼肉"}
      ],
      restaurantList:[
        {name:"root",prefecture:"大阪",genre:"焼肉"}
      ],
    };
  },
  components:{
    HeaderAuth,
    Favorite
  }
};
</script>
