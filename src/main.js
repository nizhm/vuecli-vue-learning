import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui框架
import ElementUI from 'element-ui'
import enLang from 'element-ui/lib/locale/lang/en'
import './styles/element-variables.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
  locale: enLang
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
