export const strict = false

export const state = () => ({
  clickSecTab: false,
  popTwoFactorModal: false,
  laterTwoFactorModal: false,
})

export const mutations = {
  // Save accessToken
  CLICK_SECURITY_TAB(state, payload) {
    state.clickSecTab = payload
  },

  SAVE_TWOFA_MODAL(state, payload) {
    state.popTwoFactorModal = payload
  },

  SAVE_LATER_TWOFA_MODAL(state, payload) {
    state.laterTwoFactorModal = payload
  },
}
