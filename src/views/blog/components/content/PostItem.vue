<template>
  <div class="post-item"></div>
</template>

<script>
  export default {
    name: 'PostItem',
    props: {
      post: Object,
      default: () => {
        return {}
      }
    }
  }
</script>

<style scoped>

</style>
