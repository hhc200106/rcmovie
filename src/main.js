import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入httpApis
import httpApis from './http/index'
Vue.prototype.$http = httpApis

// 设置JSCode安全秘钥
window._AMapSecurityConfig = {
  securityJsCode: "0b7fff62bb4d6f79bae15c1a1483e327",
};


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
