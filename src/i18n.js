import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'To get started, edit <1>src/App.js</1> and save to reload.',
          'Welcome to React': 'Welcome to React and react-i18next',
          welcome: 'Hello <br/> <strong>World</strong>',
          home: 'welcome to home page , here you will get home content'
        }
      },
      de: {
        translations: {
          'To get started, edit <1>src/App.js</1> and save to reload.':
            'Starte in dem du, <1>src/App.js</1> editierst und speicherst.',
          'Welcome to React': 'Willkommen bei React und react-i18next',
          home: 'Willkommen auf der Homepage, hier erhalten Sie Home-Inhalte'
        }
      }
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
