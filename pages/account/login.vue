<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <div class="text-center pb-4">
      Don’t have an account?
      <nuxt-link to="/account/register/">Sign Up</nuxt-link>
    </div>

    <header class="headline font-weight-bold text-center py-4">
      Welcome Back!
    </header>

    <v-form ref="loginForm">
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

      <v-btn block color="primary" @click="login()"> Sign in </v-btn>
    </v-form>

    <div class="d-flex align-center justify-space-between py-4">
      <v-checkbox v-model="FORM.persistent" label="Remember me"></v-checkbox>
      <nuxt-link to="/account/forgot-password/">Forgot Password?</nuxt-link>
    </div>

    <!--     
    <notification-toast
      :status="notification.status"
      :text="notification.text"
      :color="notification.color"
    /> -->

    <v-snackbar v-model="notification.status" :color="notification.color">
      <v-icon class="mr-3">{{
        notification.icon || 'mdi-information-outline'
      }}</v-icon>
      {{ notification.text }}
    </v-snackbar>
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

      notification: {},
    }
  },

  head: { title: 'Sign in' },

  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.$nuxt.$loading.start()

        const URL = `/login`
        const PAYLOAD = this.FORM

        await this.$axios
          .post(URL, PAYLOAD)
          .then((response) => {
            this.$router.replace('/')
          })
          .catch((error) => {
            this.notification = {
              status: true,
              color: 'error',
              text: error.response
                ? error.response.data.message
                : "Sorry, that didn't work. Please try again",
            }
          })
          .finally(() => {
            this.$nuxt.$loading.finish()
          })
      }
    },
  },
}
</script>
