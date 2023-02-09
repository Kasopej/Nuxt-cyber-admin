export default {
  mounted() {
    this.$emit('mount-invite-tab', this.$options.name)
  },
}
