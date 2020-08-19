<template>
  <div class="widget">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Widget',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/widget.scss";
</style>
