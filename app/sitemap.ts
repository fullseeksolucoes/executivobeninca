import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED } from '@/lib/data';
import { locales, pagePath } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/site';

const priority = { home: { 'pt-BR': 1, en: 0.8 }, privacy: { 'pt-BR': 0.3, en: 0.2 } } as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pagePath).flatMap(([page, paths]) => {
    const languages = Object.fromEntries(locales.map((l) => [l, absoluteUrl(paths[l])]));
    return locales.map((locale) => ({
      url: absoluteUrl(paths[locale]),
      lastModified: CONTENT_UPDATED,
      changeFrequency: page === 'home' ? ('monthly' as const) : ('yearly' as const),
      priority: priority[page as keyof typeof pagePath][locale],
      alternates: { languages },
    }));
  });
}
