<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: #efefef;
  width: 6px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 3px;
  width: 6px;
}
</style>