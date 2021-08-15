<template>
  <v-form ref="form" v-model="valid" class="pa-8 col-12" lazy-validation>
    <header class="headline font-weight-bold text-center py-4">
      Authenticate with Token
    </header>

    <v-form ref="tokenForm">
      <v-text-field
        v-model="form.token"
        dense
        outlined
        :rules="[...rules.required]"
        label="Token"
        required
      ></v-text-field>

      <v-btn block color="primary" @click="verify()"> Authenticate </v-btn>
    </v-form>
  </v-form>
</template>

<script>
export default {
  layout: 'account',
  middleware: 'guest',

  data() {
    return {
      form: {
        token: null,
        temp2FAKey: null,
      },

      valid: true,
      showPassword: false,

      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  head: { title: 'verify 2FA' },

  mounted() {
    if (this.$store.state.auth.userAuthData === null) {
      this.$router.push('/login')
    }
  },

  methods: {
    async verify() {
      if (this.$refs.tokenForm.validate()) {
        this.$nuxt.$loading.start()

        const userAuthData = this.$store.state.auth.userAuthData
        this.form.temp2FAKey = userAuthData.temp2FAKey

        const uri = `/verify-2fa-login/${userAuthData.userId}`

        await this.$axios
          .post(uri, this.form)
          .then((response) => {
            this.$store.commit('auth/LOG_USER_IN', response.data)
            this.$router.replace('/')
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
