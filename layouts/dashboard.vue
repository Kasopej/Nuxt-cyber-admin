<template>
  <v-app>
    <partials-mobile-navigation-drawer />

    <section style="height: 100vh" class="d-flex flex-column overflow-y-hidden">
      <partials-navigation-bar />
      <nuxt class="flex-grow-1 overflow-y-auto" />
      <misc-go-twofa />
    </section>

    <partials-notification-toast />
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
