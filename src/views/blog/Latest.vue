<template>
  <content-layout class="latest">
    <div class="content" slot="content">
      <post-item v-for="(post,index) in latestPosts" :key="index" :post="post"></post-item>
    </div>
  </content-layout>
</template>

<script>
  import ContentLayout from '@/views/blog/components/ContentLayout'
  import PostItem from '@/views/blog/components/content/PostItem'

  export default {
    name: 'Latest',
    components: { PostItem, ContentLayout },
    data() {
      return {
        latestPosts: [
          {
            id: 1,
            created_at: '2020-08-19 15:00:00',
            title: 'vue 基础知识 01',
            content: '',
            summary: '',
            cover: '',
            category: {
              id: 1,
              name: 'vue'
            },
            tags: [
              { id: 1, name: 'vue' },
              { id: 2, name: '前端' }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/sidebar/latest.scss";
</style>
