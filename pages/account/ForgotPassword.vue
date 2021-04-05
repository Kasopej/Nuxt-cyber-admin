<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    Forgot Password!
  </v-form>
</template>

<script>
export default {
  layout: 'account',

  data() {
    return {
      FORM: { persistent: true },
    }
  },

  head: { title: 'Forgot Password' },
}
</script>
