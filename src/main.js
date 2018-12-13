import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from './utils/axiosPlugin'
Vue.prototype.axios = Axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './css/main.css'
import './assets/font/iconfont.css'
import * as filters from './filters/index.js'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
