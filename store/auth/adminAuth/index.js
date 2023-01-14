export const state = () => ({
  data: null,
  tempUser: null,
  loggedIn: false,
})

export const getters = {
  getAdminUserToken(state, getters, rootState, rootGetters) {
    return state.data.token
  },
  getAdminUserProfile(state, getters, rootState, rootGetters) {
    return state.data.account
  },
}

export const mutations = {
  COMMIT_ADMIN_LOG_IN(state, payload) {
    state.data = payload
    state.loggedIn = true
  },
  KEEP_ADMIN_USER_TMP(state, payload) {
    state.tempUser = payload
  },

  CHANGE_ADMIN_USER_PIC(state, payload) {
    state.user.user.profile[0].image = payload
  },

  SAVE_ADMIN_USER_PIC(state, payload) {
    state.user.account.company[0].image = payload
  },

  UPDATE_ADMIN_USER_PROFILE(state, payload) {
    state.user.phone = payload.phone
    state.user.user = payload.emailAddress
    state.user.lastName = payload.lastName
    state.user.firstName = payload.firstName
  },
}

export const actions = {
  LOG_ADMIN_USER_IN({ state, rootState, commit }, payload) {
    commit('COMMIT_ADMIN_LOG_IN', payload)
    commit('auth/SET_AUTH_TYPE', 'adminAuth', { root: true })
  },
}
