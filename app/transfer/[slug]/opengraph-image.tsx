import { ImageResponse } from 'next/og';
import { routes, site, ui } from '@/lib/data';
import { OG_SIZE, OgTiles, ogFonts } from '@/lib/og';

export const alt = site.name;
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug) ?? routes[0];
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          color: '#F4F1EA',
          padding: 72,
          borderBottom: '8px solid #D6B25E',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Mono', fontSize: 24, letterSpacing: 4, color: '#9A958B', textTransform: 'uppercase' }}>
          <span>Saída · Joinville</span>
          <span style={{ color: '#D6B25E' }}>{site.wordmark}</span>
        </div>
        <OgTiles code={route.boardCode} tile={130} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', fontFamily: 'Display', fontSize: 84, lineHeight: 0.9, textTransform: 'uppercase' }}>{route.boardLabel}</div>
          <div style={{ display: 'flex', fontFamily: 'Mono', fontSize: 26, letterSpacing: 3, color: '#C9C3B8', textTransform: 'uppercase' }}>
            {`${ui.approx} ${route.approxTime} · ${ui.onRequest}`}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
