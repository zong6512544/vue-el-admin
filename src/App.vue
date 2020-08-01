<!--
 * @Author: zongbao.yao
 * @Date: 2020-07-30 08:36:27
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-01 22:57:18
 * @Description: 
--> 
<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
/* *******************************************************改变滚动条样式********************************************************** */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  transition: color .2s ease;
}
</style>
