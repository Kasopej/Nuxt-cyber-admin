export const strict = false

export const state = () => ({
  authType: null,
})

export const getters = {
  isAdminAuth(state) {
    if (state.authType === 'adminAuth') return true
    else if (state.authType === 'companyAuth') return false
    else {
      throw new Error('Unknown Auth Type')
    }
  },
  isUserSubscribed(state, getters) {
    if (getters.isAdminAuth) return getters['adminAuth/isUserSubscribed']
    else return getters['companyAuth/isUserSubscribed']
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
  getAccount(state, getters) {
    if (getters.isAdminAuth)
      return getters['adminAuth/getManagedCompanyAccount']
    else return getters['companyAuth/getUserAccount']
  },
  getBasicProfile(state, getters) {
    const basicProfile = getters.isAdminAuth
      ? getters['adminAuth/getUserAccount']
      : getters['companyAuth/getUserAccount'].company?.[0] ?? {}

    // format to basic profile format
    return basicProfile.company?.[0]
      ? {
          email: basicProfile.companyEmail,
          name: basicProfile.companyName,
          image: basicProfile.image,
        }
      : {
          email: basicProfile.email,
          name: basicProfile.firstName,
          image: basicProfile.image,
        }
  },
  isLoggedIn(state, getters) {
    if (state.authType === 'adminAuth') return state.adminAuth.loggedIn
    else if (state.authType === 'companyAuth') return state.companyAuth.loggedIn
    return false
  },
}

export const mutations = {
  SET_AUTH_TYPE(state, type) {
    state.authType = type
  },
  LOG_USER_OUT(state, authTypePassed) {
    const authType = authTypePassed ?? state.authType
    if (!state[`${authType}`]) return
    state[`${authType}`].data = {}
    state[`${authType}`].loggedIn = false
  },
}

export const actions = {
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
    if (getters.isAdminAuth) {
      commit('adminAuth/UPDATE_USER_PROFILE', payload)
    } else {
      commit('companyAuth/UPDATE_USER_PROFILE', payload)
    }
  },
  LOG_IN({ commit }, payload) {
    if (payload.appAuthType === 'adminAuth') {
      commit(`adminAuth/COMMIT_LOG_IN`, payload)
      commit('SET_AUTH_TYPE', 'adminAuth')
      commit('LOG_USER_OUT', 'companyAuth')
    } else if (payload.appAuthType === 'companyAuth') {
      commit(`companyAuth/COMMIT_LOG_IN`, payload)
      commit('SET_AUTH_TYPE', 'companyAuth')
      commit('LOG_USER_OUT', 'adminAuth')
    } else throw new Error('Unknown Auth Type')
  },
}
