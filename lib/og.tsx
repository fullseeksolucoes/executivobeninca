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

/** Open Graph image of the landing page: client logo on the left, kicker and airport codes on the right. */
export async function landingOgImage(kicker: string, headline: string) {
  const { ImageResponse } = await import('next/og');
  const logo = await readFile(join(process.cwd(), 'public/brand/beninca-logo.jpg'));
  const logoSrc = `data:image/jpeg;base64,${logo.toString('base64')}`;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#0A0A0A', borderBottom: `8px solid ${GOLD}` }}>
        <div style={{ display: 'flex', width: 622, height: 622, background: '#000' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={622} height={622} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40, padding: '0 56px', flex: 1 }}>
          <div style={{ display: 'flex', fontFamily: 'Mono', fontSize: 20, letterSpacing: 3, color: '#9A958B', textTransform: 'uppercase' }}>
            {kicker}
          </div>
          <div style={{ display: 'flex', fontFamily: 'Display', fontSize: 64, lineHeight: 0.95, color: '#F4F1EA', textTransform: 'uppercase' }}>
            {headline}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
            {['JOI', 'NVT', 'CWB', 'FLN'].map((code) => (
              <OgTiles key={code} code={code} tile={30} />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await ogFonts() },
  );
}
