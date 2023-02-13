<template>
  <v-app>
    <partials-mobile-navigation-drawer :links="links" />

    <section
      style="min-height: 100vh"
      class="d-flex flex-column overflow-y-hidden"
    >
      <partials-navigation-bar :links="links" />
      <nuxt class="flex-grow-1 overflow-y-auto" />
    </section>

    <partials-notification-toast />
    <misc-go-twofa />
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('auth')
export default {
  data() {
    return {
      userSessionRunning: false,
    }
  },
  async fetch() {
    const URL = this.isAdminAuth ? `/viewProfile` : '/viewProfile'
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL)
      .then((res) => {
        this.UPDATE_USER_PROFILE(res.user).then(() => {
          this.userSessionRunning = true
        })
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Session Expired. Please log in',
        })
        this.$router.replace(this.prependAdminRoute + '/account/login')
      })
  },
  computed: {
    ...mapGetters(['isAdminAuth']),
    links() {
      return [
        {
          title: 'Programs',
          icon: 'mdi-briefcase',
          slug: this.prependAdminRoute + '/program/',
        },
        {
          title: 'Submissions',
          icon: 'mdi-bookshelf',
          slug: this.prependAdminRoute + '/submissions/',
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          slug: this.prependAdminRoute + '/account/settings/',
        },
      ]
    },
  },
  methods: {
    ...mapActions(['UPDATE_USER_PROFILE']),
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
