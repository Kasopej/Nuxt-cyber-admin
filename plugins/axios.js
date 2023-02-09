export default function ({ $axios, $config, store, redirect }) {
  $axios.defaults.timeout = $config.axiosTimeout
  //   $axios.defaults.baseURL = $config.baseURL
  $axios.defaults.baseURL = 'https://bewareofbugs.com/company'

  // Adds header: `Authorization: Bearer XXXX` to requests
  const accessToken = store.state.auth.accessToken
  if (accessToken) {
    $axios.setToken(accessToken, 'Bearer')
  } else {
    // Redirect to Logout
    redirect('/account/logout/')
  }

  // $axios.onRequest((config) => {
  //   this.$nuxt.$loading.start()
  // })

  // $axios.onResponse((error) => {
  //   this.$nuxt.$loading.finish()

  //   store.commit('notification/SHOW', {
  //     color: 'accent',
  //     icon: 'mdi-alert-outline',
  //     text: error.response
  //       ? error.response.data.message
  //       : "Sorry, that didn't work. Please try again",
  //   })
  // })

  // $axios.onError(() => {
  //   this.$nuxt.$loading.finish()
  // })
}
