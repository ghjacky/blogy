<template>
  <div class="login">
    <el-form label-position="left" label-width="80px" size="medium">
      <el-form-item label="Username: ">
        <el-input size="mini" v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="Password: ">
        <el-input size="mini" v-model="user.password" type="password" @keypress.native="handleLogin"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="small" @click="handleLogin">登 陆</el-button>
  </div>
</template>

<script>
  import { auth } from '@/api/user'
  import { deleteAuthCookie } from '@/utils/cookie'

  export default {
    name: 'login',
    data() {
      return {
        user: {}
      }
    },
    methods: {
      handleLogin() {
        deleteAuthCookie()
        auth(this.user).then(() => {
          localStorage.setItem('currentUser', this.user.username)
          this.$router.push('/admin')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/admin/login.scss";
</style>
