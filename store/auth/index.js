export const strict = false

export const state = () => ({
  authType: null,
})

export const getters = {
  getToken(state, getters, rootState, rootGetters) {
    if (state.authType === 'adminAuth')
      return getters['adminAuth/getAdminUserToken']
    else return getters['companyAuth/getCompanyUserToken']
  },
  getUserProfile(state, getters, rootState, rootGetters) {
    if (state.authType === 'adminAuth')
      return getters['adminAuth/getAdminUserProfile']
    else return getters['companyAuth/getCompanyUserProfile']
  },
  isLoggedIn(state, getters, rootState, rootGetters) {
    if (state.authType === 'adminAuth') return state['adminAuth/loggedIn']
    else return state['companyAuth/loggedIn']
  },
}

export const mutations = {
  SET_AUTH_TYPE(state, type) {
    state.authType = type
  },
}

export const actions = {
  // Log user in
  LOG_USER_IN({ commit }, payload) {
    if (state.authType === 'adminAuth') {
      commit('adminAuth/LOG_ADMIN_USER_IN', payload)
    } else commit('companyAuth/LOG_COMPANY_USER_IN', payload)
  },

  // change 2FA status this is work around since no api
  SET_TWO_FACTOR_STATUS({ state }, payload) {
    state.user.account.twoFactorAuth = payload
  },

  CHANGE_USER_PIC({ commit, state }, payload) {
    state.authType === 'companyAuth'
      ? commit('companyAuth/CHANGE_COMPANY_USER_PIC', payload)
      : commit('companyAuth/CHANGE_ADMIN_USER_PIC', payload)
  },

  SAVE_USER_PIC({ commit, state }, payload) {
    state.authType === 'companyAuth'
      ? commit('companyAuth/SAVE_COMPANY_USER_PIC', payload)
      : commit('companyAuth/SAVE_ADMIN_USER_PIC', payload)
  },

  UPDATE_USER_PROFILE({ commit, state }, payload) {
    state.authType === 'companyAuth'
      ? commit('companyAuth/UPDATE_COMPANY_USER_PROFILE', payload)
      : commit('companyAuth/UPDATE_ADMIN_USER_PROFILE', payload)
  },

  LOG_USER_OUT({ state }) {
    state[`${state.authType}`].data = null
    state.loggedIn = false
  },
}
