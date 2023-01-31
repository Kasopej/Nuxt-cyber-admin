import Vue from 'vue'

Vue.mixin({
  computed: {
    mobileView() {
      return this.$vuetify.breakpoint.width < 960
    },
    prependAdminRoute() {
      if (this.$store.getters['auth/isAdminAuth']) return '/admin'
      else return ''
    },
  },
  methods: {
    getHTTPClient() {
      if (this.$store.getters['auth/isAdminAuth']) return this.$adminApi
      else return this.$axios
    },
  },
})
