import Vue from 'vue'

Vue.mixin({
  methods: {
    getHTTPClient() {
      if (this.$store.getters['auth/isAdminAuth']) return this.$adminApi
      else return this.$axios
    },
  },
})
