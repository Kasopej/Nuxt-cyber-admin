<template>
  <div class="pa-8 col-12">
    <header class="headline font-weight-bold text-center py-4">
      Authenticate with Token
    </header>

    <v-form ref="tokenForm" class="mb-5" @submit.prevent="verify">
      <v-text-field
        v-model="form.token"
        dense
        outlined
        :rules="[rules.required]"
        label="Token"
        required
      ></v-text-field>

      <partials-form-submit-btn
        color="primary"
        type="submit"
        :progress="submittingForm"
      />
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
import LoginBase from '~/components/pages_base_definitions/Login'
const { mapActions } = createNamespacedHelpers('auth')
const { mapGetters } = createNamespacedHelpers('auth/adminAuth')
export default {
  extends: LoginBase,
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

  computed: {
    ...mapGetters({ tempUserData: 'getTempUserData' }),
  },

  mounted() {
    if (this.tempUserData === null) {
      this.$router.push('/admin/account/login')
    }
  },

  methods: {
    ...mapActions(['LOG_IN']),
    async verify() {
      if (this.$refs.tokenForm.validate()) {
        this.$nuxt.$loading.start()
        this.form.temp2FAKey = this.tempUserData.account.temp2FAKey

        const uri = `/verify-2fa-login/${this.tempUserData.account.userId}`

        await this.$adminApi
          .post(uri, this.form)
          .then((response) => {
            response.data.appAuthType = 'adminAuth'
            this.LOG_IN(response.data).then(() => {
              this.$router.replace(this.prependAdminRoute + '/')
            })
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
