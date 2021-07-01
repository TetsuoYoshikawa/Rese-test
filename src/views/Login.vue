<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>ログイン</p>
      <div class="form">
        <input placeholder="Email" type="email" v-model="email"/>
        <input placeholder="Password" type="password" v-model="password"/>
        <button @click="auth">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
export default {
  data(){
    return {
      email:"",
      password:""
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
    auth(){
      this.$store.dispatch("login",{
        email:this.emil,
        password:this.password
      });
    }
  }
};
</script>
