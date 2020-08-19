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
      this.menu = BlogRouter.children
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    height: 100%;

    .el-menu {
      background-color: #2c3e50;
      width: fit-content;
      border: none;
      margin: 0 auto;

      .el-menu-item {
        color: #e6e6e7;
      }

      .el-menu-item:hover, .el-menu-item:focus {
        background-color: #545c6d;
        color: white;
      }
    }
  }
</style>
