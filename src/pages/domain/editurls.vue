<template>
  <div class="main">
    <el-form
      ref="form"
      :model="dataForm"
      label-position="left"
      label-width="100px"
    >
      <el-form-item label="入口地址">
        <el-col :span="8">
          <el-input v-model="dataForm.entrance"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="剩余域名">
        <el-col :span="2">
          <el-input v-model="dataForm.number" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item
        :label="(index + 1) | changeNumToHan"
        v-for="(item, index) in dataForm.domain"
        :key="index"
      >
        <el-col :span="8">
          <el-input v-model="dataForm.domain[index]"></el-input>
        </el-col>
        <el-col :span="2" class="ctrlDomain_btn">
          <el-button
            type="danger"
            icon="el-icon-minus"
            size="mini"
            circle
            @click="deleteDomain(index)"
            v-if="dataForm.domain.length > 1"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            circle
            @click="addDomain"
            v-if="index + 1 == dataForm.domain.length"
          ></el-button>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "editUrls",
  data() {
    return {
      dataForm: {
        entrance: "",
        number: "",
        domain: [""],
      },
    };
  },
  created() {
    if (this.$route.query.type == "edit") {
      this.dataForm = JSON.parse(this.$route.query.item);
      if (this.dataForm.domain.length == 0) {
        this.addDomain();
      }
    }
  },
  methods: {
    addDomain() {
      this.dataForm.domain.push("");
    },
    deleteDomain(index) {
      console.log(index);
      this.dataForm.domain.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 40px;
}
.ctrlDomain_btn {
  margin-left: 10px;
}
</style>
