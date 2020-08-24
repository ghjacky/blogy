<template>
  <content-layout>
    <div class="latest" slot="content">
      <template v-for="(post,index) in latestPosts">
        <post-item :key="index" :post="post"></post-item>
        <el-divider :key="`d-${index}`"></el-divider>
      </template>
    </div>
  </content-layout>
</template>

<script>
  import ContentLayout from '@/views/blog/components/ContentLayout'
  import PostItem from '@/views/blog/components/content/PostItem'
  import { fetchPosts } from '@/api/post'

  export default {
    name: 'Latest',
    components: { PostItem, ContentLayout },
    data() {
      return {
        query: {
          field: '',
          text: '',
          page: 1,
          pageSize: [10, 20, 30],
          limit: 100,
          order: '-created_at'
        },
        latestPosts: []
      }
    },
    created() {
      this.fetchLatest()
    },
    methods: {
      fetchLatest() {
        this.query.page = 1
        this.query.limit = 30
        this.query.order = '-created_at'
        fetchPosts(this.query).then(res => {
          this.latestPosts = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content/latest.scss";
</style>
