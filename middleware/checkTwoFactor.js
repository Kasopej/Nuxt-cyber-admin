// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (!store.getters['auth/isLoggedIn']) return

  if (route.path === '' || route.path === '/') {
    return redirect('/home')
  }

  if (!store.getters['auth/getUser2FAStatus']) {
    // if user is admin, prevent navigation until user activates 2FA
    if (store.getters['auth/isAdminAuth']) {
      if (
        route.fullPath !== '/admin/account/settings#security' &&
        route.path !== '/admin/account/logout'
      ) {
        redirect('/admin/account/settings#security')
      }
    } else if (
      // if company user, just prompt/remind about 2FA
      route.name !== 'account-settings' &&
      route.name !== 'account-logout'
    ) {
      console.log(route.name)
      if (
        !store.state.misc.popTwoFactorModal &&
        !store.state.misc.twoFactorModalCanceled
      ) {
        store.commit('misc/TOGGLE_TWOFA_MODAL', true)
      }
    }
  }
}
