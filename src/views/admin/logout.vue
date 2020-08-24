<template>
  <div></div>
</template>

<script>
  import { deleteAuthCookie } from '@/utils/cookie'
  import { logout } from '@/api/user'

  export default {
    name: 'logout',
    created() {
      deleteAuthCookie()
      logout({ username: localStorage.getItem('currentUser') })
      localStorage.removeItem('currentUser')
      window.location.href = '/'
    }
  }
</script>

<style scoped>

</style>
