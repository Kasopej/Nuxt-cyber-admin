export const state = () => ({
  popPaymentModal: false,
})

export const mutations = {
  TOGGLE_PAYMENT_MODAL(state, value) {
    state.popPaymentModal = value
  },
}
