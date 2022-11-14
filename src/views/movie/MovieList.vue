<template>
  <div>
    <!--面包屑导航-->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.movieName" placeholder="请输入电影名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider content-position="left">电影列表</el-divider>

    <!--使用表格呈现电影数据-->
    <div v-if="tableData">
      <el-table
          :data="tableData.result"
          :stripe="true"
          style="width: 100%">
        <el-table-column align="center" label="封面" prop="cover" width="180">
          <template slot-scope="scope">
            <el-image :src="scope.row.cover" fit="contain" style="width: 60px; height: 80px"></el-image>
          </template>
        </el-table-column>
        <el-table-column align="center" label="标题" prop="title"></el-table-column>
        <el-table-column align="center" label="主演" prop="star_actor"></el-table-column>
        <el-table-column align="center" label="上映时间" prop="showingon" width="200"></el-table-column>
        <el-table-column align="center" label="时长" prop="duration" width="200">
          <template slot-scope="scope">
            {{ scope.row.duration }}分钟
          </template>
        </el-table-column>
        <el-table-column align="center" label="所属类型" prop="category_id" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.category_id === 1" type="danger">热映</el-tag>
            <el-tag v-if="scope.row.category_id === 2">待映</el-tag>
            <el-tag v-if="scope.row.category_id === 3" type="success">经典</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template>
            <el-button circle icon="el-icon-user" type="info"></el-button>
            <el-button circle icon="el-icon-picture-outline" type="warning"></el-button>
            <el-button circle icon="el-icon-delete" type="danger"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          :page-size="tableData.pagesize"
          :total="tableData.total"
          background
          layout="prev, pager, next"
          style="margin: 20px 0;text-align: right">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import PersonItem from "@/components/PersonItem";

export default {
  components: {PersonItem},
  data() {
    return {
      searchForm: {
        movieName: ''
      },
      tableData: null  // 存储表格所需数据
    }
  },
  methods: {
    /**
     * 点击所有按钮时执行
     * */
    onSearch() {
    },
    loadMovieList() {
      this.$http.MovieApi.list({page: 1, pagesize: 3}).then(res => {
        console.log(res)
        this.tableData = res.data.data
      })
    }
  },
  mounted() {
    // 加载电影列表
    this.loadMovieList()
  }
}
</script>

<style lang="scss" scoped>
</style>