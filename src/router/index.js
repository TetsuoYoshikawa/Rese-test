import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyPage from '../views/MyPage.vue'
import Detail from '../views/RestaurantDetail.vue'
import Done from '../views/Done.vue'
import Thanks from '../views/Thanks.vue'
import RestaurantList from '../views/RestaurantList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/L',
    name: 'login',
    component: Login
  },
  {
    path:'/R',
    name:'register',
    component:Register
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component:MyPage
  },
  {
    path: '/',
    name: 'Detail',
    component:Detail
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
    path:'/S',
    name:'restaurantlist',
    component:RestaurantList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
