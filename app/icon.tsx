import { ImageResponse } from 'next/og';
import { ogFonts } from '@/lib/og';

const SIZES = { favicon: 32, 'pwa-192': 192, 'pwa-512': 512 } as const;
type IconId = keyof typeof SIZES;

export function generateImageMetadata() {
  return (Object.keys(SIZES) as IconId[]).map((id) => ({
    id,
    size: { width: SIZES[id], height: SIZES[id] },
    contentType: 'image/png',
  }));
}

/** Brand mark: gold "B" on black. Replace with the client logo when available. */
export default async function Icon({ id }: { id: Promise<string | number> }) {
  const px = SIZES[(await id) as IconId] ?? 512;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0A',
          color: '#D6B25E',
          fontFamily: 'Display',
          fontSize: px * 0.78,
          lineHeight: 1,
          paddingTop: px * 0.04,
        }}
      >
        B
      </div>
    ),
    { width: px, height: px, fonts: await ogFonts() },
  );
}
