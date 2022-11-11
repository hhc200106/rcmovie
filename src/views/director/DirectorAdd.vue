<template>
  <div>
    <!--面包屑导航-->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>导演管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增导演</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="导演姓名">
        <el-input v-model="form.directorName"></el-input>
      </el-form-item>
      <el-form-item label="导演头像">
        <el-upload
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess"
            :show-file-list="false"
            action="http://localhost:9000/upload"
            class="avatar-uploader">
          <el-image v-if="form.directorAvatar" :src="form.directorAvatar" class="avatar" fit="cover"/>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即新增</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {  //绑定表单数据
        directorName: '',
        directorAvatar: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$http.DirectorApi.add(this.form).then(res => {
        if (res.data.code === 200) {
          this.$message.success('添加成功')
          this.$router.push('/home/director-list')
        }
      })
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      if (res.code === 200) {
        this.form.directorAvatar = res.data
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error("上传头像只能是 JPG 格式")
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片不能超过2MB")
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 300px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .avatar-uploader-icon:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

</style>