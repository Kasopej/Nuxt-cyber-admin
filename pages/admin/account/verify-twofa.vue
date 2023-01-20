<template>
  <div class="pa-8 col-12">
    <header class="headline font-weight-bold text-center py-4">
      Authenticate with Token
    </header>

    <v-form ref="tokenForm" class="mb-5">
      <v-text-field
        v-model="form.token"
        dense
        outlined
        :rules="[rules.required]"
        label="Token"
        required
      ></v-text-field>

      <v-btn block color="primary" @click="verify"> Authenticate </v-btn>
    </v-form>
    <small class="text--grey" style="line-height: 1">
      If you have lost your mobile device and want to reset your 2FA to retrieve
      back your account, Kindlysend a message to
      <a href="mailto:info@teklabspace.com">info@teklabspace.com</a> with lost
      2FA as the subject. Thanks.
    </small>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth/adminAuth')
export default {
  layout: 'account',
  middleware: 'guest',

  data() {
    return {
      form: {
        token: null,
        temp2FAKey: null,
      },
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  head: { title: 'verify 2FA' },

  mounted() {
    if (this.$store.state.auth.userAuthData === null) {
      this.$router.push('/admin/login')
    }
  },

  methods: {
    ...mapActions(['LOG_ADMIN_USER_IN']),
    async verify() {
      if (this.$refs.tokenForm.validate()) {
        this.$nuxt.$loading.start()

        const userAuthData =
          this.$store.getters['auth/adminAuth/getTempUserData']
        this.form.temp2FAKey = userAuthData.account.temp2FAKey

        const uri = `/verify-2fa-login/${userAuthData.account._id}`

        await this.$adminApi
          .post(uri, this.form)
          .then((response) => {
            this.LOG_ADMIN_USER_IN(response.data)
            this.$router.replace(this.prependAdminRoute + '/account/settings')
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