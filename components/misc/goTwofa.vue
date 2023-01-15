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
          <v-btn color="primary" text @click="closeDialog"> No later </v-btn>
          <v-btn color="primary" text @click="proceed"> Proceed </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('auth', ['authType']),
    ...mapState('misc', ['popTwoFactorModal']),
    ...mapGetters('auth', ['isAdminAuth']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('misc/OPEN_TWOFA_MODAL', false)
      this.dialog = false
      this.$store.commit('misc/SAVE_LATER_TWOFA_MODAL', true)
    },

    proceed() {
      this.$store.commit('misc/CLICK_SECURITY_TAB', true)
      this.closeDialog()
      if (this.isAdminAuth) this.$router.push('/admin/account/settings')
      else this.$router.push('/account/settings')
    },
  },
}
</script>
