<template>
  <v-navigation-drawer v-model="drawer" style="z-index: 9999" absolute>
    <nuxt-link
      to="/"
      class="d-flex align-center grey lighten-3 px-4 px-lg-16 py-4"
    >
      <v-img src="/images/logo-app-bar.png" />
    </nuxt-link>

    <div class="subtitle-1">
      <nav class="px-4 py-2">
        <nuxt-link to="/">Programs</nuxt-link>
      </nav>
      <v-divider />
      <nav class="px-4 py-2">
        <nuxt-link to="/submission/">Submissions</nuxt-link>
      </nav>
      <v-divider />
      <nav class="px-4 py-2">
        <nuxt-link to="/profile/">Profile</nuxt-link>
      </nav>
      <v-divider />
      <nav class="px-4 py-2">
        <nuxt-link to="/logout/" class="accent--text"
          ><v-icon class="mr-4" color="accent">mdi-logout</v-icon>
          Logout</nuxt-link
        >
      </nav>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.navigationDrawer.status
      },
      set(v) {
        return v || this.$store.commit('navigationDrawer/TOGGLE_STATE')
      },
    },
  },
}
</script>
