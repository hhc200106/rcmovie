<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增电影</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="12">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" refs="form">
          <el-form-item label="电影封面" prop="cover">
            <el-upload
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess"
                :show-file-list="false"
                action="http://localhost:9000/upload"
                class="avatar-uploader">
              <el-image v-if="form.cover" :src="form.cover" class="avatar" fit="cover"/>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="电影类别" prop="categoryId">
            <el-radio-group v-model="form.categoryId">
              <el-radio :label="1">热映</el-radio>
              <el-radio :label="2">待映</el-radio>
              <el-radio :label="3">经典</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="电影名称" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="电影类别" prop="type">
            <el-select v-model="form.type" multiple placeholder="请选择电影类型">
              <el-option label="言情1" value="言情1"></el-option>
              <el-option label="言情2" value="言情2"></el-option>
              <el-option label="言情3" value="言情3"></el-option>
              <el-option label="言情4" value="言情4"></el-option>
              <el-option label="言情5" value="言情5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电影主演" prop="starActor">
            <el-input v-model="form.starActor"></el-input>
          </el-form-item>
          <el-form-item label="上映时间" prop="showingon">
            <el-col :span="11">
              <el-date-picker
                  v-model="form.showingon"
                  placeholder="选择日期"
                  style="width: 100%;"
                  type="date"
                  value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="电影评分" prop="score">
            <el-input v-model="form.score"></el-input>
          </el-form-item>
          <el-form-item label="电影时长" prop="duration">
            <el-input v-model="form.duration"></el-input>
          </el-form-item>
          <el-form-item label="电影简介" prop="description">
            <el-input v-model="form.description" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        cover: '',
        categoryId: 1,
        title: '',
        type: '',
        starActor: '',
        showingon: '',
        description: '',
        duration: '',
        score: '',
      },
      rules: {
        cover: [
          {required: true, message: '请选择封面图片', trigger: 'blur'}
        ],
        title: [
          {required: true, message: '请选填写标题', trigger: 'blur'}
        ],
        type: [
          {required: true, message: '请选择类型', trigger: 'blur'}
        ],
        starActor: [
          {required: true, message: '请填写主演', trigger: 'blur'}
        ],
        showingon: [
          {required: true, message: '请选择上映时间', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请填写电影评分', trigger: 'blur'}
        ],
        duration: [
          {required: true, message: '请选择封面图片', trigger: 'blur'}
        ],
        score: [
          {required: true, message: '请选择封面图片', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log("submit!", this.form)
          this.$http.MovieApi.add(this.form).then(res => {
            console.log(res)
            if (res.data.code === 200) {
              this.$message.success('添加成功')
              this.$router.push('/home/movie-list')
            }
          })
        } else {
          this.$message.warning('请完善表单')
        }
      })
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      if (res.code === 200) {
        this.form.cover = res.data
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
  width: 150px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}

.avatar {
  width: 150px;
  height: 200px;
  display: block;
}
</style>