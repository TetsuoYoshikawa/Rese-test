<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <div class="message">
        <h2>ご予約ありがとうございます</h2>
        <button type="submit" @click="$router.push('/')">マイページに戻る</button>
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
