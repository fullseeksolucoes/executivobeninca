import type { Metadata } from 'next';
import Link from 'next/link';
import { FlapTiles } from '@/components/ui/FlapTiles';
import { InView } from '@/components/ui/InView';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { notFoundPage as copy, routes, ui } from '@/lib/data';

export const metadata: Metadata = {
  title: copy.code,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="wrap py-16 md:py-24">
      <p className="label-mono">{copy.label}</p>
      <InView armedClass="flap-armed" className="mt-6">
        <FlapTiles code="404" label={copy.code} />
      </InView>
      <p className="mt-6 font-mono text-[15px] font-semibold uppercase tracking-[0.14em] text-gold">{copy.code}</p>
      <h1 className="display h1-page mt-4 max-w-[14ch]">{copy.heading}</h1>
      <p className="lead mt-6 max-w-2xl">{copy.text}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-outline btn-lg">
          {copy.home}
        </Link>
        <WhatsAppLink location="not_found" className="btn btn-gold btn-lg">
          {copy.whatsapp} <span className="arrow" aria-hidden="true">→</span>
        </WhatsAppLink>
      </div>

      <h2 className="label-mono mt-16">{copy.routesHeading}</h2>
      <ul className="mt-4 border-t border-line">
        {routes.map((r) => (
          <li key={r.slug} className="border-b border-line">
            <Link href={`/transfer/${r.slug}`} className="grid min-h-[56px] grid-cols-[64px_1fr_auto] items-center gap-4 font-mono hover:bg-ink-3">
              <span className="font-semibold tracking-[0.14em] text-gold">{r.boardCode}</span>
              <span className="uppercase tracking-[0.06em]">{r.boardLabel}</span>
              <span className="hidden text-[13px] uppercase text-muted sm:block">
                {ui.approx} {r.approxTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
