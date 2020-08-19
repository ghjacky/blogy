<template>
  <content-layout class="latest">
    <template slot="content">
      <div class="content"></div>
    </template>
  </content-layout>
</template>

<script>
  import ContentLayout from '@/views/blog/components/ContentLayout'

  export default {
    name: 'Latest',
    components: { ContentLayout },
    component: {
      ContentLayout
    }
  }
</script>

<style scoped>

</style>
