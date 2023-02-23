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
  getUserAccount(state) {
    return state.data?.account ?? {}
  },
  isUserSubscribed(state, getters) {
    return getters.getUserAccount.status
  },
  getUser2FAStatus(state) {
    return state.data?.account.twoFactorAuth
  },
  getManagedCompanyAccount(state) {
    return state.data?.company ?? {}
  },
  managedCompanyAccount(state) {
    return state.data?.company
  },
}

export const mutations = {
  COMMIT_LOG_IN(state, payload) {
    state.data = payload
    state.tempUser = null
    state.loggedIn = true
  },
  KEEP_USER_TMP(state, payload) {
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
  SELECT_COMPANY_ACCOUNT(state, payload) {
    console.log(payload)
    state.data.company = null
    state.data.company = {} // cannot Object.assign to undefined/null
    state.data.company = Object.assign(state.data.company, payload)
  },
  UNSELECT_COMPANY_ACCOUNT(state, payload) {
    state.data.company = null
  },
}
