<template>
  <widget class="category" title="分类">
    <el-tree :data="categories" :props="fieldMap" @node-click="handleClick"></el-tree>
  </widget>
</template>

<script>
  import Widget from '@/views/blog/components/sidebar/Widget'
  import { fetchCategories } from '@/api/category'

  export default {
    name: 'Category',
    components: { Widget },
    data() {
      return {
        categories: [],
        fieldMap: {
          label: 'name',
          children: 'children'
        },
        category: {
          id: 0,
          name: ''
        }
      }
    },
    created() {
      this.fetchCategories()
    },
    methods: {
      fetchCategories() {
        fetchCategories(1).then(res => {
          this.categories = res.data.data
        })
      },
      handleClick(category) {
        if (category.id !== this.category.id) {
          this.category = category
          this.$router.push(`/blog/posts?cat=${category.id}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/sidebar/category.scss";
</style>
