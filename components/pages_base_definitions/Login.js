export default {
  layout: 'account',
  middleware: 'guest',
  created() {
    this.$store.commit('misc/TOGGLE_TWOFA_MODAL', false)
  },
}
