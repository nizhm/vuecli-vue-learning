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
    path: '/fetch-image',
    name: 'fetchImage',
    component: () => import('../views/fetch-image')
  },
  {
    path: '/v-bind-usage',
    name: 'v-bind语法',
    component: () => import('../views/v-bind-usage')
  },
  {
    path: '/v-model-usage',
    name: 'v-model语法',
    component: () => import('../views/v-model-usage')
  },
  {
    path: '/element-validate',
    name: 'Element Validation',
    component: () => import('../views/element-validate')
  },
  {
    path: '/window',
    name: 'Window',
    component: () => import('../views/window')
  },
  {
    path: '/worker',
    name: 'Worker',
    component: () => import('../views/worker')
  },
  {
    path: '/country',
    name: 'Country',
    component: () => import('../views/worlds-country')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: () => import('../views/vue/component-demo')
  },
  {
    path: '/vuex-practice',
    name: 'vuex-practice',
    component: () => import('../views/vuex-practice')
  },
  {
    path: '/html',
    name: 'html',
    component: () => import('../views/html')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
