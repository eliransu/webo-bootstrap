import { getActiveLanguage } from '../config/translations/utils'

function getActiveDirection() {
  return getActiveLanguage() !== 'en' ? 'rtl' : 'ltr';
}

const mapSizeToFontSize = {
  small: '12px',
  default: '14px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '24px',
  xxxlarge: '28px',
  title: '40px'
}

export { getActiveDirection, mapSizeToFontSize }