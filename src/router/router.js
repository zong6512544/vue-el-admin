/*
 * @Author: zongbao.yao
 * @Date: 2020-07-30 12:28:53
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-01 19:33:35
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入路由routes配置
import routes from '../common/config/routes.js'

const router = new VueRouter({
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('全局前置守卫：', to, from)
    next();
})

// 全局后置钩子
router.afterEach((to, from) => {
    console.log('全局后置钩子', to, from)
})

export default router