import { defineNuxtPlugin } from '#app'
import { Quasar, QPage, QBtn, QToolbarTitle, QToolbar, QCard, QCardSection, QPageContainer, QDrawer, QLayout, QList, QHeader, QItemLabel, QIcon, QItemSection, QItem, QSeparator, QSpace } from 'quasar'

export default defineNuxtPlugin(nuxtApp => {
  const quasarUserOptions = {
    components: {
      QPage,
      QBtn,
      QToolbarTitle,
      QToolbar,
      QCard,
      QCardSection,
      QPageContainer,
      QList,
      QLayout,
      QDrawer,
      QHeader,
      QItemLabel,
      QIcon,
      QItemSection,
      QItem,
      QSeparator,
      QSpace
    },
    plugins: {}
  }

  nuxtApp.vueApp.use(Quasar, quasarUserOptions)
})
