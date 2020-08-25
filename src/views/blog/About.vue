<template>
  <div id="about">
    <div class="content">{{ aboutMe }}</div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        aboutMe: 'Hello World'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/about.scss";
</style>
