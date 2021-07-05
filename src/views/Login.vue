<template>
  <div>
  <Header />
  <div>
    <div class="card">
      <p class="title">ログイン</p>
      <div class="form">
        <input placeholder="Email" type="email" v-model="email"/>
        <input placeholder="Password" type="password" v-model="password"/>
        <button class="button" @click="auth">ログイン</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data(){
    return {
      email:"",
      password:""
    };
  },
  components:{
    Header
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


<style scoped>
.title{
  color:black;
}
.button {
 width: 100px;
 text-align: center;
 padding: 8px 0 10px;
 color: black;
 cursor: pointer;
}
.card {
 margin: 100px auto;
 width: 350px;
 background: #fff;
 border-radius: 5px;
 padding: 20px;
}
.card p {
 color: black;
 font-weight: bold;
 text-align: center;
}
input {
 margin-top: 15px;
 width: 80%;
 border-radius: 10px;
 padding: 10px;
 border: 1px solid black;
 color: black;
}
.form {
 text-align: center;
}
.form button {
 margin-top: 15px;
}

</style>
