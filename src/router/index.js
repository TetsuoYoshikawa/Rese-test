import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import MyPage from '../views/MyPage.vue';
import RestaurantDetail from '../views/RestaurantDetail.vue';
import Done from '../views/Done.vue';
import Thanks from '../views/Thanks.vue';
import RestaurantList from '../views/RestaurantList.vue';
import store from '../store/index';
//import A from '../views/A.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'RestaurantList',
    component:RestaurantList
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component:MyPage,
  },
  {
    path: '/detail/:id',
    name: 'RestaurantDetail',
    component:RestaurantDetail,
    props: true,
    meta:{
      userAuth:true,
    }
  },
  {
    path:'/done',
    name:'done',
    component:Done
  },
  {
    path:'/thanks',
    name:'thanks',
    component:Thanks
  },
  //{
  //  path:'/',
  //  name:'A',
  //  component:A
  //},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) => {
  if(
    (to.matched.some((record) => record.meta.userAuth) &&
    !store.state.auth
  )){
    next({
      path:"/login",
      query:{
        redirect:to.fullPath,
      },
    });
  }else{
    next();
  }
});

export default router;
