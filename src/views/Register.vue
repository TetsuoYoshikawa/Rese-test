<template>
  <div>
    <div class="card">
      <p>Registration</p>
      <div class="form">
        <div>
          <img class="img" src="../assets/username.png"/>
          <input placeholder="UserName" type="text" v-model="name" class="label"/>
          <div class ="underline"></div>
        </div>
        <div>
          <img class="img" src="../assets/email.png"/>
          <input placeholder="Email" type="email" v-model="email" class="label"/>
          <div class ="underline"></div>
        </div>
        <div>
          <img class="img" src="../assets/password.png" />
          <input placeholder="Password" type="password" v-model="password" class="label"/>
          <div class ="underline"></div>
        </div>
        <button class="button" @click="auth">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      name:"",
      email:"",
      password:""
    };
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

<style scoped>
header{
  display:flex;
  height:70px;
  align-items: center;
  padding: 0 30px;
  background-color:#ff7300;
}
.header-img{
  width:20px;
  height: 20px;
  margin:0 20px 0 0;
}
.card {
 margin: 200px auto;
 width: 350px;
 background: #fff;
 border-radius: 10px;
 text-align: center;
 box-shadow: 2px 2px 4px;
}
.card p {
 color: black;
 font-weight: bold;
 text-align: center;
 background-color:#ff7300;
 padding: 20px 0px;
 border-top-left-radius:10px;
 border-top-right-radius:10px;
}
.form {
  background-color: white;
  padding:20px 30px;
  border-radius: 20px;
  margin-top:0px;
}
input{
  margin-bottom: 10px;
  border:solid 0px;
}
.img{
  width:20px;
  height: 20px;
  padding-right:20px;
}

.button{
  width: 50px;
  text-align: center;
  color: black;
  cursor: pointer;
  display:block;
  margin-left: 220px;
}
.label {
  width: 200px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
}

.underline {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
}
</style>

