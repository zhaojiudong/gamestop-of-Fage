import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    redirect:"/home",
    path:'/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },{
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/Pay.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
