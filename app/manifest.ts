import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';
import { getDictionary } from '@/lib/i18n';
import { ICON_512_PATH } from '@/lib/schema';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: getDictionary('pt-BR').meta.description,
    lang: 'pt-BR',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      { src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: ICON_512_PATH, sizes: '512x512', type: 'image/png' },
      { src: ICON_512_PATH, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
