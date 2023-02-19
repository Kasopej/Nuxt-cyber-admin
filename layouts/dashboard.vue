<template>
  <v-app>
    <template v-if="$fetchState.pending">
      <section class="h-screen flex justify-center items-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="70"
          width="8"
        ></v-progress-circular>
      </section>
    </template>
    <template v-else>
      <partials-mobile-navigation-drawer :links="links" />

      <section
        style="min-height: 100vh"
        class="d-flex flex-column overflow-y-hidden"
      >
        <partials-navigation-bar :links="links" />
        <nuxt class="flex-grow-1 overflow-y-auto" />
      </section>

      <partials-notification-toast />
      <dialog-go-twofa />
      <dialog-payment />
      <dialog-subscription-expiry />
      <dialog-programs-limit />
    </template>
  </v-app>
</template>

<script>
import { createNamespacedHelpers, mapState } from 'vuex'
import { debounce } from '~/plugins/utils'
const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers('auth')
const mapRootState = mapState

const debouncedWake = debounce(wake, 5000)
function wake({ newState }) {
  if (newState === 'active') {
    if (new Date().valueOf() > this.startTime.valueOf() + 3600000) this.$fetch()
    else this.startTime = new Date()
  }
}

export default {
  data() {
    return {
      startTime: new Date(),
    }
  },
  async fetch() {
    const URL = this.isAdminAuth ? `/viewProfile` : '/viewProfile'
    // Make upload request to the API
    await this.getHTTPClient()
      .$get(URL)
      .then((res) => {
        this.UPDATE_USER_PROFILE(res.user)
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Session Expired. Please log in',
        })
        this.LOG_USER_OUT()
        this.$router.replace(this.prependAdminRoute + '/account/logout')
      })
  },
  computed: {
    ...mapGetters(['isAdminAuth', 'userAuthSessionConfirmed']),
    ...mapRootState('preferences', ['darkMode']),
    links() {
      return [
        {
          title: 'Programs',
          icon: 'mdi-briefcase',
          slug: this.prependAdminRoute + '/program/',
        },
        {
          title: 'Submissions',
          icon: 'mdi-bookshelf',
          slug: this.prependAdminRoute + '/submissions/',
        },
        {
          title: 'Profile',
          icon: 'mdi-account',
          slug: this.prependAdminRoute + '/account/settings/',
        },
      ]
    },
    themeBinding() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  watch: {
    darkMode: {
      handler(val) {
        this.$vuetify.theme.dark = val
      },
      immediate: true,
    },
  },
  mounted() {
    window.lifecycle.addEventListener('statechange', debouncedWake.bind(this))
  },
  destroyed() {
    clearTimeout(this.refreshTimer)
  },
  methods: {
    ...mapActions(['UPDATE_USER_PROFILE']),
    ...mapMutations(['LOG_USER_OUT', 'CONFIRM_USER_SESSION']),
  },
}
</script>

<style lang="scss" scoped>
//Import SCSS files importer
@import '~~/assets/styles/custom.scss';

.pg-root {
  display: flex;
  position: relative;
  min-height: 100vh;
}
.min-full-height {
  min-height: 100vh;
}
</style>
