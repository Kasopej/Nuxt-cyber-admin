export default function ({ $axios, store, redirect }, inject) {
  const api = $axios.create({})

  // Set baseURL to something different
  api.setBaseURL('https://teklabspace-live.herokuapp.com/airforce101/')

  // Adds header: `Authorization: Bearer XXXX` to requests
  const accessToken = store.state.admin?.auth.accessToken
  if (accessToken) {
    api.setToken(accessToken, 'Bearer')
  } else {
    // Redirect to Logout
    redirect('/account/logout/')
  }
  // Inject to context as $api
  inject('adminApi', api)
}
