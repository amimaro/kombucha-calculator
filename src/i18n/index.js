import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './locales'

Vue.use(VueI18n)

const urlString = window.location.href
const url = new URL(urlString)
const l = url.searchParams.get('l')

export default new VueI18n({
  locale: l || 'en-us',
  fallbackLocale: 'en-us',
  messages
})
