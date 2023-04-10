// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'BirdsBuildExam',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }
      ]
    },
  },

  css: [
    '@/assets/css/index.css'
  ],

  components: {
    "dirs": [
      {
        "path": "~/components/navigation",
        "global": true
      },
      {
        "path": "~/components/svg",
        "global": true
      },
      "~/components/"
    ]
  },

  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

})
