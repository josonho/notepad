// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import fn from '@/common/fn'
import  ue from 'vue-quill-editor' //调用编辑器

import '@/assets/css/renderCss.css'  //样式初始化
import '@/assets/scss/common.scss'  //全局样式（全局可使用）
import '@/assets/element-theme/index.css'  //需引入element主题，样式才生效
import 'quill/dist/quill.core.css'   //vue-quill-editor样式
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI);
Vue.use(ue);

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
