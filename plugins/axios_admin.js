export default function (
  { $axios, store, redirect, $config: { altBaseUrl } },
  inject
) {
  const api = $axios.create({})

  // Set baseURL to something different
  api.setBaseURL(altBaseUrl)
  // Inject to context as $adminApi
  inject('adminApi', api)
}
