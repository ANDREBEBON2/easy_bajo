const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPORTED_LOCALES.split(',')
  },
}

export default Trans
