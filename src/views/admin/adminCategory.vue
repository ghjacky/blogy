<template>
  <div class="admin-category">
    <el-form size="small" label-suffix="：" label-position="left" label-width="80px" inline>
      <el-form-item label="分类名称">
        <el-input v-model="category.name"></el-input>
      </el-form-item>
      <el-form-item label="父节点">
        <el-select v-model="category.parent">
          <el-option v-for="(cat,index) in categories" :key="index" :label="cat.name" :value="cat.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary">新增</el-button>
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
  export default {
    name: 'adminCategory',
    data() {
      return {
        columns: [
          { label: 'id', prop: 'id', width: '50px' },
          { label: '名称', prop: 'name', width: '150px' },
          { label: '创建时间', prop: 'created_at', width: '150px' }
        ],
        categories: [
          {
            id: 1,
            name: '前端'
          }
        ],
        category: {
          id: 0,
          name: ''
        }
      }
    },
    methods: {
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

<style scoped>

</style>
