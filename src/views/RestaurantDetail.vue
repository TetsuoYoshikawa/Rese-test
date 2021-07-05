<template>
  <div>
    <Header />
    <div class="restaurantList contents">
      <div class="item">
        <div class="restaurantCard flex" v-for="(restaurant,index) in restaurantList" :key=index :value="restautant.id">
          <img src="../assets/cross.png" class="restaurantPic">
          <div class="restaurantDetail">
            <div class="restaurantName">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restairant.prefecture}} #{{restaurant.genre}}</p>
            </div>
            <div>
              <button @click="detail">詳しく見る</button>
              <img src="../assets/store.png" class="heart">
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="reservation">
          <div class="card">
            <h2>予約</h2>
            <form>
              <div class="col-3 mx-auto" style="width: 250px;">
                <select class="date" v-model="date">
                  <vue-datepicker :format="DatePickerFormat" :bootstrap-styling="true" :language="ja"
                    placeholder="日付を選択してください"></vue-datepicker>
                </select>
              </div>
              <div>
                <select class="time" v-model="time">
                  <vue-timepicker format="hh::mm" id="timepicker" name="time" placeholder="時間を入力してください"
                  input-class="form-control" :hour-range="[10,11,12,13,14,15,16,17,18,19,20,21,22,23]"
                  :minute-range="[0,10,20,30,40,50]" hide-disabled-hours hide-disabled-minutes close-on-complete>
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
            <form class="form">
              <div>
                <p >{{a}}</p>
              </div>
              <div>
                <p>{{a}}</p>
              </div>
              <div>
                <p>{{a}}</p>
              </div>
            </form>
            <button @click="resere" class="button">予約する</button>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import VueDatepicker from 'vue2-datepicker'
import 'vue2-datepicker/index'
import {ja} from 'vuejs-datepicker/dist/locale'
import Header from '../components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      DatePickerFormat: 'yyyy-MM-dd',
      ja:ja,
    }
  }, 
  components: {
    'vue-timepicker': VueTimepicker,
    'vue-datepicker':VueDatepicker,
    Header,
  },
    }
</script>
 
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:  0 auto; 
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  width: 50%;
}
.contents {
  display: flex;
  flex-wrap: wrap;
}
.item {
  padding: 20px 10px;
  width: 48%;
  justify-content: space-between;
}
.restaurantPic {
  width: 100%;
}
.restaurantCard {
  background-color: white;
  color: black;
  box-shadow: 2px 2px 4px;
  padding-bottom: 20px;
}
.restaurantDetail {
  margin: 0 20px;
}
.heart {
  width: 30px;
  height: 20px;
}
.reservation {
  background-color:#4fb683;
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
  width: 200px;
}
.button{
  margin-top:20px;
  width:100%;
}
</style>
