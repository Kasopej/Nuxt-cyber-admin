export const state = () => ({
  data: null,
  tempUser: null,
  loggedIn: false,
})

export const getters = {
  getCompanyUserToken(state) {
    return state.data.token
  },
  getCompanyUserProfile(state) {
    return state.data.account.company[0]
  },
  getCompanyUser2FAStatus(state, getters, rootState, rootGetters) {
    return state.data.account.twoFactorAuth
  },
}

export const mutations = {
  COMMIT_COMPANY_LOG_IN(state, payload) {
    state.data = payload
    state.loggedIn = true
  },
  KEEP_COMPANY_USER_TMP(state, payload) {
    state.tempUser = payload
  },

  CHANGE_COMPANY_USER_PIC(state, payload) {
    state.user.user.profile[0].image = payload
  },

  SAVE_COMPANY_USER_PIC(state, payload) {
    state.user.account.company[0].image = payload
  },

  UPDATE_COMPANY_USER_PROFILE(state, payload) {
    state.user.phone = payload.phone
    state.user.user = payload.emailAddress
    state.user.lastName = payload.lastName
    state.user.firstName = payload.firstName
  },
}

export const actions = {
  LOG_COMPANY_USER_IN({ state, rootState, commit }, payload) {
    console.log('before')
    commit('COMMIT_COMPANY_LOG_IN', payload)
    commit('auth/SET_AUTH_TYPE', 'companyAuth', { root: true })
  },
}
