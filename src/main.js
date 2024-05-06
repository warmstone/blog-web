import Vue from 'vue'
import App from './App.vue'
// 全局样式
import '@/assets/css/reset.css'
// 引入VueRouter
import VueRouter from 'vue-router'

// 路由
import router from './router'

import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
