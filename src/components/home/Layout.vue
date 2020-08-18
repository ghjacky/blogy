<template>
  <div id="home">
    <div class="header">
      <navigation></navigation>
    </div>
    <div class="content">
      <router-view :key="$route.path"></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import navigation from '@/components/home/navigation'
  export default {
    name: 'Layout',
    components: {
      navigation
    },
    methods: {
      hasChild(item) {
        return item !== undefined && item.children !== undefined && item.children.length > 0
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/home/layout.scss";
</style>
