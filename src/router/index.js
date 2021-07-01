import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyPage from '../views/MyPage.vue'
import Detail from '../views/RestaurantDetail.vue'
import Done from '../views/Done.vue'
import Thanks from '../views/Thanks.vue'
import List from '../views/RestaurantList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path:'/Register',
    name:'register',
    component:Register
  },
  {
    path: '/MyPage',
    name: 'MyPage',
    component:MyPage
  },
  {
    path: '/RestaurantDetail',
    name: 'Detail',
    component:Detail
  },
  {
    path:'/Done',
    name:'done',
    component:Done
  },
  {
    path:'/Thanks',
    name:'thanks',
    component:Thanks
  },
  {
    path:'/Register/:list',
    name:'List',
    component:List
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
