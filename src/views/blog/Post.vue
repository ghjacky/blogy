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
        <vue-markdown :key="post.id">{{ post.content }}</vue-markdown>
      </div>
    </div>
  </content-layout>
</template>

<script>
  import ContentLayout from '@/views/blog/components/ContentLayout'
  import VueMarkdown from 'vue-markdown'
  import Prism from 'prismjs/prism'
  import 'prismjs/themes/prism-tomorrow.css'
  import 'prismjs/components'
  import 'prismjs/components/prism-go.min'
  import 'prismjs/components/prism-python.min'
  import 'prismjs/components/prism-markdown.min'
  import 'prismjs/components/prism-markup.min'
  import 'prismjs/components/prism-json.min'
  import 'prismjs/components/prism-sql.min'
  import 'prismjs/components/prism-css.min'
  import 'prismjs/components/prism-scss.min'
  import 'prismjs/components/prism-bash.min'
  import 'prismjs/components/prism-javascript.min'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.min'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import { getPost } from '@/api/post'
  import moment from 'moment'

  export default {
    name: 'Post',
    components: { ContentLayout, VueMarkdown },
    data() {
      return {
        post: {}
      }
    },
    updated() {
      this.$nextTick(() => {
        document.getElementsByTagName('pre').forEach(item => {
          item.classList.add('line-numbers')
        })
        Prism.highlightAll(false, () => {
        })
      })
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
          this.post = Object.assign(res.data.data, { created_at: moment(res.data.data.created_at).format('YYYY-MM-DD') })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/content/post.scss";
</style>
