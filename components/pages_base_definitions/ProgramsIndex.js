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
      pagination: {
        page: 1,
        length: 1,
      },
      pageLimit: 16,
      filterOptions: {
        visibility: {
          public: false,
          private: false,
        },
        type: {
          compliance: false,
        },
      },
      sortBy: null,
    }
  },

  async fetch() {
    const URL = `/load-programs`
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL, this.FORM)
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

  methods: {
    getPrograms() {
      this.$fetch()
    },
    clickSelect() {
      document.getElementById('v-select-sorting').click()
    },
    sortPrograms(val) {
      if (val === 'newest') {
        this.programs.sort((a, b) => {
          return (
            new Date(a.updatedAt).valueOf() - new Date(b.updatedAt).valueOf()
          )
        })
      } else if (val === 'oldest') {
        this.programs.sort((a, b) => {
          return (
            new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf()
          )
        })
      }
    },
  },
}
