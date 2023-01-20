export const state = () => ({
  data: null,
  tempUser: null,
  loggedIn: false,
})

export const getters = {
  getAdminUserToken(state) {
    return state?.data.token
  },
  getTempUserData(state) {
    return state.tempUser
  },
  getUserProfile(state) {
    return state.data?.account
  },
  getUser2FAStatus(state) {
    return state.data?.account.twoFactorAuth
  },
}

export const mutations = {
  COMMIT_ADMIN_LOG_IN(state, payload) {
    state.data = payload
    state.loggedIn = true
    state.data.account.twoFactorAuth = false
  },
  KEEP_ADMIN_USER_TMP(state, payload) {
    state.tempUser = payload
  },

  CHANGE_USER_PIC(state, payload) {
    state.user.user.profile[0].image = payload
  },

  SAVE_USER_PIC(state, payload) {
    state.user.account.company[0].image = payload
  },

  UPDATE_USER_PROFILE(state, payload) {
    state.user.phone = payload.phone
    state.user.user = payload.emailAddress
    state.user.lastName = payload.lastName
    state.user.firstName = payload.firstName
  },
}

export const actions = {
  LOG_ADMIN_USER_IN({ commit }, payload) {
    commit('COMMIT_ADMIN_LOG_IN', payload)
    commit('auth/SET_AUTH_TYPE', 'adminAuth', { root: true })
  },
}