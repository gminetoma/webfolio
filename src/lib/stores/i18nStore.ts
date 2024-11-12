import i18next, { type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { createI18nStore, isLoading } from 'svelte-i18next';

const initOptions: InitOptions = {
  detection: {
    order: ['querystring', 'localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupQuerystring: 'lng',
    lookupLocalStorage: 'locale'
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  ns: 'common',
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt-BR'],
  load: 'currentOnly'
};

i18next.use(HttpBackend).use(LanguageDetector).init(initOptions);

const i18n = createI18nStore(i18next);

export { i18n, isLoading };
