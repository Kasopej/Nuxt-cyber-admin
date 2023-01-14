// This is the middleware for pages that requires authentication

export default ({ $adminApi, store, redirect }) => {
  let authenticated = ''

  try {
    authenticated = store.state.auth.adminAuth.loggedIn
    // Adds header: `Authorization: Bearer XXXX` to requests
    $adminApi.setToken(store.getters['auth/adminAuth/getToken'], 'Bearer')
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
