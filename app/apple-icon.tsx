import { ImageResponse } from 'next/og';
import { ogFonts } from '@/lib/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
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
          fontSize: 140,
          lineHeight: 1,
          paddingTop: 8,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
