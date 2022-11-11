<template>
  <div>
    <el-container>
      <el-header class="header">日辰影城后台管理系统</el-header>
      <el-container>
        <el-aside class="aside scroll-container" width="200px">
          <el-menu :default-active="$route.path" active-text-color="#fff" background-color="#333" router
                   style="border-right: none" text-color="#ccc"
                   unique-opened>
            <el-submenu index="/actor">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">演员管理</span>
              </template>
              <el-menu-item index="/home/actor-list">
                <i class="el-icon-menu"></i>
                <span>演员列表</span>
              </el-menu-item>
              <el-menu-item index="/home/actor-add">
                <i class="el-icon-menu"></i>
                <span>新增演员</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="/director">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">导演管理</span>
              </template>
              <el-menu-item index="/home/director-list">
                <i class="el-icon-menu"></i>
                <span>导演列表</span>
              </el-menu-item>
              <el-menu-item index="/home/director-add">
                <i class="el-icon-menu"></i>
                <span>新增导演</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="/movie">
              <template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span slot="title">电影管理</span>
              </template>
              <el-menu-item index="/home/movie-list">
                <i class="el-icon-menu"></i>
                <span>电影列表</span>
              </el-menu-item>
              <el-menu-item index="/home/movie-add">
                <i class="el-icon-menu"></i>
                <span>新增电影</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!--垂直导航-->
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
  font-size: 1.3em;
}

.aside {
  background-color: #333;
  height: calc(100vh - 60px);
}

.main {
  height: calc(100vh - 60px);
}

.el-menu-item.is-active {
  font-weight: bold;
}
</style>