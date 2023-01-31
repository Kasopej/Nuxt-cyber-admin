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
import BaseLayout from './base.vue'
export default {
  name: 'Dashboard',
  extends: BaseLayout,
  computed: {
    links() {
      return [
        {
          title: 'Programs',
          icon: 'mdi-briefcase',
          slug: this.prependAdminRoute + '/',
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
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute !important;
  width: 100%;
}
</style>
