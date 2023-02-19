<template>
  <div class="text-center">
    <v-dialog v-model="popPaymentModal" persistent width="350">
      <v-card class="mt-4">
        <v-card-title class="text-h6 text-capitalize">
          Make Payment?
        </v-card-title>
        <v-card-text> Click proceed to confirm payment </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">No</v-btn>
          <v-btn color="primary" text @click="proceed">Yes</v-btn>
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
    ...mapState('payment', ['popPaymentModal']),
  },
  methods: {
    closeDialog() {
      this.$store.commit('payment/TOGGLE_PAYMENT_MODAL', false)
    },

    proceed() {
      this.closeDialog()
      // make Paystack Payment
    },
  },
}
</script>
