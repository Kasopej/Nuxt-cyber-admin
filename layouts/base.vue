<template>
  <v-app>
    <partials-mobile-navigation-drawer />
    <v-main>
      <partials-navigation-bar />
      <nuxt />
    </v-main>
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
