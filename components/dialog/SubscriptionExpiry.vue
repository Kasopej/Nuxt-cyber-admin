<template>
  <div class="text-center">
    <v-dialog v-model="popSubscriptionModal" persistent width="350">
      <v-card class="mt-4">
        <v-card-title class="text-h6 text-capitalize text-red-500">
          Subscription Expired
        </v-card-title>
        <v-card-text>
          You need to fund your account or update your payment details
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">Pay</v-btn>
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
    ...mapState('payment', ['popSubscriptionModal']),
  },
  methods: {
    closeDialog() {
      // this.$store.commit('payment/TOGGLE_SUBSCRIPTION_ALERT', false)
      // const paymentForm = document.getElementById('paymentForm')
      // paymentForm.addEventListener('submit', payWithPaystack, false)
      function payWithPaystack() {
        const handler = window.PaystackPop.setup({
          key: 'pk_test_5a18ef95bd93c6b9679b47c88c3ad15cfcbba0a2', // Replace with your public key
          email: 'kasope@getMaxListeners.com',
          amount: 100,
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
