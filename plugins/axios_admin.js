export default function (
  { $axios, store, redirect, $config: { altBaseUrl } },
  inject
) {
  const api = $axios.create({})

  // Set baseURL to something different
  api.setBaseURL(altBaseUrl)

  // Adds header: `Authorization: Bearer XXXX` to requests
  const accessToken = store.state.auth.adminAuth.data?.accessToken
  if (accessToken) {
    api.setToken(accessToken, 'Bearer')
  } else {
    // Redirect to Logout
    redirect('/account/logout/')
  }
  // Inject to context as $api
  inject('adminApi', api)
}
