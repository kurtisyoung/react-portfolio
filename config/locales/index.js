import LocalizedStrings from '../../src/utils/localization';

import en from './en'
// import jp from './jp'

export const languages = {
  en,
  // jp
}

let locales = new LocalizedStrings(languages)

locales.init = ({match}) => {
  const { lang } = match.params
  if (lang) {
    locales.setLanguage(lang)
  } else {
    locales.setLanguage('en')
  }
}

export default locales
