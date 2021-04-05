<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <header class="headline font-weight-bold text-center py-4">
      Forgot Password
    </header>

    <div class="text-center pb-4">
      Enter your email and we’ll send you a link to reset your password
    </div>

    <div>
      <v-text-field
        v-model="FORM.email"
        dense
        outlined
        :rules="[rules.required]"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn block color="primary" @click="resetPassword">
        Reset password
      </v-btn>
    </div>

    <div class="text-center py-4">
      <nuxt-link to="/account/login/" class="font-weight-bold accent--text">
        Or click here to login
      </nuxt-link>
    </div>
  </v-form>
</template>

<script>
export default {
  layout: 'account',

  data() {
    return {
      FORM: {
        email: null,
      },

      valid: true,
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },

  head: { title: 'Sign in' },

  methods: {
    resetPassword() {
      console.log(this.FORM)
    },
  },
}
</script>
