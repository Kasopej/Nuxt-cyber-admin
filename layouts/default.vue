<template>
  <v-app dark>
    <partials-navigation-bar />

    <div
      class="primary py-16"
      style="background: linear-gradient(to right, #c504da, #6921b6)"
    >
      <div class="py-16 text-center white--text display-1 font-weight-bold">
        PROGRAMS
      </div>
    </div>

    <v-main>
      <v-container>
        <nuxt class="white mt-n16 rounded-lg" />
      </v-container>
    </v-main>

    <footer class="grey-text text-lighten-3 text-center my-4">
      Copyright &copy; {{ new Date().getFullYear() }} —
      <a
        href="https://www.teklabspace.com/"
        class="font-weight-medium text-decoration-none"
        >TekLabSpace</a
      >
    </footer>
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
