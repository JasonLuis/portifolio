// https://nuxt.com/docs/api/configuration/nuxt-config
import { quasar } from '@quasar/vite-plugin'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  dir: {
    pages: 'ui/pages/Home'
  },
  components: {
    dirs: ['ui/core/components']
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '~/ui/core/assets/styles/quasar.sass'
  ],
  build: {
    transpile: ['quasar']
  },
  plugins: [
    '~/plugins/quasar.client.ts'
  ],
  vite: {
    plugins: [
      /* vue({
          template: { transformAssetUrls }
        }), */
      quasar({
        sassVariables: '~/ui/core/assets/styles/quasar.variables.sass'
      })
    ]

  }
})
