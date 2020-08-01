/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 01:36:21
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 03:17:25
 * @Description: 全局配置信息
 */

export default {
  logo: 'UNI-ADMIN-YZB', //系统logo文字
  navBar: {//头部导航栏
    active: "0", // el-menu头部导航、菜单栏选中index
    list: [
      // header对应的菜单栏
      {
        name: "首页",
        subActive: "0",//侧边栏被选中项
        // header对应的菜单栏下，渲染对应的侧边栏list
        subMenu: [{
            icon: "el-icon-s-home",
            name: "后台首页",
            pathname: 'index'
          },
          {
            icon: "el-icon-s-claim",
            name: "商品列表",
            pathname: 'shop_goods_list'
          }
        ],
      },
      // header对应的菜单栏
      {
        name: "商品",
        subActive: "0",
        // header对应的菜单栏下，渲染对应的侧边栏list
        subMenu: [{
          icon: "el-icon-s-claim",
          name: "商品列表",
          pathname: 'shop_goods_list'
        }],
      },
      {
        name: "订单"
      },
      {
        name: "会员"
      },
      {
        name: "设置"
      },
    ],
  }
}