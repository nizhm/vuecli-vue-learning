/**
 * 1.控制登录状态
 * 2.控制progress bar状态
 */
import router from './router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  Nprogress.start()
  // set page title
  document.title = to.meta.title
  if(to.path === '/') {
    next('/login')
    Nprogress.done()
  }else {
    next()
    Nprogress.done()
  }
})
