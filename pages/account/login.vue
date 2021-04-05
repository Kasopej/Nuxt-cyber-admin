<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <div class="text-center pb-4">
      Don’t have an account?
      <nuxt-link to="/account/register/">Sign Up</nuxt-link>
    </div>

    <header class="headline font-weight-bold text-center py-4">
      Welcome Back!
    </header>

    <div>
      <v-text-field
        v-model="FORM.email"
        dense
        outlined
        :rules="[rules.required]"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="FORM.password"
        dense
        required
        outlined
        password
        label="Password"
        :rules="[rules.required]"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-btn block color="primary" @click="login"> Sign in </v-btn>
    </div>

    <div class="d-flex align-center justify-space-between py-4">
      <v-checkbox v-model="FORM.persistent" label="Remember me"></v-checkbox>
      <nuxt-link to="/account/register/">Forgot Password?</nuxt-link>
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
        password: null,
        persistent: true,
      },

      valid: true,
      showPassword: false,
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },

  head: { title: 'Sign in' },

  methods: {
    login() {
      console.log(this.FORM)
      this.$router.replace('/')
    },
  },
}
</script>
