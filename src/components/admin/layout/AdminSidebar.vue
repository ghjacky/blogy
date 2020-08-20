<template>
  <div class="admin-sidebar">
    <el-menu router>
      <el-menu-item v-for="(menu,index) in menus" :key="index" :index="menu.name" :route="menu.name">
        {{ menu.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { AdminRouter } from '@/router/admin'

  export default {
    name: 'AdminSidebar',
    data() {
      return {
        menus: [
        ]
      }
    },
    created() {
      this.menus = AdminRouter.children.filter((item) => {
        return item.meta !== undefined && item.meta.title !== undefined && item.meta.title.length !== 0
      })
      // eslint-disable-next-line no-debugger
      debugger
    }
  }
</script>

<style scoped>

</style>
