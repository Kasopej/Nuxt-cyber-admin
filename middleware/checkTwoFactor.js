// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (store.getters['auth/isLoggedIn']) {
    if (store.state.auth.user.account.twoFactorAuth === false) {
      if (
        route.name !== 'account-settings' ||
        route.name !== 'account-logout'
      ) {
        if (store.state.misc.laterTwoFactorModal === false) {
          store.commit('misc/SAVE_TWOFA_MODAL', true)
        }
      }
    }
  }
}
