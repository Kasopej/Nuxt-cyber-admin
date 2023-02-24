// This is the middleware for pages that requires authentication

export default ({ $adminApi, store, redirect }) => {
  let authenticated = false

  try {
    authenticated =
      store.state.auth.adminAuth.loggedIn && store.getters['auth/isAdminAuth']
    // Adds header: `Authorization: Bearer XXXX` to requests
    $adminApi.setToken(store.state.auth.adminAuth.data.token, 'Bearer')
  } catch {
    // do nothing
  }

  if (!authenticated) {
    store.commit('auth/LOG_USER_OUT')
    return redirect('/admin/account/login/')
  }
}
