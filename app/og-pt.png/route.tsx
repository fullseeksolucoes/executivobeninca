import { site } from '@/lib/data';
import { getDictionary } from '@/lib/i18n';
import { landingOgImage } from '@/lib/og';

export const dynamic = 'force-static';

/** Open Graph image of the landing page (pt-BR). */
export function GET() {
  return landingOgImage(getDictionary('pt-BR').meta.ogKicker, site.wordmark);
}
