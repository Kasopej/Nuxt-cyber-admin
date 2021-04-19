<template>
  <v-navigation-drawer
    v-if="$store.state.navigationdrawer.status"
    absolute
    bottom
    permanent
    style="z-index: 9999"
  >
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
