<template>
  <div id="home">
    <div class="header">
      <navigation></navigation>
    </div>
    <div class="hc-divider"></div>
    <div class="content">
      <router-view :key="$route.path"></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import Navigation from '@/components/blog/Navigation'

  export default {
    name: 'Layout',
    components: {
      Navigation
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/layout.scss";
</style>
