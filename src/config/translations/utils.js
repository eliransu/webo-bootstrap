import i18n from 'i18next'

function getActiveLanguage() {
  return i18n.language
}

function changeLanguage(lng) {
  i18n.changeLanguage(lng);
}

export { getActiveLanguage, changeLanguage }