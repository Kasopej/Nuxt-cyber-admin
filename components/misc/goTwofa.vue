<template>
  <div class="text-center">
    <v-dialog v-model="popTwoFactorModal" persistent width="350">
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
          <v-btn color="primary" text @click="reject"> No later </v-btn>
          <v-btn color="primary" text @click="proceed"> Proceed </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('auth', ['authType']),
    ...mapState('misc', ['popTwoFactorModal']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('misc/TOGGLE_TWOFA_MODAL', false)
    },

    reject() {
      this.closeDialog()
      this.$store.commit('misc/CANCEL_TWOFA_MODAL', true)
    },

    proceed() {
      this.closeDialog()
      this.$router.push(this.prependAdminRoute + '/account/settings#security')
    },
  },
}
</script>
