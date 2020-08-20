<template>
  <div class="login">
    <el-form label-position="left" label-width="80px" size="medium">
      <el-form-item label="Username: ">
        <el-input size="mini"></el-input>
      </el-form-item>
      <el-form-item label="Password: ">
        <el-input size="mini"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="small">登 陆</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped lang="scss">
  @import "~@/style/admin/login.scss";
</style>
