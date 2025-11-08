import { createI18n } from 'vue-i18n'
import pluralRules from '../i18n/rules/pluralization'

import en from './Locale/en.json'
import jp from './Locale/jp.json'
import id from './Locale/id.json'
import cn from './Locale/cn.json'
import ru from './Locale/ru.json'
import es from './Locale/es.json'

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en, jp, id, cn, ru, es },
  pluralRules,
})
