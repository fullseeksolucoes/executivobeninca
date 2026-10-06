import { en } from './content/en';
import { pt } from './content/pt';

export const locales = ['pt-BR', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-BR';

/** URL of the landing page in each language. */
export const localePath: Record<Locale, string> = {
  'pt-BR': '/',
  en: '/en',
};

export const ogLocale: Record<Locale, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
};

export function getDictionary(locale: Locale) {
  return locale === 'en' ? en : pt;
}
