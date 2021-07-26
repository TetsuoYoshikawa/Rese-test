import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import MyPage from '../views/MyPage.vue';
import RestaurantDetail from '../views/RestaurantDetail.vue';
import Done from '../views/Done.vue';
import Thanks from '../views/Thanks.vue';
import RestaurantList from '../views/RestaurantList.vue';

Vue.use(VueRouter);

const routes = [
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
    path: '/m',
    name: 'MyPage',
    component:MyPage
  },
  {
    path: '/w',
    name: 'RestaurantDetail',
    component:RestaurantDetail
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
  {
    path:'/',
    name:'RestaurantList',
    component:RestaurantList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
