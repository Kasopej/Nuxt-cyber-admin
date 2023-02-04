import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('submission')
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['submissionSelected']),
  },
}
