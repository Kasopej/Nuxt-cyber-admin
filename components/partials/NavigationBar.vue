<template>
  <nav class="d-flex elevation-3">
    <nuxt-link
      v-if="showLogo"
      to="/"
      class="d-flex align-center grey lighten-3 px-16 py-4 fill-height"
    >
      <v-img src="/images/logo-app-bar.png" />
    </nuxt-link>

    <div class="d-flex align-center flex-grow-1 pa-4">
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0"
        to="/"
        >Programs</v-btn
      >
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0"
        to="/submission"
        >Submission</v-btn
      >
      <v-btn
        large
        class="secondary primary--text mx-4 rounded-lg elevation-0"
        to="/profile"
        >Profile</v-btn
      >
      <v-spacer />
      <v-btn large class="grey lighten-3 rounded-lg elevation-0"
        >Subscribe Now</v-btn
      >
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showLogo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      //
    }
  },
}
</script>
