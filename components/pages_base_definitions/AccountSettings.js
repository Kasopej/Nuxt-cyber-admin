export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hash = vm.$route.hash
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.hash = to.hash
    next()
  },
  data() {
    return {
      settingsTab: null,
      hash: '',
    }
  },
  watch: {
    hash: {
      handler(val) {
        switch (val) {
          case '#general':
            this.settingsTab = 0
            break
          case '#researchers':
            this.settingsTab = 1
            break
          default:
            this.settingsTab = 0
            break
        }
      },
      immediate: true,
    },
  },
}
