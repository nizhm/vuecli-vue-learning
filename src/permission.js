import router from './router'

router.beforeEach((to, from, next) => {
  // set page title
  document.title = to.meta.title
  if(to.path === '/') {
    next('/login')
  }else {
    next()
  }
})
