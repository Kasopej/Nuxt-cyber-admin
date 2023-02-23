// This is the middleware for pages that requires authentication

export default ({ $adminApi, store, route, redirect }) => {
  let authenticated = ''

  try {
    authenticated = store.state.auth.adminAuth.loggedIn
    // Adds header: `Authorization: Bearer XXXX` to requests
    $adminApi.setToken(store.state.auth.adminAuth.data.token, 'Bearer')
  } catch {
    // do nothing
  }

  if (!authenticated) {
    store.commit('auth/LOG_USER_OUT')
    return redirect('/admin/account/login/')
  } else if (route.path === '' || route.path === '/') {
    redirect('/admin/home')
  }
}
