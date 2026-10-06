import { getDictionary } from '@/lib/i18n';
import { landingOgImage } from '@/lib/og';

export const dynamic = 'force-static';

/** Open Graph image of the landing page (pt-BR). */
export function GET() {
  const t = getDictionary('pt-BR');
  return landingOgImage(t.meta.ogKicker, t.meta.ogHeadline);
}
