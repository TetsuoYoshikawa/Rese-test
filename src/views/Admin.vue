<template>
  <div id="app">
    <HeaderAdmin />
    <div class="admin">
      <div class="card right" >
        <div class="card-title" style="display: flex;">
          <h2 @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}">店舗情報変更</h2>
          <h2 @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}">新規店舗登録</h2>
        </div>
        <div class="restaurant" v-if="isActive === '1'" key="right">
          <div class="flex">
            <p >Restaurant Name:</p>
            <input class="label" v-model="restaurant_name"/>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Prefectures:</p>
            <select v-model="restaurant_prefecture">
              <option value="">Prefecture select</option>
              <option v-for="prefecture in prefectures" :key="prefecture.name">{{prefecture.name}}</option>
            </select>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Genres:</p>
            <select v-model="restaurant_genre">
              <option value="">Genre select</option>
              <option v-for="genre in genres" :key="genre.name">{{genre.name}}</option>
            </select>
          </div>
          <div class="flex">
            <p>Description:</p>
            <textarea class="label" v-model="restaurant_description"></textarea>
            <div class="under-line"></div>
          </div>
          <div class="flex flex-end">
            <div>
              <p>Restaurant Picture:</p>
            </div>
            <div class="input-box input-width600 input-width70p input-height32 flex-left">
              <span></span>
              <input type="file" id="file" @click="fileSelected()" class="input-box-input input-padding file-send" readonly>
            </div>
          </div>
          <button type="submit" @click="putRestaurant()">店舗情報変更</button>
        </div>
        <div class="restaurant"  v-if="isActive === '2'" key="left">
          <div class="flex">
            <p>Restaurant Name:</p>
            <input class="label" v-model="restaurant_name" />
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Prefectures:</p>
            <select v-model="restaurant_prefecture">
              <option value="">Prefecture select</option>
              <option v-for="prefecture in prefectures" :key="prefecture.name">{{prefecture.name}}</option>
            </select>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Genres:</p>
            <select v-model="restaurant_genre">
              <option value="">Genre select</option>
              <option v-for="genre in genres" :key="genre.name">{{genre.name}}</option>
            </select>
          </div>
          <div class="flex">
            <p>Description:</p>
            <textarea class="label" v-model="restaurant_description"></textarea>
            <div class="under-line"></div>
          </div>
          <div class="flex flex-end">
            <div>
              <p>Restaurant Picture:</p>
            </div>
            <div class="input-box input-width600 input-width70p input-height32 flex-left">
              <span></span>
              <input type="file" id="file" @click="onFileChange()" class="input-box-input input-padding file-send" readonly>
              <div class="image" v-if="preview">
                <img :src="preview" />
              </div>
            </div>
          </div>
          <button type="submit" @click="postRestaurant()">新規店舗登録</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderAdmin from "../components/HeaderAdmin.vue";
export default{
  data() {
    return {
      isActive: '1',
      preview:null,
      restaurant_name: "",
      restaurant_prefecture: "",
      restaurant_genre: "",
      restaurant_description: "",
      prefectures: [],
      genres: []
    }
  },
  methods: {
    isSelect(num) {
      this.isActive = num;
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
    async onFileChange(event) {
      if(event.target.files.lenght === 0){
        return false
      }
      const reader = new FileReader()
      reader.onload = e => {
        this.preview = e.target.result
      }
      reader.readAsDataURL(event.target.files[0]);
    },
    reset() {
      this.preview = ""
      this.$el.querySelector('input[type="file"]').value = null
    },
    postRestaurant() {
      const formData = new FormData();
      formData.append("image_url:this.file");
      formData.append("id: this.restaurant.id");
      formData.append("name: this.restaurant_name");
      formData.append("prefecture_id: this.restaurant_prefecture");
      formData.append("genre_id: this.restaurant_genre,");
      formData.append("descriptions: this.restaurant_description,");
       axios
        .post('http://127.0.0.1:8000/api/auth/restaurants', formData)
        .then((response) => {
        console.log(response);
        alert('店舗情報を登録いたしました。')
        })
        .catch((error) => {
        console.log(error);
        alert('予約できません。もう一度、お試しください');
        });
    },
    postImage() {
      const formData = new FormData();
      formData.append("image_url:this.file");
      formData.append("id: this.restaurant.id");
      axios
        .post('http://127.0.0.1:8000/api/restaurants/image', formData)
        .then((response) => {
          console.log(response);
          alert('写真を変更いたしました')
        })
    },
    putRestaurant() {
      axios
        .put('http://127.0.0.1:8000/api/restaurants', {
          id: this.restaurant.id,
          name: this.restaurant_name,
          prefecture_id: this.restaurant_prefecture,
          genre_id: this.restaurant_genre,
          descript: this.restaurant_description
        })
        .then((response) => {
          console.log(response);
          alert('店舗情報を変更いたしました')
        })
        .catch((err) => {
          console.log(err);
          alert("更新できませんでした。お手数ですが再度お試しください。");
        })
    },
  },
  components:{
    HeaderAdmin
  },
  created(){
  this.getPrefecture();
  this.getGenre();
  },
}
</script>


<style scoped>
.admin{
  text-align: center;
  padding-top:100px;
}
.card {
  margin: 50px auto;
  width: 800px;
  background: #fff;
  box-shadow: 2px 2px 4px;
}
.card-title{
  background-color: #ff7300;
  
}
.card-title h2 {
  color: white;
  font-weight: bold;
  font-size: 20px;
  background-color: #ff7300;
  padding: 20px 20px;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
  float: left;
}
.card-title h2:not(:first-child) {
  border-left: none;
}
.card-title h2.active{
  background-color: #ff1e00fa;
}
.restaurant {
  border-bottom: black;
}
input {
  display: block;
  border: solid 0px;
}
.label {
  width: 400px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
}
.img {
  width: 20px;
  height: 20px;
  padding-right: 20px;
}
.flex {
  display: flex;
  margin-left: 100px;
  padding-bottom: 20px;
  padding-top: 30px;
}
.flex p {
  width: 200px;
}
select{
  width:300px;
}
.top{
  align-items:initial;
}
.left-side{
  box-sizing: border-box;
  width: 25%;
}
.flex-left{
  padding-top:15px;
}
.input-width600{
  width: 600px;
}
button {
  padding: 10px 20px;
  background-color: #ff7300;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 30px 0;
}
.under-line {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
}
</style>
