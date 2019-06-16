import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
// import locizeEditor from 'locize-editor';
// import Backend from 'i18next-locize-backend';
// import { reactI18nextModule } from "react-i18next";
// import { initReactI18next } from 'react-i18next/hooks';

import translationEN from 'assets/locale/en.json';
import translationRU from 'assets/locale/ru.json';

i18n
  .use(XHR)
  .use(detector)
  // .use(Backend)
  // .use(locizeEditor)
  // .use(initReactI18next)
  //.use(reactI18nextModule) // passes i18n down to react-i18next
  //.use(initReactI18next)
  .init({
    debug: true,
    lng: "ru",
    fallbackLng: "ru", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEN
      },
      ru: {
        translations: translationRU
      }
    },

    // react: {
    //   useSuspense: false
    // },
    // backend: {
    //   projectId: '7d4ef214-7572-4600-a0db-560bc0092e78',
    //   apiKey: 'e2983594-451f-4012-abd0-2e0ef5922f0f',
    //   referenceLng: 'ru'
    // }
  });

export default i18n;