
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  loading: { color: '#0000FF' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
    plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth', // enables Nuxt Auth module,
    '@nuxtjs/sitemap',
    'nuxt-lazy-load'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://bestbudgetlaptop.net/',
    exclude: [
  '/login',
  '/logout',
  '/register',
  '/add',
  '/login/',
  '/logout/',
  '/register/',
  '/add/'
]
},
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
