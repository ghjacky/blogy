<template>
  <div class="nav">
    <el-menu mode="horizontal">
      <el-menu-item v-for="(item,index) in menu" :key="index" :index="item.path" :route="item.name">
        {{ item.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { HomeRouter } from '@/router/home'

  export default {
    name: 'navigation',
    data() {
      return {
        menu: [
          {
            path: '/',
            name: '/'
          }
        ]
      }
    },
    created() {
      this.menu = HomeRouter.children
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
      .el-menu-item:hover {
        background-color: #6f798d;
      }
    }
  }
</style>
