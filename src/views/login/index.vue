<!--
 * @Author: zongbao.yao
 * @Date: 2020-07-30 13:00:10
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-01 21:52:45
 * @Description: 
--> 
<template>
  <div class="index">
    <div class="containner">
      <div class="row">
        <!-- 12 -->
        <div class="col-12 col-sm-9 col-md-7 col-lg-4 m-auto pt-5 login-box">
          <div class="card mt-5">
            <div class="card-header bg-white">
              <h3 class="text-center mb-0 text-secondary">UNI-ADMIN</h3>
            </div>
            <div class="card-body">
              <!-- :rules-即绑定的验证规则对象 -->
              <!-- ref-表单提交时，触发验证事件 -->
              <el-form ref="form" :model="form" :rules="rules">
                <!-- prop-即对应的验证规则项 -->
                <el-form-item label="账号" prop="username">
                  <el-input v-model="form.username" size="medium" placeholder="请输入您的用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input
                    v-model="form.password"
                    type="password"
                    size="medium"
                    placeholder="请输入您的密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="medium" class="w-100" @click="submit">立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",

  components: {},

  filters: {},

  mixins: [],

  props: {},

  data() {
    return {
      // 用户信息form
      form: {
        username: "",
        password: "",
      },
      // 表单验证
      rules: {
        username: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
        ],
      },
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {
    // 登录按钮
    submit() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return;
        }
        // 提交表单
        this.$router.push({ name: "index" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  height: 500px;
}
</style>
