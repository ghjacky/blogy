<template>
  <widget class="tag" title="标签">
    <el-tag type="info" v-for="(tag,index) in tags" :key="index" @click="handleClick">{{ tag.name }}</el-tag>
  </widget>
</template>

<script>
  import Widget from '@/views/blog/components/Widget'

  export default {
    name: 'tag',
    components: { Widget },
    data() {
      return {
        tags: [
          {
            id: 1,
            name: '前端'
          },
          {
            id: 2,
            name: 'vue'
          },
          {
            id: 3,
            name: '后端'
          },
          {
            id: 4,
            name: 'golang'
          }
        ]
      }
    },
    methods: {
      handleClick() {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/blog/tag.scss";
</style>
