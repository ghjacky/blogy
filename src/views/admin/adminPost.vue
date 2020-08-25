<template>
  <div class="admin-post">
    <el-button size="small" @click="handleAddPost" class="add-post" type="primary">新 增 文 章</el-button>
    <el-table size="small" :data="posts" border :header-cell-style="tableHeaderCellStyle" :cell-style="tableCellStyle">
      <el-table-column v-for="(col,index) in columns" :key="index" :prop="col.prop"
                       :label="col.label" :width="col.width"></el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleViewPost(scope.row)">查看</el-button>
          <el-button type="text" size="mini" @click="handleEditPost(scope.row)">编辑</el-button>
          <el-button type="text" size="mini" @click="handleDeletePost(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small background layout="prev, pager, next" :total="total" :page-count="10"
                   :page-sizes="query.pageSize" :page-size="query.limit"
                   :current-page.sync="query.page" @current-change="fetchPosts"></el-pagination>
    <admin-post-dialog v-if="dialogVisible" :visible.sync="dialogVisible" :post="post" :title="dialogTitle"
                       :operation="dialogOper"></admin-post-dialog>
  </div>
</template>

<script>
  import adminPostDialog from '@/views/admin/components/dialog/adminPostDialog'
  import { fetchPosts, deletePost, getPost } from '@/api/post'
  import moment from 'moment'
  import { join } from 'lodash'

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
        post: {},
        total: 1,
        query: {
          field: '',
          text: '',
          page: 1,
          pageSize: [10, 20, 30],
          limit: 10,
          order: '-created_at'
        },
        columns: [
          { label: 'id', prop: 'id', width: '50px' },
          { label: '标题', prop: 'title', width: '' },
          { label: '作者', prop: 'author', width: '100px' },
          { label: '创建时间', prop: 'created_at', width: '150px' }
        ],
        posts: []
      }
    },
    watch: {
      dialogVisible: function () {
        if (!this.dialogVisible) {
          this.resetQuery()
          this.fetchPosts()
        }
      }
    },
    created() {
      this.resetPost()
      this.resetQuery()
      this.fetchPosts()
    },
    methods: {
      fetchPosts() {
        fetchPosts(this.query).then(res => {
          this.posts = res.data.data.map(item => {
            return {
              id: item.id,
              created_at: moment(item.created_at).format('YYYY-MM-DD'),
              author: item.author,
              title: item.title
            }
          })
        })
      },
      resetQuery() {
        this.query = Object.assign({}, {
          field: '',
          text: '',
          page: 1,
          pageSize: [10, 20, 30],
          limit: 10,
          order: '-created_at'
        })
      },
      resetPost() {
        this.post = Object.assign({}, {
          title: '',
          author: localStorage.getItem('currentUser'),
          category: '',
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
      handleViewPost(post) {
        this.$router.push(`/blog/post/${post.id}`)
      },
      handleEditPost(post) {
        getPost(post.id).then(res => {
          this.post = res.data.data
          const tags = res.data.data.tags
          this.post.tags = join(tags.map(item => {
            return item.name
          }), ',')
        })
        this.dialogOper = 1
        this.dialogTitle = '编辑文章'
        this.dialogVisible = true
      },
      handleDeletePost(post) {
        this.$confirm('确定删除更改文章？', '提示', {
          confirmButtonText: '删除',
          cancelButtonText: '取消'
        }).then(() => {
          deletePost(post.id).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功',
              showClose: true,
              duration: 2000
            })
          }).catch(() => {
          })
        })
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
