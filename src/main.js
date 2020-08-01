/*
 * @Author: zongbao.yao
 * @Date: 2020-07-30 08:36:27
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-07-30 12:43:56
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// 引入路由
import router from './router/router'

new Vue({
  // 挂在路由到vue
  router,
  render: h => h(App),
}).$mount('#app')
