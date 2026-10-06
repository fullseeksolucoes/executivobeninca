import type { MetadataRoute } from 'next';
import { CONTENT_UPDATED, routes, services } from '@/lib/data';
import { absoluteUrl } from '@/lib/site';

const lastModified = CONTENT_UPDATED;

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: 'monthly',
    priority,
  });

  return [
    entry('/', 1),
    ...routes.map((r) => entry(`/transfer/${r.slug}`, 0.9)),
    ...services.map((s) => entry(`/servicos/${s.slug}`, 0.8)),
    entry('/empresas', 0.8),
    entry('/politica-de-privacidade', 0.2),
  ];
}
