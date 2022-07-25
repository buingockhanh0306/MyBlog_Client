import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import * as en from './src/locales/en';
import * as vi from './src/locales/vi';

export const languageDefault = 'vi';

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en,
        vi
    },
    lng: languageDefault,
    fallbackLng: languageDefault,
    detection: {
        order: ['localStorage', 'navigator'],
        lookupQuerystring: 'lng',
        lookupLocalStorage: languageDefault,
        caches: ['localStorage']
    },
});

export { i18n };