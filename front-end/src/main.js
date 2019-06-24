// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import fn from '@/common/fn'

import '@/assets/css/renderCss.css'  //样式初始化
import 'element-ui/lib/theme-chalk/index.css'  //需引入element主题，样式才生效

Vue.use(ElementUI);

Vue.prototype.$fn = fn;
Vue.prototype.$axios = axios;

axios.defaults.baseURL = '/api'  //axios跨域
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
