import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED } from '@/lib/data';
import { localePath, locales } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath[l])]));
  return locales.map((locale) => ({
    url: absoluteUrl(localePath[locale]),
    lastModified: CONTENT_UPDATED,
    changeFrequency: 'monthly',
    priority: locale === 'pt-BR' ? 1 : 0.8,
    alternates: { languages },
  }));
}
