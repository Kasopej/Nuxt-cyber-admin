// This is the middleware to check if user has enabled 2FA

export default ({ route, store, redirect }) => {
  if (!store.getters['auth/isLoggedIn']) return

  if (route.path === '' || route.path === '/') {
    console.log('route')
    return redirect('/home')
  }

  // if user is admin, prevent navigation until user activates 2FA
  if (store.getters['auth/isAdminAuth']) {
    if (!store.getters['auth/getUser2FAStatus']) {
      if (
        route.fullPath !== '/admin/account/settings#security' &&
        route.path !== '/admin/account/logout'
      ) {
        redirect('/admin/account/settings#security')
      }
    }
  } else {
    // if company user
    // must update payment
    if (
      !store.getters['auth/isUserSubscribed'] &&
      route.name !== 'account-settings' &&
      route.name !== 'account-logout'
    ) {
      store.commit('payment/TOGGLE_SUBSCRIPTION_ALERT', true)
      return redirect('/account/settings#billing')
    }
    if (
      // just prompt/remind about 2FA
      !store.getters['auth/getUser2FAStatus'] &&
      route.name !== 'account-settings' &&
      route.name !== 'account-logout'
    ) {
      if (!store.state.misc.twoFactorModalCanceled) {
        store.commit('misc/TOGGLE_TWOFA_MODAL', true)
      }
    }
  }
}
