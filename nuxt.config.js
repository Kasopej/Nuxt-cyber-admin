import { resolve } from 'path'
import colors from 'vuetify/es5/util/colors'

export default {
  alias: {
    PageBases: resolve(__dirname, './components/pages_base_definitions'),
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - TekLabspace Company Portal',
    title: 'TekLabspace Admin Portal',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      },
    ],
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  router: {
    middleware: 'checkTwoFactor',
  },

  loading: {
    color: '#6921b6',
    failedColor: 'red',
    continuous: true,
  },

  loadingIndicator: {
    name: 'rotating-plane',
    color: '#c504da',
    background: '#f9eded',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/custom.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/axios_admin' },
    { src: '~/plugins/globalMixins' },
    { src: '~/plugins/lifecycle.client' },
    // '~/plugins/mixins'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    baseUrl: process.env.BASEURL,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
  ],

  eslint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['auth'],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    timeout: 60000,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      source: resolve(__dirname, '/static', '/favicon.ico'),
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#c504da',
          accent: '#6921b6',
          secondary: '#f9eded',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#10b988',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  publicRuntimeConfig: {
    axios: { baseURL: process.env.BASEURL },
    altBaseUrl: process.env.ADMINURL,
  },

  generate: {
    fallback: true,
  },
}
