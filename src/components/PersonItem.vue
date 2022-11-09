<template>
  <div class="actor-item">
    <el-avatar :size="70" :src="avatar" fit="cover" shape="square"></el-avatar>
    <div>{{ name }}</div>
    <i class="el-icon-error" @click="deleteActor()"></i>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'avatar'],
  methods: {
    deleteActor() {
      this.axios.post('/movie-actor/del', `id=${this.id}`).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.$message.success('删除成功')
          this.$emit('deleteSuccess')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.actor-item {
  display: inline-block;
  margin: 20px 20px 0 0;
  text-align: center;
  position: relative;

  i {
    position: absolute;
    font-size: 1.2em;
    top: 0px;
    right: 0px;
    display: none;
  }

  &:hover {
    i {
      display: block;
    }
  }

  .el-avatar {
    ::v-deep img {
      width: 100%;
    }
  }

  div {
    font-size: 0.9em;
  }
}
</style>