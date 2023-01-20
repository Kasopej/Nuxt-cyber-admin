export const state = () => ({
  data: null,
  tempUser: null,
  loggedIn: false,
})

export const getters = {
  getCompanyUserToken(state) {
    return state.data?.token
  },
  getTempUserData(state) {
    return state.tempUser
  },
  getUserProfile(state) {
    return state.data?.account.company[0]
  },
  getUser2FAStatus(state, getters, rootState, rootGetters) {
    return state.data?.account.twoFactorAuth
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

  CHANGE_USER_PIC(state, payload) {
    state.data.profile[0].image = payload
  },

  SAVE_USER_PIC(state, payload) {
    state.data.account.company[0].image = payload
  },

  UPDATE_USER_PROFILE(state, payload) {
    const accountState = state.data.account.company[0]
    state.data.account.company[0] = { ...accountState, ...payload }
  },
}

export const actions = {
  LOG_COMPANY_USER_IN({ commit }, payload) {
    commit('COMMIT_COMPANY_LOG_IN', payload)
    commit('auth/SET_AUTH_TYPE', 'companyAuth', { root: true })
  },
}