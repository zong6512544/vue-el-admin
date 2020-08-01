<!--
 * @Author: zongbao.yao
 * @Date: 2020-07-30 12:50:13
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 01:28:47
 * @Description: 
--> 
<template>
  <div class="layout">
    <!-- el-布局容器 -->
    <el-container class="outer-container">
      <!-- 头部header -->
      <el-header class="d-flex align-items-center container-header">
        <!-- logo -->
        <a class="h5 text-light mb-0 mr-auto">UNI-ADMIN</a>
        <!-- el-menu菜单栏 -->
        <el-menu
          :default-active="navBar.active"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">商品</el-menu-item>
            <el-menu-item index="3">订单</el-menu-item>
            <el-menu-item index="4">会员</el-menu-item>
            <el-menu-item index="5">设置</el-menu-item>
          -->
          <el-menu-item
            :index="index | numToString"
            v-for="(item,index) in navBar.list"
            :key="index"
          >{{item.name}}</el-menu-item>

          <!-- 级联关系 -->
          <el-submenu index="100">
            <template slot="title">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>sumer
            </template>
            <el-menu-item index="100-1">修改</el-menu-item>
            <el-menu-item index="100-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container class="inner-container">
        <!-- 侧边栏aside -->
        <el-aside width="200px">
          <!-- el-menu -->
          <el-menu default-active="0" @select="slideSelect">
            <el-menu-item
              :index="index | numToString"
              v-for="(item,index) in slideMenus"
              :key="index"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <!-- 
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            -->
          </el-menu>
        </el-aside>
        <!-- 主布局main -->
        <el-main>
          <li v-for="i in 100" :key="i">{{i}}</li>
        </el-main>
      </el-container>
    </el-container>
    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import common from "@/common/mixins/common.js";
export default {
  name: "layout",

  components: {},

  filters: {
    // PS:mixins混入
    // 数组转字符串
    // 此处为了el-menu导航栏的index填充时转换为string
    // numToString(value) {
    //   return value.toString();
    // }
  },

  // PS:混入公共方法
  mixins: [common],

  props: {},

  data() {
    return {
      navBar: {
        active: "0", // el-menu菜单栏选中index
        list: [
          // heade对应的菜单栏
          {
            name: "首页",
            subActive: "0",
            // heade对应的菜单栏下，渲染对应的侧边栏list
            subMenu: [
              {
                icon: "el-icon-s-home",
                name: "后台首页",
              },
              {
                icon: "el-icon-s-claim",
                name: "商品列表",
              }
            ],
          },
          // heade对应的菜单栏
          {
            name: "商品",
            subActive: "0",
            // heade对应的菜单栏下，渲染对应的侧边栏list
            subMenu: [
              {
                icon: "el-icon-s-claim",
                name: "商品列表",
              },
            ],
          },
          { name: "订单" },
          { name: "会员" },
          { name: "设置" },
        ],
      },
    };
  },

  computed: {
    // 渲染侧边菜单栏
    slideMenus() {
      return this.navBar.list[this.navBar.active].subMenu || [];
    },
    // 侧边栏选中状态
    // case01:
    // slideMenuActive() {
    //   return this.navBar.list[this.navBar.active].subActive || 0;
    // },
    // case02:优化
    slideMenuActive: {
      get() {
        return this.navBar.list[this.navBar.active].subActive || 0;
      },
      set(val) {
        this.navBar.list[this.navBar.active].subActive = val;
      },
    },
  },

  watch: {},

  mounted() {},

  methods: {
    // el-menu选中触发事件
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.navBar.active = key;
    },
    // el-menu侧边栏
    slideSelect(index, indexPath) {
      console.log(index, indexPath);
      // 侧边栏选中
      // case01:
      // this.navBar.list[this.navBar.active].subActive = index;

      // case02:优化
      this.slideMenuActive = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.outer-container {
  // *********************************************控制容器全屏展示*********************************************
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // 超出隐藏
  overflow: hidden;

  // header
  .container-header {
    background-color: rgb(84, 92, 100);
  }

  // header下方容器
  .inner-container {
    height: 100%;
    padding-bottom: 60px;
  }
}
</style>
