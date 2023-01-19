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
          <div
            v-for="link in links"
            :key="link.title"
            class="d-block subtitle-1 accent--text px-3 py-2 my-2"
            @click.stop="gotoLink(link.slug)"
          >
            <v-icon class="mr-3" color="accent">{{ link.icon }}</v-icon>
            <span>
              {{ link.title }}
            </span>
          </div>
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters('auth', ['isAdminAuth']),
    links() {
      return [
        {
          title: 'Programs',
          icon: 'mdi-briefcase',
          slug: this.prependAdminRoute + '/',
        },
        {
          title: 'Submissions',
          icon: 'mdi-bookshelf',
          slug: this.prependAdminRoute + '/submission/',
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          slug: this.prependAdminRoute + '/account/settings/',
        },
      ]
    },
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
      if (this.isAdminAuth) this.$router.push('/admin/account/login')
      else this.$router.push(this.prependAdminRoute + '/account/login')
    },
  },
}
</script>
