<template>
  <div class="admin-post">
    <el-button size="small" @click="handleAddPost" class="add-post" type="primary">新 增 文 章</el-button>
    <el-table size="small" :data="posts" border :header-cell-style="tableHeaderCellStyle" :cell-style="tableCellStyle">
      <el-table-column v-for="(col,index) in columns" :key="index" :prop="col.prop"
                       :label="col.label" :width="col.width"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleEditPost(scope.row)">编辑</el-button>
          <el-button type="text" size="mini" @click="handleDeletePost(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small background layout="prev, pager, next" :total="total" :page-count="10"
                   :page-sizes="query.pageSize" :page-size="query.limit"
                   :current-page.sync="query.page"></el-pagination>
    <admin-post-dialog v-if="dialogVisible" :visible.sync="dialogVisible" :post="post" :title="dialogTitle"
                       :operation="dialogOper"></admin-post-dialog>
  </div>
</template>

<script>
  import adminPostDialog from '@/views/admin/components/dialog/adminPostDialog'
  import { mapGetters } from 'vuex'

  export default {
    name: 'adminPost',
    components: {
      adminPostDialog
    },
    data() {
      return {
        dialogVisible: false,
        dialogOper: 0,
        dialogTitle: '',
        post: {
          id: 1,
          created_at: '2020-08-19 15:00:00',
          title: 'vue 基础知识 01',
          author: {
            id: 1,
            name: 'ghjacky',
            username: 'ghjacky'
          },
          content: '文章内容',
          summary: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n' +
            '\n' +
            '如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。' +
            '\n' +
            '官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。',
          cover: '',
          category: {
            id: 1,
            name: 'vue'
          },
          tags: [
            { id: 1, name: 'vue' },
            { id: 2, name: '前端' }
          ]
        },
        total: 1,
        query: {
          page: 1,
          pageSize: [10, 20, 30],
          limit: 10
        },
        columns: [
          { label: 'id', prop: 'id', width: '50px' },
          { label: '标题', prop: 'title', width: '' },
          { label: '作者', prop: 'author.username', width: '100px' },
          { label: '创建时间', prop: 'created_at', width: '150px' }
        ],
        posts: [
          {
            id: 1,
            created_at: '2020-08-19 15:00:00',
            title: 'vue 基础知识 01',
            author: {
              id: 1,
              name: 'ghjacky',
              username: 'ghjacky'
            },
            content: '文章内容',
            summary: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n' +
              '\n' +
              '如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。' +
              '\n' +
              '官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。',
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
    },
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },
    watch: {
      dialogVisible: function () {
        if (!this.dialogVisible) {
          this.fetchPosts()
        }
      }
    },
    created() {
      this.resetPost()
      this.fetchPosts()
    },
    methods: {
      fetchPosts() {

      },
      resetPost() {
        this.post = Object.assign({}, {
          title: '',
          author: this.currentUser.username,
          category: {
            name: ''
          },
          tags: '',
          content: ''
        })
      },
      handleAddPost() {
        this.resetPost()
        this.dialogOper = 0
        this.dialogTitle = '新增文章'
        this.dialogVisible = true
      },
      handleEditPost() {

      },
      handleDeletePost() {

      },
      tableCellStyle() {
        return 'text-align: center; vertical-align: middle'
      },
      tableHeaderCellStyle() {
        return 'padding: 0; text-align: center; vertical-align: middle; background-color: gray; color: white'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/admin/admin-post.scss";
</style>
