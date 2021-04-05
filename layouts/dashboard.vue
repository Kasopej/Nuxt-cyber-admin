<template>
  <v-app dark>
    <partials-navigation-bar show-logo />
    <partials-header />

    <v-main>
      <v-container>
        <nuxt class="white mt-n16 rounded-lg" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss">
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';
</style>
