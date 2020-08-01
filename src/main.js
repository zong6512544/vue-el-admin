/*
 * @Author: zongbao.yao
 * @Date: 2020-07-30 08:36:27
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 01:38:14
 * @Description: 
 */ 
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// 引入路由
import router from './router/router'

// 引入全局配置文件
import $conf from './common/config/config.js'
Vue.prototype.$conf = $conf

new Vue({
  // 挂在路由到vue
  router,
  render: h => h(App),
}).$mount('#app')
