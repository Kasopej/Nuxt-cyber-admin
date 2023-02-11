// import Vue from 'vue'
// import globalMixin from '~/mixins/global'

// // Make sure to pick a unique name for the flag
// // so it won't conflict with any other mixin.
// if (!Vue.__my_mixin__) {
//   Vue.__my_mixin__ = true
//   Vue.mixin(globalMixin) // Set up your mixin then
// }

export const paginationMixin = {
  data() {
    return {
      pagination: { page: 1, length: 1 },
    }
  },
}

export const needsProgramDataOnLoad = {
  async fetch() {
    const uri = `/get-program/${
      this.$route.params.programId ?? this.submission.programId
    }`

    await this.getHTTPClient()
      .$get(uri, {})
      .then((res) => {
        this.program = res.data
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Oops! programme not found',
        })
      })
  },
  data() {
    return {
      program: null,
    }
  },
}
