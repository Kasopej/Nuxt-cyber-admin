export default function ({ $axios, $config, store, redirect }) {
  $axios.defaults.timeout = $config.axiosTimeout
  $axios.defaults.baseURL = $config.baseURL

  // Adds header: `Authorization: Bearer XXXX` to requests
  //   const accessToken = store.state.auth.accessToken
  //   if (accessToken) {
  //     $axios.setToken(accessToken, 'Bearer')
  //   } else {
  //     // Redirect to Logout
  //     redirect('/account/logout/')
  //   }
}
