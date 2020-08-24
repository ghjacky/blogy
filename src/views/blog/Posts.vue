<template>
  <content-layout>
    <div class="posts" slot="content">
      <div class="page-title">{{ }}</div>
      <template v-for="(post,index) in posts">
        <post-item :key="index" :post="post"></post-item>
        <el-divider :key="`d-${index}`"></el-divider>
      </template>
    </div>
  </content-layout>
</template>

<script>
  import ContentLayout from '@/views/blog/components/ContentLayout'
  import PostItem from '@/views/blog/components/content/PostItem'
  import { getCategory } from '@/api/category'
  import { getTag } from '@/api/tag'

  export default {
    name: 'Posts',
    components: { PostItem, ContentLayout },
    data() {
      return {
        posts: []
      }
    },
    watch: {
      '$route.query.cat': function () {
        const catId = this.$route.query.cat
        if (catId !== undefined) {
          this.getPostsByCategory(catId)
        }
      },
      '$route.query.tag': function () {
        const tag = this.$route.query.tag
        if (tag !== undefined) {
          this.getHostsByTag(tag)
        }
      }
    },
    created() {
      const catId = this.$route.query.cat
      if (catId !== undefined) {
        this.getPostsByCategory(catId)
      } else {
        const tag = this.$route.query.tag
        if (tag !== undefined) {
          this.getHostsByTag(tag)
        }
      }
    },
    methods: {
      getHostsByTag(tag) {
        getTag(tag).then(res => {
          this.posts = res.data.data.posts
        })
      },
      getPostsByCategory(id) {
        getCategory(id).then(res => {
          this.posts = res.data.data.posts
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content/posts.scss";
</style>
