import { createNamespacedHelpers, mapGetters } from 'vuex'
const { mapGetters: mapProgramGetters } = createNamespacedHelpers('program')
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
    const URL = this.isAdminAuth ? `/getAllPrograms` : `/load-programs`
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL)
      .then((res) => {
        this.programs = [...(res.data ?? res.programs.docs)]
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
    ...mapProgramGetters({ programsCount: 'getProgramsCount' }),
    ...mapGetters('auth', ['isAdminAuth']),
    themeBinding() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
}
