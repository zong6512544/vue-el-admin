/*
 * @Author: zongbao.yao
 * @Date: 2020-07-30 13:11:38
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-01 20:30:34
 * @Description: 
 * 
 * 一、例如：index/index、shop/index以index结尾的，path和name默认去除index
 * 二、例如：shop/list，默认生成name为shop_list（如果结尾为index，例如shop/index则是shop）
 * 三、填写后不会自动生成路由
 */

// 引入的view组件
// import layout from '../views/layout.vue'

let routes = [{
        path: '/',
        name: 'layout',
        // 重定向
        // 访问===>>>路由path:/ 的时候,自动跳转到===>>>路由name:index路径
        redirect: {
            name: 'index'
        },
        // PS:路由懒加载
        // component: () => import('../../views/layout.vue'),
        // PS:路由二次封装，省略上述写法
        component: 'layout',
        // 嵌套路由
        children: [{
            // PS:路由二次封装，自动生成
            // path: '/index',
            // name: 'index',

            // PS:路由懒加载
            // component: () => import('../../views/index.vue')
            // PS:路由二次封装，省略上述写法
            component: 'index/index'
        }, {
            // PS:路由二次封装，自动生成
            // path: '/shop/goods/list',
            // name: 'shop_goods_list',

            // PS:路由二次封装，省略上述写法
            component: 'shop/goods/list'
        }]
    },
    // 登录
    {
        // PS:路由二次封装，自动生成
        // path: '/login',
        // name: 'login',

        // PS:路由二次封装，省略上述写法
        component: 'login/index'
    },
    // 404 或 * 所有未匹配路由===>>>均跳转到路由name:index路径
    {
        path: '*',
        redirect: {
            name: 'index'
        }
    }
]

// 获取路由信息方法
let getRoutes = function () {
    // 自动生成路由
    createRoute(routes)
    console.log(routes)
    return routes;
}

/**
 * @description: 递归实现路由二次封装
 * @param {routes}//路由配置参数【array】
 * @return: routes
 */
// 自动生成路由
function createRoute(arr) {
    // 遍历路由数组
    for (let i = 0; i < arr.length; i++) {
        // 如果该遍历项没有component属性，则停止当前循环
        if (!arr[i].component) return
        // 去除index
        let val = getValue(arr[i].component)
        // 生成name(如果存在name,就是用存在的name配置信息)
        arr[i].name = arr[i].name || val.replace(/\//g, '_');
        // 生成path(如果存在path,就是用存在的path配置信息)
        arr[i].path = arr[i].path || `/${val}`;
        // 自动生成component的引入
        // 读取component属性的属性值【当前为字符串】
        let componentFun = import(`../../views/${arr[i].component}.vue`)
        // 二次将遍历项的component属性【当前为字符串】替换为 import的真实组件 【Object】
        arr[i].component = () => componentFun
        // 如果当前遍历项有子路由children,则深入遍历，实现对所有路由的import 引入
        if (arr[i].children && arr[i].children.length > 0) {
            createRoute(arr[i].children)
        }
    }
}

// 去除index
function getValue(str) {
    // 获取最后一个反斜杠/的索引
    // demo:
    // str = login/index
    let index = str.lastIndexOf('/');
    // 获取最后一个反斜杠/后面的值
    let val = str.substring(index + 1, str.length);
    // 判断是不是"index"结尾
    if (val === 'index') {
        // demo
        // return login
        return str.substring(index, -1)
    }
    return str
}

// 导出路由信息方法
// export default routes
// PS:二次封装-获取路由信息方法
export default getRoutes()