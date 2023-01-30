// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar } from '@quasar/vite-plugin'
import { defineNuxtConfig } from 'nuxt/config'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'pages',
    assets: 'core/assets',
    layouts: 'core/layouts',
    middleware: 'core/middlewares',
    static: 'core/static',
    public: 'core/public'
  },
  components: {
    dirs: ['core/components']
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/core/assets/styles/quasar.sass'
  ],
  build: {
    transpile: ['quasar']
  },
  plugins: [
    '~/core/plugins/quasar.client.ts'
  ],
  vite: {
    plugins: [
      /* vue({
          template: { transformAssetUrls }
        }), */
      quasar({
        sassVariables: '~/core/assets/styles/quasar.variables.sass'
      })
    ]

  }
})
