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
    path: '/author-nzhming',
    name: 'of I',
    component: () => import('../views/author')
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
  },
  {
    path: '/v-bind-usage',
    name: 'v-bind语法',
    component: () => import('../views/v-bind-usage')
  }
]

const router = new VueRouter({
  routes
})

export default router
