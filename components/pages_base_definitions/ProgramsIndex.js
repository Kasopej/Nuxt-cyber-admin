import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('program')
export default {
  data() {
    return {
      programs: [],

      programTypes: {
        compliance: 'Premuim Pen Test',
        VDP: 'Vulnerability Disclosure Program',
        'Bug Bounty': 'Bug Bounty Program',
      },
    }
  },

  async fetch() {
    const URL = `/load-programs`
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL)
      .then((res) => {
        this.programs = [...res.data]
        this.$store.commit(
          'program/UPDATE_PROGRAMS_COUNT',
          this.programs.length
        )
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Something occured. Please try again',
        })
      })
  },
  computed: {
    ...mapGetters({ programsCount: 'getProgramsCount' }),
    themeBinding() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
}
