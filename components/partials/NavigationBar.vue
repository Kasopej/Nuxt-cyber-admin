<template>
  <nav class="d-flex">
    <div class="d-flex align-center grey lighten-3 px-16 py-4 fill-height">
      <v-img src="/images/logo-app-bar.png" />
    </div>
    <div class="d-flex align-center flex-grow-1 pa-4">
      <v-btn large class="secondary primary--text mr-4 rounded-lg elevation-0"
        >Programs</v-btn
      >
      <v-btn large class="secondary primary--text mx-4 rounded-lg elevation-0"
        >Submission</v-btn
      >
      <v-btn large class="secondary primary--text mx-4 rounded-lg elevation-0"
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
  data() {
    return {
      //
    }
  },
}
</script>
