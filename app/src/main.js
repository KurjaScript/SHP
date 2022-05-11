import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router';
new Vue({
  render: h => h(App),
  // 注册路由：底下的写法 KV 一致省略 V [router 小写的]
  router
}).$mount('#app')
Vue.config.productionTip = false
