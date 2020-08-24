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
        aboutMe: 'All things can be fixed just by a hello world -- ghjacky'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/about.scss";
</style>
