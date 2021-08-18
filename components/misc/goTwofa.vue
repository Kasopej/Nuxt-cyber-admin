<template>
  <div class="text-center">
    <v-dialog
      v-model="$store.state.misc.popTwoFactorModal"
      persistent
      width="350"
    >
      <v-card class="mt-4">
        <v-card-title class="text-h6 text-capitalize">
          Activate 2FA to continue using Teklabspace?
        </v-card-title>
        <v-card-text>
          2FA help keeps your applications secure. This means you will need
          token to authenticate with everytime you need to sign into your
          account. likewise you won't have access to important features until
          2FA is activated
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog()"> No later </v-btn>
          <v-btn color="primary" text @click="proceed()"> Proceed </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit('misc/SET_TWOFA_MODAL', false)
    },

    proceed() {
      this.$store.commit('misc/CLICK_SECURITY_TAB', true)
      this.closeDialog()

      if (this.$router.history.current.name !== 'account-settings') {
        this.$router.replace('account/settings')
      }
    },
  },
}
</script>
