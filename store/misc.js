export const strict = false

export const state = () => ({
  clickSecTab: false,
  popTwoFactorModal: false,
})

export const mutations = {
  // Save accessToken
  CLICK_SECURITY_TAB(state, payload) {
    state.clickSecTab = payload
  },

  SET_TWOFA_MODAL(state, payload) {
    state.popTwoFactorModal = payload
  },
}
