<template>
  <widget class="category" title="分类">
    <el-tree :data="cats" :props="fieldMap" @node-click="handleClick" highlight-current></el-tree>
  </widget>
</template>

<script>
  import Widget from '@/views/blog/components/sidebar/Widget'

  export default {
    name: 'Category',
    components: { Widget },
    data() {
      return {
        cats: [
          {
            id: 1,
            name: '前端',
            parent: 0,
            children: [
              {
                id: 2,
                name: 'vue',
                parent: 1
              }
            ]
          }
        ],
        fieldMap: {
          label: 'name',
          children: 'children'
        }
      }
    },
    methods: {
      handleClick() {
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
