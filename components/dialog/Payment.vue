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
      function payWithPaystack() {
        const handler = window.PaystackPop.setup({
          key: 'pk_test_5a18ef95bd93c6b9679b47c88c3ad15cfcbba0a2', // Replace with your public key
          email: document.getElementById('email-address').value,
          amount: document.getElementById('amount').value * 100,
          ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose() {
            alert('Window closed.')
          },
          callback(response) {
            const message = 'Payment complete! Reference: ' + response.reference
            alert(message)
          },
        })

        handler.openIframe()
      }
      payWithPaystack()
    },
  },
}
</script>
