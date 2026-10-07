import type { Metadata } from 'next';
import { site } from './data';
import { getDictionary, locales, ogLocale, pagePath, type Locale, type Page } from './i18n';
import { OG_PATH } from './schema';
import { absoluteUrl } from './site';

/** Full metadata for the landing page in one language, with hreflang alternates. */
export function landingMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return pageMetadata('home', locale, meta.title, meta.description);
}

/** Full metadata for the privacy policy page in one language. */
export function privacyMetadata(locale: Locale): Metadata {
  const { privacy } = getDictionary(locale);
  return pageMetadata('privacy', locale, privacy.metaTitle, privacy.metaDescription);
}

function pageMetadata(page: Page, locale: Locale, title: string, description: string): Metadata {
  const { meta } = getDictionary(locale);
  const paths = pagePath[page];
  const url = absoluteUrl(paths[locale]);
  const images = [{ url: absoluteUrl(OG_PATH[locale]), width: 1200, height: 630, alt: meta.ogAlt }];

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(paths[l])])),
        'x-default': absoluteUrl(paths['pt-BR']),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}
