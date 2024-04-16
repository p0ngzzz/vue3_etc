import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QrPayment from '../views/QrPaymentView.vue'
import CrudView from '../views/CrudView.vue'
import AxiosView from '../views/AxiosView.vue'
import BasketOrder from '../views/basketOrderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/qrPayment',
    name: 'QrPayment',
    component: QrPayment
  },
  {
    path: '/crud',
    name: 'CrudView',
    component: CrudView
  },
  {
    path: '/axiosTest',
    name: 'AxiosView',
    component: AxiosView
  },
  {
    path: '/basketOrder',
    name: 'BasketOrder',
    component: BasketOrder
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
