// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (store.getters['auth/isLoggedIn'] && store.getters['auth/isAdminAuth']) {
    if (store.getters['auth/getUser2FAStatus'] === false) {
      if (
        route.name !== 'account-settings' ||
        route.name !== 'account-logout'
      ) {
        if (store.state.misc.popTwoFactorModal === false) {
          store.commit('misc/OPEN_TWOFA_MODAL', true)
        }
      }
    }
  }
}
