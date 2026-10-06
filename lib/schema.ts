import { site } from './data';
import { SITE_URL, absoluteUrl } from './site';
import type { FaqEntry } from './types';

type Node = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Paths of the generated brand images. Kept here so schema and manifest agree. */
export const ICON_512_PATH = '/icon/pwa-512';
export const OG_HOME_PATH = '/opengraph-image';

export function businessNode(): Node {
  const { address, geo, googleBusinessUrl } = site;
  return {
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    taxID: site.cnpj,
    url: absoluteUrl('/'),
    logo: absoluteUrl(ICON_512_PATH),
    image: absoluteUrl(OG_HOME_PATH),
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
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    sameAs: [site.instagram, ...(googleBusinessUrl ? [googleBusinessUrl] : [])],
    paymentAccepted: site.paymentAccepted,
    currenciesAccepted: 'BRL',
    knowsLanguage: site.languages,
  };
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: site.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': BUSINESS_ID },
  };
}

export function serviceNode(s: { name: string; serviceType: string; path: string; description: string; areaServed?: string[] }): Node {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(s.path)}#service`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: absoluteUrl(s.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: (s.areaServed ?? site.areaServed).map((name) => ({ '@type': 'City', name })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(s.path),
    },
  };
}

export function faqNode(items: FaqEntry[], path: string): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** One `@graph` per page, always including the business and the website. */
export function pageGraph(...nodes: Node[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [businessNode(), websiteNode(), ...nodes],
  };
}
