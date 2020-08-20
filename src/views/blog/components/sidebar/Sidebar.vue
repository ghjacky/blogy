<template>
  <div class="sidebar">
    <category></category>
    <tag></tag>
  </div>
</template>

<script>
  import Category from '@/views/blog/components/sidebar/Category'
  import Tag from '@/views/blog/components/sidebar/Tag'

  export default {
    name: 'Sidebar',
    components: { Category, Tag }
  }
</script>

<style scoped>

</style>
