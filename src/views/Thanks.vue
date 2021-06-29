<template>
  <div>
    <HeaderAuth />
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
import HeaderAuth from "../components/HeaderAuth.vue";
export default{
  components:{
    HeaderAuth
  }
}
</script>
