<template>
  <v-form ref="form" v-model="valid" class="pa-3 pa-sm-7 col-12">
    <div class="text-center pb-4">
      Don’t have an account?
      <nuxt-link to="/admin/account/register/">Sign Up</nuxt-link>
    </div>

    <header class="headline font-weight-bold text-center py-4">
      Welcome Back!
    </header>

    <v-form ref="loginForm" @submit.prevent="login">
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

      <partials-form-submit-btn
        color="primary"
        type="submit"
        text="Login"
        :progress="submittingForm"
      />
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
import { createNamespacedHelpers } from 'vuex'
import LoginBase from '~/components/pages_base_definitions/Login'
const { mapActions, mapMutations } = createNamespacedHelpers('auth')
export default {
  extends: LoginBase,
  data() {
    return {
      FORM: {
        email: null,
        password: null,
      },

      valid: true,
      showPassword: false,
      submittingForm: false,

      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  head: { title: 'Sign in' },
  methods: {
    ...mapActions(['LOG_IN']),
    ...mapMutations(['adminAuth/KEEP_USER_TMP']),
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.$nuxt.$loading.start()
        this.submittingForm = true

        const URL = `/login`
        const PAYLOAD = this.FORM
        await this.$adminApi
          .post(URL, PAYLOAD)
          .then((response) => {
            response.data.appAuthType = 'adminAuth'
            if (response.data.account.twoFactorAuth) {
              this['adminAuth/KEEP_USER_TMP'](response.data)
              this.$router.replace('/admin/account/verify-twofa')
            } else {
              this.LOG_IN(response.data).then(() => {
                this.$router.replace(this.prependAdminRoute + '/')
              })
            }
          })
          .catch((error) => {
            this.submittingForm = false
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
