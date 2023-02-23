// This is the middleware for pages that requires authentication

export default ({ $adminApi, store, redirect }) => {
  let authenticated = ''

  try {
    authenticated = store.getters['auth/isLoggedIn']
    // Adds header: `Authorization: Bearer XXXX` to requests
    $adminApi.setToken(store.store.state.auth.adminAuth.data.token, 'Bearer')
  } catch {
    // do nothing
  }

  if (!authenticated) {
    // Remove User's data from a perstisted Vuex store
    store.commit('auth/LOG_USER_OUT')
    //  Redirect to login page
    return redirect('/admin/account/login/')
  }
}
