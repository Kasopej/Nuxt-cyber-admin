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
      settingsTab: 0,
      hash: '',
    }
  },
}
