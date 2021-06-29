<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>Registration</p>
      <div class="form">
        <input placeholder="UserName" type="text"/>
        <input placeholder="Email" type="email"/>
        <input placeholder="Password" type="password"/>
        <button @click="auth">登録</button>
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
