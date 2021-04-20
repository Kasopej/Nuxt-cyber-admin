<template>
  <v-navigation-drawer v-model="drawer" style="z-index: 9999" absolute>
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
            :to="link.slug"
            class="d-block subtitle-1 accent--text px-3 py-2 my-2"
          >
            <v-icon class="mr-3" color="accent">{{ link.icon }}</v-icon>
            <span>
              {{ link.title }}
            </span>
          </nuxt-link>
        </div>
      </section>

      <footer class="px-3 py-4">
        <nuxt-link
          to="/logout/"
          class="subtitle-1 font-weight-medium accent--text"
          ><v-icon class="mr-3" color="accent">mdi-logout</v-icon>
          Logout</nuxt-link
        >
      </footer>
    </nav>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Programs', icon: 'mdi-briefcase', slug: '/' },
        { title: 'Submissions', icon: 'mdi-bookshelf', slug: '/submission/' },
        { title: 'Profile', icon: 'mdi-account', slug: '/profile/' },
      ],
    }
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
}
</script>
