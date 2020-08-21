export const dialogMixins = {
  methods: {
    handleCloseDialog() {
      this.$emit('update:visible', false)
    }
  }
}
