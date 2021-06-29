
<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>ログイン</p>
      <div class="form">
        <input placeholder="Email" type="email"/>
        <input placeholder="Password" type="password"/>
        <button>ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
export default {
  components:{
    HeaderAuth
  }
};
</script>
