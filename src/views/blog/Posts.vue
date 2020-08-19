<template>
  <div class="posts">
    <div class="post-item">
      <div class="title"></div>
      <div class="summary"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Posts',
    data() {
      return {
        posts: [
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

<style scoped>

</style>
