<template>
  <v-app>
    <partials-mobile-navigation-drawer />
    <v-main>
      <partials-navigation-bar />
      <nuxt />
    </v-main>
    <partials-notification-toast />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
