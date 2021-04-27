<template>
  <div class="main">
    <el-menu
      :default-active="activePage"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border: none;"
      :router="true"
    >
      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu index="woorkspace">
        <template slot="title">工作台</template>
        <el-menu-item index="domain">入口配置</el-menu-item>
      </el-submenu>
      <el-menu-item index="set">设置</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      activePage: "domain",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.activePage = this.$route.path.replace('/', '')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    position: absolute;
    width: 200px;
    height: 100%;
    background: #545c64;
}
</style>
