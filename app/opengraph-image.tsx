import { ImageResponse } from 'next/og';
import { homeSeo, site } from '@/lib/data';
import { OG_SIZE, OgTiles, ogFonts } from '@/lib/og';

export const alt = homeSeo.ogAlt;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
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
        <div style={{ display: 'flex', fontFamily: 'Mono', fontSize: 24, letterSpacing: 4, color: '#9A958B', textTransform: 'uppercase' }}>
          {site.tagline} · Joinville – SC
        </div>
        <div style={{ display: 'flex', fontFamily: 'Display', fontSize: 200, lineHeight: 0.85, color: '#D6B25E', textTransform: 'uppercase' }}>
          {site.wordmark}
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {['JOI', 'NVT', 'CWB', 'FLN'].map((code) => (
            <OgTiles key={code} code={code} tile={58} />
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
