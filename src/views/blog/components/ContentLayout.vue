<template>
  <div id="content-layout">
    <slot name="content" class="content"></slot>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import Sidebar from '@/views/blog/components/Sidebar'

  export default {
    name: 'ContentLayout',
    components: { Sidebar }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content-layout.scss";
</style>
