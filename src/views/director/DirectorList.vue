<template>
  <div>
    <!--面包屑导航-->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>导演管理</el-breadcrumb-item>
      <el-breadcrumb-item>导演列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.directorName" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">导演列表</el-divider>

    <person-item v-for="item in directorList" :id="item.id" :key="item.id" :avatar="item.director_avatar"
                 :name="item.director_name" @delete="onDelete(item.id)"></person-item>

  </div>
</template>

<script>
import PersonItem from "@/components/PersonItem";

export default {
  components: {PersonItem},
  data() {
    return {
      directorList: null,
      searchForm: {
        directorName: ''
      }
    }
  },
  methods: {
    /**
     * 点击所有按钮时执行
     * */
    onSearch() {
      // 发送请求
      if (!this.searchForm.directorName.trim()) {
        //  填写的是空字符串
        this.loadDirectorList() // 加载导演列表
      }
      let name = this.searchForm.directorName
      this.$http.DirectorApi.listByName({name}).then(res => {
        console.log('模糊查询结果', res)
        if (res.data.code === 200) {
          this.directorList = res.data.data
        }
      })
    },
    loadDirectorList() {
      this.$http.DirectorApi.list({page: 1, pagesize: 100}).then((res) => {
        console.log('加载导演列表', res)
        if (res.data.code == 200) {
          this.directorList = res.data.data
        }
      })
    },
    onDelete(id) {
      this.$http.DirectorApi.delete({id: id}).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.$message.success('删除成功')
          this.loadDirectorList()
        }
      })
    }
  },
  mounted() {
    // 加载导演列表
    this.loadDirectorList()
  }
}
</script>

<style lang="scss" scoped>
</style>