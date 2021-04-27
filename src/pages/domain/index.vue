<template>
  <div class="main">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>入口管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="table_main">
      <div class="top_ctrl">
        <el-button type="primary" icon="el-icon-plus" @click="addEntrance"
          >添加</el-button
        >
      </div>
      <el-table :data="tableData" border>
        <el-table-column prop="entrance" label="入口"></el-table-column>
        <el-table-column prop="number" label="剩余域名"></el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="editEntrance(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="deleteEntrance(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "damain",
  data() {
    return {
      tableData: [
        {
          entrance: "http://www.baidu.com",
          number: "3",
          domain: ['http://1.com','http://2.com','http://3.com']
        },
        {
          entrance: "http://www.4399.com",
          number: "2",
          domain: ['http://4.com','http://5.com']
        },
        {
          entrance: "http://www.weibo.com",
          number: "5",
          domain: ['http://6.com','http://7.com','http://8.com','http://9.com','http://10.com']
        },
        {
          entrance: "http://www.qqvip.com",
          number: "0",
          domain: []
        },
      ],
      entranceForm: {
        entrance: "",
      },
    };
  },
  methods: {
    addEntrance() {
      this.$router.push({
        path: '/editurls',
        query: {
          type: 'add'
        }
      })
    },
    editEntrance(item) {
      this.$router.push({
        path: '/editurls',
        query: {
          type: 'edit',
          item: JSON.stringify(item)
        }
      })
    },
    deleteEntrance() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breadcrumb {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  padding-left: 20px;
}
.table_main {
  padding: 40px;
}
.top_ctrl {
  margin-bottom: 20px;
}
.add_domain {
  text-align: center;
}
</style>
