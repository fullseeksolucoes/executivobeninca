import { en } from './content/en';
import { pt } from './content/pt';

export const locales = ['pt-BR', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-BR';

/** URL of each page in each language. */
export const pagePath = {
  home: { 'pt-BR': '/', en: '/en' },
  privacy: { 'pt-BR': '/politica-de-privacidade', en: '/en/privacy-policy' },
} as const satisfies Record<string, Record<Locale, string>>;

export type Page = keyof typeof pagePath;

/** URL of the landing page in each language. */
export const localePath: Record<Locale, string> = pagePath.home;

/** Link to a section of the landing page that also works from the other pages. */
export function sectionHref(locale: Locale, hash: string) {
  return `${localePath[locale]}${hash}`;
}

export const ogLocale: Record<Locale, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
};

export function getDictionary(locale: Locale) {
  return locale === 'en' ? en : pt;
}
