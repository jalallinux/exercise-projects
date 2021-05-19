import colors from 'vuetify/es5/util/colors'
import fs from 'fs'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - JalalLinuX',
    title: 'login-register',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
    // https://axios.nuxtjs.org/
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL:  "http://localhost:3000",
  },

  firebase: {
    config: {
      apiKey: "AIzaSyCGONVq9ZBOt31sbSJR7pHCFHAZTevuAUM",
      authDomain: "test-01-84bb6.firebaseapp.com",
      databaseURL: "test-01-84bb6-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "test-01-84bb6",
      storageBucket: "test-01-84bb6.appspot.com",
      messagingSenderId: "1047033606910",
      appId: "1:1047033606910:web:6f6e407ebbb52a9038abaf",
      measurementId: "G-C09L1LQR0N"
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          subscribeManually: false
        },
        ssr: false,
      },
      database: true
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.teal,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
