<template>
  <nav class="custom-navbar justify-space-between align-center elevation-3">
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
              {{ profile.companyName }}
            </div>
            <div class="grey--text my-2">
              {{ profile.companyEmail }}
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
import { mapGetters } from 'vuex'
export default {
  props: {
    submission: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters('auth', { profile: 'getUserProfile' }),
  },

  methods: {
    toggleDarkMode() {
      // Do nothing
    },
  },
}
</script>

<style>
.custom-navbar {
  display: flex;
  display: -ms-flexbox;
  background-color: #fff;
  border-width: 0 0 0.0625rem 0;
  border-style: solid;
  border-color: #e7eaf3;
  /* height: 3.75rem; */
  /* box-shadow: 0 0.05rem 0.5rem 0 rgba(33, 40, 50, 0.15) !important; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
