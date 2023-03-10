// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (!store.getters['auth/isLoggedIn']) return // below getters will fail if auth not set

  if (route.path === '' || route.path === '/') {
    return redirect('/home')
  }
  if (route.path === '/admin/' || route.path === '/admin') {
    return redirect('/admin/home')
  }

  // if user is admin, prevent navigation until user activates 2FA
  if (store.getters['auth/isAdminAuth']) {
    if (!store.getters['auth/getUser2FAStatus']) {
      if (
        route.fullPath !== '/admin/account/settings#security' &&
        route.path !== 'admin-account-logout' &&
        route.path !== 'admin-account-login'
      ) {
        // redirect('/admin/account/settings#security')
        store.commit('misc/TOGGLE_TWOFA_MODAL', true)
      }
    }
  } else {
    // if company user
    // must update payment
    if (
      !store.getters['auth/isUserSubscribed'] &&
      route.name !== 'account-settings' &&
      route.name !== 'account-logout' &&
      route.name !== 'account-login'
    ) {
      store.commit('payment/TOGGLE_SUBSCRIPTION_ALERT', true)
      return redirect('/account/settings#billing')
    }
    if (
      // just prompt/remind about 2FA
      !store.getters['auth/getUser2FAStatus'] &&
      route.name !== 'account-settings' &&
      route.name !== 'account-logout' &&
      route.name !== 'account-login'
    ) {
      if (!store.state.misc.twoFactorModalCanceled) {
        store.commit('misc/TOGGLE_TWOFA_MODAL', true)
      }
    }
  }
}
