import type { Metadata } from 'next';
import { site } from './data';
import { absoluteUrl } from './site';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the "| Beninca" template. */
  absolute?: boolean;
  /** Open Graph image path. Defaults to the home image. */
  image?: { path: string; alt: string };
}

const DEFAULT_IMAGE = { path: '/opengraph-image', alt: site.name };

/**
 * Full metadata for a page. Open Graph and Twitter are repeated here because
 * a page's `openGraph` object replaces the layout's one instead of merging.
 */
export function pageMetadata({ title, description, path, absolute, image = DEFAULT_IMAGE }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absolute ? title : `${title} | ${site.shortName}`;
  const images = [{ url: absoluteUrl(image.path), width: 1200, height: 630, alt: image.alt }];

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: 'pt_BR',
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images,
    },
  };
}
