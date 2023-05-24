import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, { ak: '7YnpT6md6PPyVg1b40cxBaMOTbO013Xn' })

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios
// axios.defaults.baseURL='http://localhost:8088'
// axios.create({baseURL:"/api"})


const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
