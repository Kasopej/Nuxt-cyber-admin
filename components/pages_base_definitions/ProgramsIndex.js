export default {
  layout: 'dashboard',
  middleware: 'auth',

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
        this.programs = [
          ...res.data,
          // ...res.data.map((program) => {
          //   const programClone = { ...program }
          //   programClone._id += 'abc'
          //   return programClone
          // }),
        ]
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
}
