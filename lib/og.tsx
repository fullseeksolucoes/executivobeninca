import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/** Brand fonts for ImageResponse (needs TTF, not woff2). */
export async function ogFonts() {
  const dir = join(process.cwd(), 'assets/fonts');
  const [display, mono] = await Promise.all([
    readFile(join(dir, 'BigShoulders-Black-72.ttf')),
    readFile(join(dir, 'IBMPlexMono-SemiBold.ttf')),
  ]);
  return [
    { name: 'Display', data: display, weight: 900 as const, style: 'normal' as const },
    { name: 'Mono', data: mono, weight: 600 as const, style: 'normal' as const },
  ];
}

export const OG_SIZE = { width: 1200, height: 630 };

const GOLD = '#D6B25E';

/** Board-style letters for OG images. */
export function OgTiles({ code, tile = 120 }: { code: string; tile?: number }) {
  return (
    <div style={{ display: 'flex', gap: tile * 0.1 }}>
      {code.split('').map((c, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: tile,
            height: tile * 1.27,
            background: '#1C1C1C',
            borderTop: '3px solid #333',
            borderRadius: 4,
            color: GOLD,
            fontFamily: 'Mono',
            fontSize: tile * 0.7,
            position: 'relative',
          }}
        >
          {c}
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: '#0A0A0A' }} />
        </div>
      ))}
    </div>
  );
}

/** Open Graph image of the landing page, in one language. */
export async function landingOgImage(kicker: string, wordmark: string) {
  const { ImageResponse } = await import('next/og');
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
          borderBottom: `8px solid ${GOLD}`,
        }}
      >
        <div style={{ display: 'flex', fontFamily: 'Mono', fontSize: 24, letterSpacing: 4, color: '#9A958B', textTransform: 'uppercase' }}>
          {kicker}
        </div>
        <div style={{ display: 'flex', fontFamily: 'Display', fontSize: 200, lineHeight: 0.85, color: GOLD, textTransform: 'uppercase' }}>
          {wordmark}
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {['JOI', 'NVT', 'CWB', 'FLN'].map((code) => (
            <OgTiles key={code} code={code} tile={58} />
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await ogFonts() },
  );
}
