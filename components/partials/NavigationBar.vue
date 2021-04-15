<template>
  <nav
    class="d-flex justify-space-between align-center elevation-3"
    style="z-index: 9999"
  >
    <nuxt-link
      v-if="!submission && !$vuetify.breakpoint.mobile"
      to="/"
      class="fill-height d-flex align-center grey lighten-3 px-4 px-lg-16 py-4"
    >
      <v-img src="/images/logo-app-bar.png" />
    </nuxt-link>

    <div class="d-none d-lg-flex align-center flex-grow-1 pa-4">
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0 text-capitalize"
        to="/"
        >Programs</v-btn
      >
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0 text-capitalize"
        to="/submission/"
        >Submission</v-btn
      >
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0 text-capitalize"
        to="/profile/"
        >Profile</v-btn
      >
    </div>

    <div>
      <v-btn large class="grey lighten-3 rounded-lg elevation-0 mx-4 my-3"
        >Subscribe Now</v-btn
      >

      <v-btn icon large color="accent" class="mr-4" @click="logout()"
        ><v-icon>mdi-logout</v-icon></v-btn
      >
    </div>
    <v-app-bar-nav-icon class="d-lg-none mr-2" @click.stop="drawer = !drawer" />
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
      drawer: true,
    }
  },

  methods: {
    logout() {
      this.$store.commit('auth/LOG_USER_OUT')
      this.$router.replace('/account/login')
    },
  },
}
</script>
