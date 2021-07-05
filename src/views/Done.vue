<template>
  <div>
    <Header />
    <div class="card">
      <div class="message">
        <h2>ご予約ありがとうございます</h2>
        <button type="submit" @click="$router.push('/')">マイページに戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default{
  components:{
    Header,
  }
}
</script>
<style scoped>
.card {
 margin: 200px auto;
 width: 350px;
 background: #fff;
 border-radius: 10px;
 text-align: center;
 box-shadow: 2px 2px 4px;
}

.message{
  padding:30px 0;
}
button{
  margin:30px 0 10px 0;
}

</style>
