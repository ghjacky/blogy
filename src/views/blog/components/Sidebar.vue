<template>
  <div class="sidebar">
    <category></category>
    <tag></tag>
  </div>
</template>

<script>
  import Category from '@/views/blog/components/Category'
  import Tag from '@/views/blog/components/Tag'

  export default {
    name: 'Sidebar',
    components: { Category, Tag }
  }
</script>

<style scoped>

</style>
