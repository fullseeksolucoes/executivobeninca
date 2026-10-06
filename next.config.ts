import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  experimental: {
    // Two root layouts (pt-BR and en), so the 404 page is app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
