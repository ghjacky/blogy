<template>
  <div class="nav">
    <el-menu mode="horizontal" :router="true">
      <el-menu-item v-for="(item,index) in menu" :key="index" :index="item.name" :route="item.name">
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { BlogRouter } from '@/router/blog'

  export default {
    data() {
      return {
        menu: [
          {
            path: '/home',
            name: '/home'
          }
        ]
      }
    },
    created() {
      this.menu = BlogRouter.children.filter(item => {
        return item.meta !== undefined && item.meta.title !== undefined && item.meta.title.length > 0
      })
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/navigation.scss";
</style>
