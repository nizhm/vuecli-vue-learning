import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles/index.scss'
import './styles/element-variables.scss'

Vue.config.productionTip = false

console.log(Vue.name)
console.log(Object.getOwnPropertyNames(Vue))
console.log(Object.getOwnPropertyNames(new Vue))

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
