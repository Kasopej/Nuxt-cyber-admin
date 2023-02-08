export default {
  layout: 'dashboard',
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
      tab: 0,
      hash: '',
    }
  },
}
