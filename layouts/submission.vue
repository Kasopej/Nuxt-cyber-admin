<template>
  <v-app>
    <div class="d-flex w-100" style="max-height: 100vh">
      <partials-navigation-drawer-submission />

      <main class="flex-grow-1 overflow-y-auto">
        <partials-navigation-bar submission />
        <nuxt class="pa-4" />
      </main>
    </div>
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
