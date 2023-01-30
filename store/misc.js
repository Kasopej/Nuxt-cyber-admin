export const strict = false

export const state = () => ({
  popTwoFactorModal: false,
  twoFactorModalCanceled: false,
})

export const mutations = {
  TOGGLE_TWOFA_MODAL(state, payload) {
    state.popTwoFactorModal = payload
  },

  CANCEL_TWOFA_MODAL(state, payload) {
    state.twoFactorModalCanceled = payload
  },
}
