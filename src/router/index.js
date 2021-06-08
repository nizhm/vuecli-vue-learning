import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
    meta: {title: 'login'}
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {title: 'Vue Family Learning'}
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: 'user-info',
    children: [
      {
        path: 'user-info',
        name: 'UserInfo',
        component: () => import('../views/user/user-info'),
        meta: {title: 'UserInfo'}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
