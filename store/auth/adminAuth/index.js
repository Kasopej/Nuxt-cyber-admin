export const state = () => ({
  data: null,
  tempUser: null,
  loggedIn: false,
  userSessionConfirmed: false,
})

export const getters = {
  getAdminUserToken(state) {
    return state?.data.token
  },
  getTempUserData(state) {
    return state.tempUser
  },
  getUserProfile(state) {
    return state.data?.account ?? {}
  },
  getUser2FAStatus(state) {
    return state.data?.account.twoFactorAuth
  },
}

export const mutations = {
  COMMIT_ADMIN_LOG_IN(state, payload) {
    state.data = payload
    state.tempUser = null
    state.loggedIn = true
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
    Object.assign(state.data.account, payload)
  },
  CONFIRM_USER_SESSION(state) {
    state.userSessionConfirmed = true
  },
}

export const actions = {
  LOG_ADMIN_USER_IN({ commit }, payload) {
    commit('COMMIT_ADMIN_LOG_IN', payload)
    commit('auth/SET_AUTH_TYPE', 'adminAuth', { root: true })
  },
}
