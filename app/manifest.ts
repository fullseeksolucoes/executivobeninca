import type { MetadataRoute } from 'next';
import { homeSeo, site } from '@/lib/data';
import { ICON_512_PATH } from '@/lib/schema';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: homeSeo.description,
    lang: 'pt-BR',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      { src: '/icon/pwa-192', sizes: '192x192', type: 'image/png' },
      { src: ICON_512_PATH, sizes: '512x512', type: 'image/png' },
      { src: ICON_512_PATH, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
