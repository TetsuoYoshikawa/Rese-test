<template>
  <div>
    <HeaderAuth />
    <div class="restaurantList contents">
      <div class="item">
        <div class="restaurantCard flex" v-for="restaurant in restaurantList" :key="restaurant.name">
          <img src="" class="restaurantPic">
          <div class="restaurantDetail">
            <div class="restaurantName">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restairant.prefecture}} #{{restaurant.genre}}</p>
            </div>
            <div>
              <button @click="$router.push({name:'Detail',params:{id:restauranr.id}})">詳しく見る</button>
              <img src="" class="heart">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        genre:"焼肉"}
      ],
    };
  },
  methods:{
  },
  components:{
    HeaderAuth,
  }
};
</script>
