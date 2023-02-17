<template>
  <nav class="custom-navbar justify-space-between items-center elevation-3">
    <div class="flex items-center">
      <v-app-bar-nav-icon
        class="d-sm-none mr-2"
        @click.stop="$store.commit('navigationDrawer/TOGGLE_STATE')"
      />
      <nuxt-link
        to="/"
        class="fill-height d-flex align-center grey lighten-3 px-4 px-lg-16 py-2"
      >
        <v-img src="/images/logo-app-bar.png" />
      </nuxt-link>
      <div class="pl-10 none sm:block">
        <nuxt-link
          v-for="link in links"
          :key="link.title"
          :to="link.slug"
          exact
          exact-active-class="primary--text hover:border-none"
          class="px-2 black--text hover:border-solid hover:border-b border-primary"
          >{{ link.title }}</nuxt-link
        >
      </div>
    </div>

    <v-menu
      :close-on-click="true"
      :close-on-content-click="true"
      bottom
      offset-y
      min-width="250"
    >
      <template #activator="{ on, attrs }">
        <v-btn icon class="mx-8" v-bind="attrs" v-on="on">
          <v-avatar color="secondary">
            <v-img
              v-if="companyProfile.image"
              cover
              :src="companyProfile.image"
              alt="Profile"
            />
            <v-icon v-else color="primary" size="50">mdi-account-circle</v-icon>
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="prependAdminRoute + '/account/settings/'">
          <v-list-item-title>
            <div class="subtitle-1 text-capitalize font-weight-bold">
              {{ companyProfile.companyName }}
            </div>
            <div class="grey--text my-2">
              {{ companyProfile.companyEmail }}
            </div>
          </v-list-item-title>
        </v-list-item>

        <v-divider />
        <v-list-item @click="toggleDarkMode">
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
        <v-list-item @click="logout">
          <v-list-item-title>
            <v-icon class="mr-3">mdi-logout</v-icon>
            <span>Sign out</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
    links: {
      type: Array,
    },
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters('auth', { profile: 'getUserProfile' }),
    companyProfile() {
      return this.profile.company[0]
    },
  },

  methods: {
    toggleDarkMode() {
      // Do nothing
    },
    logout() {
      this.store.commit('auth/LOG_USER_OUT')
      this.$router.replace(this.prependAdminRoute + '/account/logout')
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
