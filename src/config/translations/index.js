import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const hebrewTranslation = require("./locales/he.json");
const englishTranslation = require("./locales/en.json");

export default lng => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: {
            ...englishTranslation
          }
        },
        he: {
          translation: {
            ...hebrewTranslation
          }
        }
      },
      lng,
      fallbackLng: "en",

      interpolation: {
        escapeValue: false
      }
    });
};
