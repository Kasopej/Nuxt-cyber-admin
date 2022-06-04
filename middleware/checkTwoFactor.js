// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (store.state.auth.loggedIn) {
    if (store.state.auth.user.account.twoFactorAuth === false) {
      if (
        route.name !== 'account-settings' ||
        route.name !== 'account-logout'
      ) {
        store.commit('misc/SAVE_TWOFA_MODAL', true)
      }
    }
  }
}
