<template>
  <div class="main">
    <div class="login_main">
      <p class="login_title">喜发科技</p>
      <div class="login_form">
        <el-form ref="form" :model="loginForm">
          <el-form-item>
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="loginForm.name"
              placeholder="账户"
            ></el-input>
          </el-form-item>
          <el-form-item suffix-icon="el-icon-date">
            <el-input
              prefix-icon="el-icon-key"
              show-password
              v-model="loginForm.password"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="loginIn"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import storage from "good-storage";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        name: "admin",
        password: "",
      },
    };
  },
  methods: {
    keyDown(e) {
      if(e.keyCode == 13){
        this.loginIn()
      }
    },
    loginIn() {
      if (this.loginForm.name == "" && this.loginForm.password == "") {
        this.$message({
          message: "账户或密码不能为空",
          type: "warning",
        });
      } else {
        if (
          this.loginForm.name == "admin" &&
          this.loginForm.password == "000000"
        ) {
          storage.set('user_token', this.loginForm.name)
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.push({
            path: "/domain",
          });
        }
      }
    },
  },
  mounted() {
    window.addEventListener('keydown',this.keyDown)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #545c64;
  margin-left: 0px;
}
.login_main {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.login_title {
  font-size: 26px;
  color: #eee;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
}
</style>
