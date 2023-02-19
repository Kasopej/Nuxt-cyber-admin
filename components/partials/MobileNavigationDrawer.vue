<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mobile && drawer"
    v-model="drawer"
    style="z-index: 9999"
    absolute
  >
    <nav class="fill-height d-flex flex-column justify-space-between">
      <section>
        <nuxt-link
          to="/"
          class="d-flex align-center grey lighten-3 px-4 px-lg-16 py-4"
        >
          <v-img src="/images/logo-app-bar.png" />
        </nuxt-link>

        <div class="subtitle-1">
          <nuxt-link
            v-for="link in links"
            :key="link.title"
            exact
            :to="link.slug"
            exact-active-class="primary--text hover:border-none"
            class="px-3 py-2 my-2 d-block subtitle-1 hover:border-solid hover:border-b border-primary"
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
          >
            <v-icon class="mr-3" color="accent">{{ link.icon }}</v-icon>
            <span>
              {{ link.title }}
            </span>
          </nuxt-link>
        </div>
      </section>

      <footer class="px-3 py-4">
        <a class="subtitle-1 font-weight-medium accent--text" @click="logout"
          ><v-icon class="mr-3" color="accent">mdi-logout</v-icon> Logout</a
        >
      </footer>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
    },
  },
  data() {
    return {}
  },

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

  methods: {
    gotoLink(slug) {
      this.drawer = false
      this.$router.push(slug)
    },
    logout() {
      this.$store.commit('auth/LOG_USER_OUT')
      this.$router.push(this.prependAdminRoute + '/account/login')
    },
  },
}
</script>
