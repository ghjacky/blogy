<template>
  <div class="admin-layout">
    <admin-sidebar></admin-sidebar>
    <div class="admin-content">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
  import AdminSidebar from '@/components/admin/layout/AdminSidebar'
  export default {
    name: 'Layout',
    components: { AdminSidebar }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/admin/admin-layout.scss";
</style>
