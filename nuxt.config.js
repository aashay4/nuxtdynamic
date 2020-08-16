
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', integrity: 'sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n', crossorigin: 'anonymous' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', integrity: 'sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', integrity: 'sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6', crossorigin: 'anonymous' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open Sans'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css'},
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', integrity: 'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh', crossorigin:'anonymous'},
      { rel: 'stylesheet', href: 'https://www.w3schools.com/lib/w3-theme-black.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff0000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth', // enables Nuxt Auth module
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  auth: {
   strategies: {
     local: {
       endpoints: {
         login: {
           url: '/api/users/login',
           method: 'post',
           propertyName: 'token'
         },
         logout: true,
         user: {
           url: '/api/users/user',
           method: 'get',
           propertyName: 'user'
         }
       },
       tokenRequired: true,
       tokenType: "Bearer"
     }
   },
   redirect: {
     login: '/login', // User will be redirected to this path if login is required
     logout: '/', // User will be redirected to this path if after logout, current route is protected
     home: '/add' // User will be redirect to this path after login if accessed login page directly
   },
   rewriteRedirects: true,
 },
  serverMiddleware: [
    '~/api/index.js'
],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    minify: {
      collapseWhitespace: false
    },
    extend(config, ctx) {
    }
  }
}
