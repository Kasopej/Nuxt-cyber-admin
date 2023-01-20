// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (!store.getters['auth/isLoggedIn']) return

  if (!store.getters['auth/getUser2FAStatus']) {
    // if user is admin, prevent navigation until user activates 2FA
    if (store.getters['auth/isAdminAuth']) {
      if (route.fullPath !== '/admin/account/settings#security') {
        redirect('/admin/account/settings#security')
      }
    } else if (
      // if company user, just prompt/remind about 2FA
      route.name !== 'account-settings' ||
      route.name !== 'account-logout'
    ) {
      if (store.state.misc.popTwoFactorModal === false) {
        store.commit('misc/OPEN_TWOFA_MODAL', true)
      }
    }
  }
}
