/** The only place that knows the public URL of the site. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.beninca.com.br').replace(/\/+$/, '');

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || '';
