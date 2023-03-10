// This is the middleware for pages that requires authentication

export default ({ $axios, store, redirect }) => {
  let authenticated = false

  try {
    authenticated =
      store.state.auth.companyAuth.loggedIn &&
      !store.getters['auth/isAdminAuth']
    // Adds header: `Authorization: Bearer XXXX` to requests
    $axios.setToken(store.state.auth.companyAuth.data.token, 'Bearer')
  } catch {
    // do nothing
  }

  if (!authenticated) {
    // Remove User's data from a perstisted Vuex store
    store.commit('auth/LOG_USER_OUT')
    //  Redirect to login page
    return redirect('/account/login/')
  }
}
