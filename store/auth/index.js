export const strict = false

export const state = () => ({
  authType: null,
})

export const getters = {
  isAdminAuth(state) {
    if (state.authType === 'adminAuth') return true
    else if (state.authType === 'companyAuth') return false
    else {
      localStorage.clear()
      throw new Error('Unknown Auth Type')
    }
  },
  getToken(state, getters) {
    if (getters.isAdminAuth) return getters['adminAuth/getAdminUserToken']
    else return getters['companyAuth/getCompanyUserToken']
  },
  getTempUserData(state, getters) {
    if (getters.isAdminAuth) return getters['adminAuth/getTempUserData']
    else return getters['companyAuth/getTempUserData']
  },
  getUser2FAStatus(state, getters) {
    if (getters.isAdminAuth) return getters['adminAuth/getUser2FAStatus']
    else return getters['companyAuth/getUser2FAStatus']
  },
  getUserProfile(state, getters) {
    if (getters.isAdminAuth) return getters['adminAuth/getUserProfile']
    else return getters['companyAuth/getUserProfile']
  },
  isLoggedIn(state, getters) {
    if (state.authType === 'adminAuth') return state['adminAuth/loggedIn']
    else if (state.authType === 'companyAuth')
      return state['companyAuth/loggedIn']
  },
}

export const mutations = {
  SET_AUTH_TYPE(state, type) {
    state.authType = type
  },
  LOG_USER_OUT(state) {
    if (!state[`${state.authType}`]) return
    state[`${state.authType}`].data = {}
    state[`${state.authType}`].loggedIn = false
  },
}

export const actions = {
  // Log user in
  LOG_USER_IN({ commit, getters }, payload) {
    getters.isAdminAuth
      ? commit('adminAuth/CHANGE_USER_PIC', payload)
      : commit('companyAuth/CHANGE_USER_PIC', payload)
  },

  CHANGE_USER_PIC({ commit, getters }, payload) {
    getters.isAdminAuth
      ? commit('adminAuth/CHANGE_USER_PIC', payload)
      : commit('companyAuth/CHANGE_USER_PIC', payload)
  },

  SAVE_USER_PIC({ commit, getters }, payload) {
    getters.isAdminAuth
      ? commit('adminAuth/SAVE_USER_PIC', payload)
      : commit('companyAuth/SAVE_USER_PIC', payload)
  },

  UPDATE_USER_PROFILE({ commit, getters }, payload) {
    getters.isAdminAuth
      ? commit('adminAuth/UPDATE_USER_PROFILE', payload)
      : commit('companyAuth/UPDATE_USER_PROFILE', payload)
  },
}
