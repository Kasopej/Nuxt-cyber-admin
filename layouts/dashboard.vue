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
const { mapMutations } = createNamespacedHelpers('program')
export default {
  data() {
    return {}
  },
  computed: {
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
          slug: this.prependAdminRoute + '/submission/',
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          slug: this.prependAdminRoute + '/account/settings/',
        },
      ]
    },
  },
  mounted() {
    this.loadPrograms()
  },
  methods: {
    ...mapMutations(['SAVE_DATA']),
    async loadPrograms() {
      const URL = `/load-programs`
      // Make upload request to the API
      await this.getHTTPClient()
        .$get(URL)
        .then((res) => {
          this.SAVE_DATA(res.data)
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
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
