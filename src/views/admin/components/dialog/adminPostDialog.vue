<template>
  <el-dialog fullscreen :visible="visible" :title="title" :before-close="handleCloseDialog"
             class="admin-post-dialog">
    <el-form :model="post" label-position="left" label-width="80px" label-suffix="：" size="small">
      <el-form-item label="标题">
        <el-input v-model="post.title"></el-input>
      </el-form-item>
      <el-form-item label="摘要">
        <el-input type="textarea" v-model="post.summary" :maxlength="300" :minlenght="50"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select value-key="name" filterable placeholder="请选择分类" v-model="post.category">
          <el-option v-for="(cat,index) in categories" :key="index" :label="cat.name" :value="cat.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="post.tags"></el-input>
      </el-form-item>
    </el-form>
    <vue-simplemde :highlight="true" preview-class="markdown-body" :configs="mde.configs"
                   v-model="post.content"></vue-simplemde>
    <div slot="footer">
      <el-button size="small" type="primary" @click="handleCommit">提交</el-button>
      <el-button size="small" type="primary" @click="handleCloseDialog">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { dialogMixins } from '@/views/admin/mixins/dialog'
  import { fetchCategories } from '@/api/category'
  import { addPost, updatePost } from '@/api/post'
  import VueSimplemde from 'vue-simplemde'
  import hljs from 'highlight.js'
  import _ from 'lodash'

  window.hljs = hljs
  export default {
    name: 'adminPostDialog',
    mixins: [dialogMixins],
    components: { VueSimplemde },
    props: {
      title: {
        type: String,
        default: ''
      },
      operation: {
        type: Number,
        default: 0
      },
      visible: {
        type: Boolean,
        default: false
      },
      post: {
        type: Object,
        default: () => {
          return {
            title: '',
            category: {
              id: 1,
              name: ''
            },
            tags: '',
            content: ''
          }
        }
      }
    },
    created() {
      this.fetchCategoriesList()
    },
    data() {
      return {
        categories: [
          {
            id: 1,
            name: ''
          }
        ],
        mde: {
          configs: {
            promptURLs: true,
            renderingConfig: {
              codeSyntaxHighlighting: true
            },
            spellChecker: false,
            toolbar: ['bold', 'italic', 'strikethrough', '|',
              'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|',
              'code', 'quote', '|',
              'unordered-list', 'ordered-list', '|',
              'horizontal-rule', '|',
              'link', 'image', 'table', '|',
              'preview', 'side-by-side', 'fullscreen', 'guide']
          }
        }
      }
    },
    methods: {
      fetchCategoriesList() {
        fetchCategories(0).then(res => {
          this.categories = res.data.data
        })
      },
      handleCommit() {
        if (this.operation === 0) {
          const p = Object.assign({}, this.post)
          p.tags = _.split(this.post.tags, ',').map(item => {
            return { name: item }
          })
          addPost(p).then(() => {
            this.$message({
              type: 'success',
              message: '文章添加成功',
              showClose: true,
              duration: 2000
            })
            this.handleCloseDialog()
          })
        } else if (this.operation === 1) {
          const p = Object.assign({}, this.post)
          p.tags = _.split(this.post.tags, ',').map(item => {
            return { name: item }
          })
          updatePost(p).then(() => {
            this.$message({
              type: 'success',
              message: '文章编辑成功',
              showClose: true,
              duration: 2000
            })
            this.handleCloseDialog()
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/admin/admin-post-dialog.scss";
  @import '~simplemde-theme-base/dist/simplemde-theme-base.min.css';
  @import '~github-markdown-css';
  @import '~highlight.js/styles/a11y-dark.css';
  /* Highlight theme list: https://github.com/isagalaev/highlight.js/tree/master/src/styles */

</style>
