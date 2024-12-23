import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from '../langs/en.json';
import fr from '../langs/fr.json';

export const DEFAULT_LANG = 'en';
export const defaultNS = 'translations';
export const resources = {
  en,
  fr,
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  // debug only when not in production
  debug: import.meta.env.DEV,
  ns: [defaultNS],
  defaultNS,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
});

export default i18n;
