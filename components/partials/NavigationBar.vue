<template>
  <nav
    class="d-flex justify-space-between align-center elevation-3"
    style="z-index: 999"
  >
    <nuxt-link
      to="/"
      class="fill-height d-flex align-center grey lighten-3 px-4 px-lg-16 py-2"
    >
      <v-img src="/images/logo-app-bar.png" />
    </nuxt-link>

    <v-menu open-on-hover bottom offset-y min-width="250">
      <template #activator="{ on, attrs }">
        <v-btn icon class="mx-8" v-bind="attrs" v-on="on">
          <v-avatar color="secondary">
            <!-- <v-img
                  v-if="USER.image"
                  cover
                  :src="USER.image"
                  alt="Profile"
                /> -->
            <v-icon color="primary" size="50">mdi-account-circle</v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/account/settings/">
          <v-list-item-title>
            <div class="subtitle-1 text-capitalize font-weight-bold">
              {{ USER.account.company[0].name }}
            </div>
            <div class="grey--text my-2">
              {{ USER.account.company[0].email }}
            </div>
          </v-list-item-title>
        </v-list-item>

        <v-divider />
        <v-list-item @click="toggleDarkMode()">
          <v-list-item-title>
            <v-icon class="mr-3">{{
              $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
            }}</v-icon>
            <span>{{ $vuetify.theme.dark ? 'Light Mode' : 'Dark mode' }}</span>
          </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item to="#">
          <v-list-item-title>
            <v-icon class="mr-3">mdi-account-plus</v-icon>
            <span>Invite Friends</span>
          </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item to="/account/logout/">
          <v-list-item-title>
            <v-icon class="mr-3">mdi-logout</v-icon>
            <span>Sign out</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-nav-icon
      class="d-lg-none mr-2"
      @click.stop="$store.commit('navigationDrawer/TOGGLE_STATE')"
    />
  </nav>
</template>

<script>
export default {
  props: {
    submission: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      USER: this.$store.state.auth.user,
    }
  },

  methods: {
    toggleDarkMode() {
      // Do nothing
    },
  },
}
</script>
