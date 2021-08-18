<template>
  <div class="pa-8 col-12">
    <header class="headline font-weight-bold text-center py-4">
      Activate 2FA to Proceed
    </header>
  </div>
</template>

<script>
export default {
  layout: 'account',
  middleware: 'guest',

  data() {
    return {
      form: {
        token: null,
        tempUser: this.$store.state.auth.tempUser,
        temp2FAKey: null,
      },
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  head: { title: 'Activate 2FA' },

//   mounted() {
//       // check if user trys to
//       if(this.tempUser === '') {
//           this.$router.push('account/login')
//       }
//   },

  methods: {
    async fetch() {
      if (!this.isTwoFactor) {
        const uri = 'activate-2fa'
        await this.$axios
          .$post(uri, {})
          .then((res) => {
            this.authInfo = res
          })
          .catch((error) => {
            this.$store.commit('notification/SHOW', {
              color: 'accent',
              icon: 'mdi-alert-outline',
              text: error.response
                ? error.response.data.message
                : 'Oops! programme not found',
            })
          })
      }
    },
  },
}
</script>
