<template>
  <v-form ref="form" v-model="valid" class="pa-3 pa-sm-7 col-12">
    <div class="text-center pb-4">
      Don’t have an account?
      <nuxt-link to="/admin/account/register/">Sign Up</nuxt-link>
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
        type="email"
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
      <nuxt-link to="/admin/account/forgot-password/"
        >Forgot Password?</nuxt-link
      >
    </div>
  </v-form>
</template>

<script>
export default {
  layout: 'account',
  middleware: 'guest',

  data() {
    return {
      FORM: {
        email: null,
        password: null,
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
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.$nuxt.$loading.start()

        const URL = `/login`
        const PAYLOAD = this.FORM
        await this.$adminApi
          .post(URL, PAYLOAD)
          .then((response) => {
            if (response.data.twoFactorAuth) {
              this.$store.commit(
                'auth/adminAuth/KEEP_ADMIN_USER_TMP',
                response.data
              )
              this.$router.replace('/admin/account/verify-twofa')
            } else if (!response.data.twoFactorAuth) {
              this.$store.dispatch(
                'auth/adminAuth/LOG_ADMIN_USER_IN',
                response.data
              )
              this.$router.replace(this.prependAdminRoute + '/account/settings')
            }
          })
          .catch((error) => {
            this.$store.commit('notification/SHOW', {
              color: 'accent',
              icon: 'mdi-alert-outline',
              text: error.response
                ? error.response.data.message
                : "Sorry, that didn't work. Please try again",
            })
          })
          .finally(() => {
            this.$nuxt.$loading.finish()
          })
      }
    },
  },
}
</script>
