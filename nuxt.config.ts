/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    analyze: true,
  },

  ssr:true,
  
  css: [
    '@/assets/css/main.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/hover.css',
    '@/assets/css/animate.min.css'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta:[
        { name: 'description', content: "A Frontend Developer with an open mind and a solution-oriented understanding I have a strong background in HTML, CSS, and JavaScript, I specialize in crafting responsive designs that look great on any device. I'm always eager to learn new techniques and stay up-to-date." }
      ]
    }
  },

  sitemap: {
    cacheTtl: 1000 * 60 * 60 * 24 // 1 day
  },

  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    '/secret/**': { index: false },
    // modify the sitemap.xml entry for specific URLs
    '/about': { sitemap: { changefreq: 'daily', priority: 0.8 } }
  },

  head: {
    script: [
      {
        src: '/custom-script.js',
        body: true, // add the script to the end of the body
        defer: true, // load the script asynchronously
      },
    ],
    
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap'
      },

      {
        rel: 'stylesheet',
        href: '/fonts/fontello3b7f.woff2',
        type: 'font/woff2',
        // Optional: add font-specific CSS rules to this class
        class: 'fontello'
      },


    ],

    plugins: [],

    modules: [
      '@nuxt/image',
      'nuxt-og-image',
      //Search Engine Crawling - Privacy and Security - Bandwith Conservation
      ['@nuxtjs/robots', { 
        userAgent:'*',
        Disallow:"iletisim"
      }],
     'nuxt-simple-sitemap',

      ['nuxt-purgecss', {
        paths: [
          // 'components/**/*.vue',
          // 'layouts/**/*.vue',
          // 'pages/**/*.vue',
          // 'plugins/**/*.js',
          'assets/**/*.css'
        ],
        styleExtensions: ['.css'],
        whitelist: ['body', 'html', 'nuxt-progress'],
        keyframes: true,
        variables: true,
        rejected: true,

        // Add Bootsrap dynamically added classes with JavaScript 
        safelist: ['show', 'hide', 'active', 'open' ,'fade', 'collapse', 'active'],
        extractors: [

        {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['js']
          },
          {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['html']
          },

          //We write a custome extractor because 
          //sometimes in vue template we can  generate some dynamic classes and ı dont want them to remove 
          
          // {
          //   extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          //   extensions: ['vue']
          // },

          {
            extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
            extensions: ['vue']
          }
          
        ]
      }],

    ],

    image: {
      inject: true,
      quality: 80,
      format: ['webp']
    },



  }
});
