<template>
  <div id="content-layout">
    <div class="content-wrapper">
      <slot name="content"></slot>
    </div>
    <div class="sidebar-wrapper">
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/views/blog/components/sidebar/Sidebar'

  export default {
    name: 'ContentLayout',
    components: { Sidebar }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content-layout.scss";
</style>
