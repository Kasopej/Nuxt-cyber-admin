<template>
  <v-form ref="form" v-model="valid" class="pa-3 pa-sm-7 col-12">
    <div class="text-center pb-4">
      Don’t have an account?
      <nuxt-link to="/account/register/">Sign Up</nuxt-link>
    </div>

    <header class="headline font-weight-bold text-center py-4">
      Welcome Back!
    </header>

    <v-form ref="loginForm" @submit.prevent="login">
      <v-select
        v-model="FORM.role"
        dense
        outlined
        label="Who are you?"
        :items="['Company Admin', 'Company Representative']"
      ></v-select>

      <v-text-field
        v-model="FORM.companyEmail"
        dense
        outlined
        :rules="[rules.required]"
        label="E-mail"
        required
        autofocus
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
        :progress="submittingForm"
      />
    </v-form>

    <div class="d-flex align-center justify-space-between py-4">
      <v-checkbox v-model="FORM.persistent" label="Remember me"></v-checkbox>
      <nuxt-link to="/account/forgot-password/">Forgot Password?</nuxt-link>
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
        companyEmail: null,
        password: null,
        persistent: true,
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
    ...mapMutations(['companyAuth/KEEP_USER_TMP']),
    async login() {
      if (this.$refs.loginForm.validate()) {
        this.$nuxt.$loading.start()
        this.submittingForm = true

        const URL = `/login`

        await this.$axios
          .post(URL, this.FORM)
          .then((response) => {
            response.data.appAuthType = 'companyAuth'
            if (response.data.twoFactorAuth) {
              this['companyAuth/KEEP_USER_TMP'](response.data)
              this.$router.replace('/account/verify-twofa')
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
