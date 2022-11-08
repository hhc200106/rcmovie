<template>
  <div>
    <!--面包屑导航-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
    <div class="actor-item">
      <el-avatar :size="70" fit="cover" shape="square" src="/xxx"></el-avatar>
      <div>姓名</div>
    </div>
    <div v-for=" i in 100" :key="i" class="actor-item">
      <el-avatar :size="70" fit="cover" shape="square" src="/xxx"></el-avatar>
      <div>姓名</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        actorName: '',
      }
    }
  },
  methods: {
    /**
     * 点击所有按钮时执行
     * */
    onSearch() {

    }
  },
}
</script>

<style lang="scss" scoped>
.actor-item {
  display: inline-block;
  margin: 20px 20px 0 0;
  text-align: center;

  div {
    font-size: 0.9em;
  }
}
</style>