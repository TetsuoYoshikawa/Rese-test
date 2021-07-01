<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>Registration</p>
      <div class="form">
        <input placeholder="UserName" type="text" v-model="name"/>
        <input placeholder="Email" type="email" v-model="email"/>
        <input placeholder="Password" type="password" v-model="password"/>
        <button @click="auth">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
import axios from "axios";
export default {
  data(){
    return {
      name:"",
      email:"",
      password:""
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
    auth(){
      axios
      .post('https://local:8000',{
        name:this.name,
        email:this.email,
        password:this.password,
      })
      .then((response) =>{
        console.log(response);
        this.$router.replase("/");
      })
      .catch(error => {
        alert(error);
      });
    }
  }
};
</script>
