<template>
  <div>
    <Header />
    <div class="restaurant-list">
      <div class="item">
        <div class="restaurant-card flex" v-for="restaurant in restaurantList" :key="restaurant.name">
          <div class="restaurant-name" >
            <img class="img" src="../assets/Back.png" @click="$router.push('/')">
            <h2 class="restaurant-title">Titile</h2>
          </div>
          <img src="../assets/search.jpeg" class="restaurant-pic">
          <div class="restaurant-detail">
            <div class="tag" style="padding:20px;font-size:20px"> 
              <p>#{{restaurant.prefecture}} #{{restaurant.genre}}</p>
            </div>
            <div class="description" style="padding-left:20px;font-size:16px">
              <p>{{restaurant.detail}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="reservation-detail">
          <h2 class="title">予約</h2>
          <div class="reservation">
            <div class="card">
              <form>
                <div class="col-3 mx-auto" style="width: 250px;">
                  <select class="date" v-model="date">
                  <vuejs-datepicker 
                  :format="DatePickerFormat" :bootstrap-styling="true" 
                  :language="ja"
                  placeholder="日付を選択してください"
                  ></vuejs-datepicker>
                  </select>
                </div>
                <div>
                  <select class="time" v-model="time">
                    <vue-timepicker
                    placeholder="時間を入力してください"
                    format="hh:mm" 
                    id="timepicker" 
                    name="time" 
                    input-class="form-control" 
                    :hour-range="[10,11,12,13,14,15,16,17,18,19,20,21,22,23]"
                    :minute-range="[0,10,20,30,40,50]" hide-disabled-hours 
                    hide-disabled-minutes 
                    close-on-complete>
                    </vue-timepicker>
                  </select>
                </div>
                <div>
                  <select class="number" v-model="number">
                    <option value="">人数を入力してください</option>
                    <option v-for="n in 20" :key="n">{{n}}</option>
                  </select>
                </div>
              </form>
              <button @click="($router.push('/done'),{name:reserve})" class="button btn btn-border-shadow btn-border-shadow--color2">予約する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Modal" v-if="openModal" key=openModel>
      <div>
        <div class="card">
          <h2>予約内容の確認</h2>
        </div>
        <div class="message">
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';
import VuejsDatepicker from 'vue2-datepicker';
import 'vue2-datepicker/index';
import {ja} from 'vuejs-datepicker/dist/locale';
import Header from '../components/Header.vue';
export default {
  data () {
    return {
      date:"",
      time:"",
      number:"",
      DatePickerFormat: 'yyyy-MM-dd',
      ja:ja,
      restaurants:[],
      restaurantList:[
        {name:"root",
        prefecture:"大阪",
        genre:"焼肉",
        url:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
        detail:"料理長厳選の食材からつくる寿司を用いたコースを是非お楽しみください。食材・味・価格、お客様の満足度を徹底的に追求したお店です。特別な日のお食事、ビジネス接待まで気軽に使用する事ができます。"},
      ]
    };
  },
  methods:{
    async getRestaurant() {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/contact/ + restaurant.id"
      );
      this.restaurant = resData.data.data;
    },
    
    
  },
  components: {
    'vue-timepicker': VueTimepicker,
    'vuejs-datepicker':VuejsDatepicker,
    Header,
  },
}
</script>
 
<style scoped>
/*///////////////////
//   店舗情報詳細   //
///////////////////*/
.restaurant-list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  padding: 20px 10px;
  width: 48%;
  justify-content: space-between;
  position: relative;
}
.restaurant-card {
  background-color: white;
  color: black;
  box-shadow: 2px 2px 4px;
  padding-bottom: 20px;
}
.restaurant-name{
  padding:20px 0;
  display: flex;
  line-height: 20px;
}
.restaurant-title{
  padding:5px 0 0 20px;;
}
h2{
  font-size:20px;
}
.restaurant-pic {
  width: 100%;
  height:400px;
}
.restaurant-detail {
  margin: 0 20px;
}
.img {
  width:30px;
  height:30px;
  padding-left:20px;
}
/*/////////////
    予約内容
//////////// */
.reservation-detail{
  box-shadow: 2px 2px 2px;
  height:590px;
}
.title{
  background-color:#4fb683;
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
}
.reservation {
  width:90%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
}
.card {
  padding: 20px 40px;
}
.form {
  background-color: white;
  padding:20px 30px;
  border-radius: 20px;
  margin-top:30px;
}
select {
  display: inline-block;
  width: 400px;
  height:30px;
  margin-bottom:30px;
}
/*//////////////////////
//   ボタンオプション   //
//////////////////////*/
.button{
  margin-top:20px;
  width:100%;
}
.btn,
a.btn,
button.btn {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
button.btn-border-shadow {
  padding: calc(1.5rem - 12px) 3rem 1.5rem;
  background: #fff;
}
button.btn-border-shadow:before {
  position: absolute;
  top: -6px;
  left: -6px;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 3px solid #000;
  border-radius: 0.5rem;
}
button.btn-border-shadow:hover {
  padding: calc(1.5rem - 6px) 3rem;
}
button.btn-border-shadow:hover:before {
  top: 0;
  left: 0;
}
button.btn-border-shadow--color2 {
  border-radius: 100vh;
}
button.btn-border-shadow--color2:before {
  border-radius: 100vh;
  -webkit-box-shadow: 3px 3px 0 #78e5e5;
  box-shadow: 3px 3px 0 #78e5e5;
}
</style>
