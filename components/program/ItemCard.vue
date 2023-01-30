<script>
export default {
  props: {
    program: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      reveal: false,
    }
  },

  computed: {
    visibilityIcon() {
      return this.program.private ? 'mdi-eye-off' : 'mdi-eye'
    },
    briefDescription() {
      return (
        this.program.description.slice(0, 400) +
        `${this.program.description.length > 400 ? '...' : ''}`
      )
    },
    allowCollaborationsIcon() {
      return this.program.allowCollaborations
        ? 'mdi-account-group'
        : 'mdi-account'
    },
  },

  methods: {
    openDetails(program) {
      this.$store.commit('program/SAVE_DATA', program)
      this.$router.push(`/program/${program._id}/submissions`)
    },

    goEdit(program) {
      this.$store.commit('program/SAVE_DATA', program)
      this.$router.push(`/program/${program._id}/edit`)
    },
    displayReward(rawReward) {
      if (isNaN(+rawReward)) return rawReward
      return `$${rawReward} per vulnerability`
    },
  },
}
</script>
