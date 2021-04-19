<template>
  <v-app>
    <div class="d-flex w-100" style="max-height: 100vh">
      <partials-navigation-drawer-submission />

      <main
        style="height: 100vh"
        class="flex-grow-1 d-flex flex-column overflow-y-hidden"
      >
        <partials-navigation-bar submission />
        <nuxt class="flex-grow-1 overflow-y-auto pa-4" />
      </main>
    </div>

    <partials-notification-toast />
    <partials-mobile-navigation-drawer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
