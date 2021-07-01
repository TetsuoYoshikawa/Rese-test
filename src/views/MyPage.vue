<template>
  <div>
    <div class="mypage">
      <div v-if="center" key="center">
        <p>最初の画面</p>
        <div @click="watchlift">左の画面に戻る</div>
        <div @click="watchRight">右の画面に行く</div>
      </div>
      <div v-if="left" key="left">
        <p>左の画面</p>
        <div @click="watchCenter">最初の画面に戻る</div>
        <div @click="watchRight">右の画面に行く</div>
      </div>
      <div v-if="right" key="left">
        <p>右の画面</p>
        <div @click="watchCenter">最初の画面に戻る</div>
        <dic @click="watchLeft">左の画面に行く</dic>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      center:true,
      right:false,
      left:false,
    };
  },
  methods:{
    watchCenter(){
      this.center = true;
      this.right = false;
      this.left = false;
    },
    watchleft(){
      this.center = false;
      this.left = true;
      this.right = false;
    },
    watchRight(){
      this.center = false;
      this.left = false;
      this.right = true;
    },
  }
};
</script>
