<template>
  <div class="admin-category">
    <el-form size="small" label-suffix="：" label-position="left" label-width="100px" inline>
      <el-form-item label="分类名称">
        <el-input v-model="category.name"></el-input>
      </el-form-item>
      <el-form-item label="父节点">
        <el-select v-model="category.parent">
          <el-option v-for="(cat,index) in categories" :key="index" :label="cat.name" :value="cat.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="handleAddCategory">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table size="small" border :data="categories" :header-cell-style="tableHeaderCellStyle"
              :cell-style="tableCellStyle">
      <el-table-column v-for="(col,index) in columns" :key="index" :label="col.label" :prop="col.prop"
                       :width="col.width"></el-table-column>
      <el-table-column label="操作" width="100px">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleDeleteCategory(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { fetchCategories, addCategory } from '@/api/category'

  export default {
    name: 'adminCategory',
    data() {
      return {
        columns: [
          { label: 'id', prop: 'id', width: '50px' },
          { label: '名称', prop: 'name', width: '' },
          { label: '父类', prop: 'parent', width: '60px'},
          { label: '创建时间', prop: 'created_at', width: '150px' }
        ],
        categories: [
        ],
        category: {
        }
      }
    },
    created() {
      this.fetchCategories()
    },
    methods: {
      fetchCategories() {
        fetchCategories(0).then(res => {
          this.categories = res.data.data
        })
      },
      handleAddCategory() {
        addCategory(this.category).then(() => {
          this.$message({
            type: 'success',
            message: '分类添加成功',
            showClose: true,
            duration: 2000
          })
          this.fetchCategories()
        })
      },
      handleDeleteCategory() {

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
  @import "~@/style/admin/admin-category.scss";
</style>
