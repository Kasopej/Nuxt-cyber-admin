export const state = () => ({
  popPaymentModal: false,
  popSubscriptionModal: false,
})

export const mutations = {
  TOGGLE_PAYMENT_MODAL(state, value) {
    state.popPaymentModal = value
  },
  TOGGLE_SUBSCRIPTION_ALERT(state, value) {
    state.popSubscriptionModal = value
  },
}
