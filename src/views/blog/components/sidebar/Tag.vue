<template>
  <widget class="tag" title="标签">
    <el-tag type="info" v-for="(tag,index) in tags" :key="index" @click="handleClick(tag)">{{ tag.name }}</el-tag>
  </widget>
</template>

<script>
  import Widget from '@/views/blog/components/sidebar/Widget'
  import { fetchTags } from '@/api/tag'

  export default {
    name: 'tag',
    components: { Widget },
    data() {
      return {
        tags: [],
        tag: {
          id: 0,
          name: ''
        }
      }
    },
    created() {
      this.fetchTags()
    },
    methods: {
      fetchTags(){
        fetchTags().then(res => {
          this.tags = res.data.data
        })
      },
      handleClick(tag) {
        if (tag.name !== this.tag.name) {
          this.$router.push(`/blog/posts?tag=${tag.name}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/sidebar/tag.scss";
</style>
