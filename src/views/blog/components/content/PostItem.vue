<template>
  <div class="post-item">
    <div class="title">{{ post.title }}</div>
    <div class="summary">{{ post.summary }}</div>
    <div class="stuff">
      <el-tag type="info" size="mini">作者：{{ post.author.username }}</el-tag>
      <el-tag type="info" size="mini">{{ post.created_at }}</el-tag>
      <template v-for="(tag,index) in post.tags">
        <el-tag :key="index" type="info" size="mini" class="tag">{{ tag.name }}</el-tag>
      </template>
    </div>
  </div>
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

<style scoped lang="scss">
  @import "~@/style/blog/content/post-item.scss";
</style>
