import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users-manage',
    name: '用户管理',
    component: () => import('../views/users-manage')
  },
  {
    path: '/upload',
    name: '文件上传',
    component: () => import('../views/upload')
  }
]

const router = new VueRouter({
  routes
})

export default router
