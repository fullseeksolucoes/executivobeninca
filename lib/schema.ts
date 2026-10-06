import { airports, serviceArea, site } from './data';
import { localePath, type Locale } from './i18n';
import { SITE_URL, absoluteUrl } from './site';
import type { FaqEntry } from './types';

type Node = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Paths of the generated brand images. Kept here so schema and manifest agree. */
export const ICON_512_PATH = '/icon/pwa-512';
export const OG_PATH: Record<Locale, string> = { 'pt-BR': '/og-pt.png', en: '/og-en.png' };

/** Pick-up cities plus the cities of the airports served. */
function areaServed() {
  const names = [...serviceArea.map((c) => c.name), ...airports.map((a) => a.city)];
  return [...new Set(names)].map((name) => ({ '@type': 'City', name }));
}

function businessNode(description: string): Node {
  const { address, geo, googleBusinessUrl } = site;
  return {
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    taxID: site.cnpj,
    description,
    url: absoluteUrl('/'),
    logo: absoluteUrl(ICON_512_PATH),
    image: absoluteUrl(OG_PATH['pt-BR']),
    telephone: site.phoneE164,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street} - ${address.district}`,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
      ...(address.postalCode ? { postalCode: address.postalCode } : {}),
    },
    ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: areaServed(),
    sameAs: [site.instagram, ...(googleBusinessUrl ? [googleBusinessUrl] : [])],
    paymentAccepted: 'Pix, cartão de crédito, cartão de débito',
    currenciesAccepted: 'BRL',
    knowsLanguage: site.languages,
  };
}

function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: site.name,
    inLanguage: ['pt-BR', 'en'],
    publisher: { '@id': BUSINESS_ID },
  };
}

function webPageNode(locale: Locale, title: string, description: string): Node {
  const url = absoluteUrl(localePath[locale]);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  };
}

function faqNode(locale: Locale, items: FaqEntry[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(localePath[locale])}#faq`,
    inLanguage: locale,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** The single `@graph` of the landing page. */
export function landingGraph(locale: Locale, meta: { title: string; description: string }, faq: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(meta.description),
      websiteNode(),
      webPageNode(locale, meta.title, meta.description),
      faqNode(locale, faq),
    ],
  };
}
