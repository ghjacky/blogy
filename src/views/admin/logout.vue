<template>
  <div></div>
</template>

<script>
  import { deleteAuthCookie } from '@/utils/cookie'
  import { logout } from '@/api/user'
  import { mapGetters } from 'vuex'
  import store from '@/store'

  export default {
    name: 'logout',
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },
    created() {
      deleteAuthCookie()
      logout(this.currentUser)
      store.dispatch('user/delUser')
      window.location.href = '/'
    }
  }
</script>

<style scoped>

</style>
