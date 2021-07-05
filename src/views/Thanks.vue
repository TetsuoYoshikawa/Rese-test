<template>
  <div>
    <Header />
    <div class="card">
      <div class="pop">
        <h2>Thank You! :)</h2>
      </div>
      <div class="message">
        <h2>登録会員ありがとうございます</h2>
        <button type="submit" @click="$router.push('/login')">ログインする</button>
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
.pop {
 color: black;
 font-weight: bold;
 text-align: center;
 background-color:#ff7300;
 padding: 20px 0px;
 border-top-left-radius:10px;
 border-top-right-radius:10px;
}
.message{
  padding:30px 0;
}
button{
  margin:30px 0 10px 0;
}

</style>
