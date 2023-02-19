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
          <v-btn color="primary" text @click="closeDialog">Close</v-btn>
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
      this.$store.commit('payment/TOGGLE_SUBSCRIPTION_ALERT', false)
    },
  },
}
</script>
