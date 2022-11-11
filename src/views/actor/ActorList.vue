<template>
  <div>
    <!--面包屑导航-->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>演员管理</el-breadcrumb-item>
      <el-breadcrumb-item>演员查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.actorName" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">演员列表</el-divider>

    <person-item v-for="item in actorList" :id="item.id" :key="item.id" :avatar="item.actor_avatar"
                 :name="item.actor_name" @delete="onDelete(item.id)"></person-item>

  </div>
</template>

<script>
import PersonItem from "@/components/PersonItem";

export default {
  components: {PersonItem},
  data() {
    return {
      actorList: null,
      searchForm: {
        actorName: ''
      }
    }
  },
  methods: {
    /**
     * 点击所有按钮时执行
     * */
    onSearch() {
      // 发送请求
      if (!this.searchForm.actorName.trim()) {
        //  填写的是空字符串
        this.loadActorList() // 加载演员列表
      }
      let name = this.searchForm.actorName
      this.$http.ActorApi.listByName({name}).then(res => {
        console.log('模糊查询结果', res)
        if (res.data.code === 200) {
          this.actorList = res.data.data
        }
      })
    },
    loadActorList() {
      this.$http.ActorApi.list({page: 1, pagesize: 100}).then((res) => {
        console.log('加载演员列表', res)
        if (res.data.code == 200) {
          this.actorList = res.data.data
        }
      })
    },
    onDelete(id) {
      this.$http.ActorApi.delete({id: id}).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.$message.success('删除成功')
          this.loadActorList()
        }
      })
    }
  },
  mounted() {
    // 加载演员列表
    this.loadActorList()
  }
}
</script>

<style lang="scss" scoped>
</style>