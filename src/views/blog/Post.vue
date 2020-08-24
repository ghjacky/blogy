<template>
  <content-layout>
    <div class="post" slot="content">
      <div class="title">{{ post.title }}</div>
      <div class="stuff">
        <span>作者：{{ post.author }}</span>
        <span>时间：{{ post.created_at }}</span>
        <template v-for="(tag,index) in post.tags">
          <span :key="index">{{ tag.name }}</span>
        </template>
      </div>
      <div class="content">
        <vue-markdown-plus :key="post.id">{{ post.content }}</vue-markdown-plus>
      </div>
    </div>
  </content-layout>
</template>

<script>
  import VueMarkdownPlus from 'vue-markdown-plus'
  import ContentLayout from '@/views/blog/components/ContentLayout'
  import { getPost } from '@/api/post'

  export default {
    name: 'Post',
    components: { ContentLayout, VueMarkdownPlus },
    data() {
      return {
        post: {}
      }
    },
    created() {
      const id = this.$route.params.id
      if (id !== undefined) {
        this._getPost(id)
      }
    },
    methods: {
      _getPost(id) {
        getPost(id).then(res => {
          this.post = res.data.data
          // this.post = Object.assign(res.data.data, { created_at: moment(res.data.data.created_at).format('YYYY-MM-DD') })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content/post.scss";
</style>
