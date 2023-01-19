import Vue from 'vue'

Vue.mixin({
  computed: {
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
