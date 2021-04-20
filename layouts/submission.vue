<template>
  <v-app>
    <div class="d-flex w-full" style="max-height: 100vh">
      <partials-navigation-drawer-submission
        v-if="!$vuetify.breakpoint.mobile"
      />

      <section
        style="height: 100vh"
        class="flex-grow-1 d-flex flex-column overflow-y-hidden"
      >
        <partials-navigation-bar submission />

        <main class="flex-grow-1 overflow-y-auto">
          <partials-navigation-drawer-submission
            v-if="$vuetify.breakpoint.mobile && !$route.hash"
          />

          <nuxt v-else class="pa-4" />
        </main>
      </section>
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
