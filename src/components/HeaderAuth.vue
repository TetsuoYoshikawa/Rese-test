
<template>
  <div class="right flex">
    <select class="search" v-model="searchPrefecture">
      <option value="">All Prefecutes</option>
      <option v-for="(prefecture,index) in prefectureList" :key="index" :value="prefecture.id">{{prefecture.name}}</option>
    </select>
    <select class="search" v-model="searchGenre">
      <option value="">All Genre</option>
      <option v-for="(genre,index) in genreList" :key="index" :value="genre.id">{{genre.name}}</option>
    </select>
    <input type="text" placeholder="Restaurant Name" v-model="searchRestaurant">
    <button class="button" type="submit" @click="searching">Search</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      prefectures:[],
      genres:[],
      restaurants:[],
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
};
</script>
<style scoped>
.rigth{
  align-items:center;
}
.right p {
  margin-right:20px;
  cursor: pointer;
}
.header{
  margin:20px;
}
.logo{
  width:150px;
  cursor: pointer;
}
.flex{
  display:flex;
  justify-content: space-between;
}
</style>
