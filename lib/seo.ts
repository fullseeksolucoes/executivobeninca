import type { Metadata } from 'next';
import { site } from './data';
import { getDictionary, localePath, locales, ogLocale, type Locale } from './i18n';
import { OG_PATH } from './schema';
import { absoluteUrl } from './site';

/** Full metadata for the landing page in one language, with hreflang alternates. */
export function landingMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  const url = absoluteUrl(localePath[locale]);
  const images = [{ url: absoluteUrl(OG_PATH[locale]), width: 1200, height: 630, alt: meta.ogAlt }];

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath[l])])),
        'x-default': absoluteUrl(localePath['pt-BR']),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images,
    },
  };
}
