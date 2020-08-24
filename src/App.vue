<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    watch: {
      '$route' (to) {
        document.title = to.meta.title || '鬼武者'
      }
    }
  }
</script>
<style lang="scss">
  @import "~@/style/app.scss";
</style>
