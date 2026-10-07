import type { WhatsappLocation } from '@/lib/analytics';
import type { Dictionary } from '@/lib/content/pt';
import { QuoteSentence } from './QuoteSentence';

export function QuoteSection({ t, location }: { t: Dictionary; location: WhatsappLocation }) {
  const copy = t.quoteForm;
  return (
    <section id="cotacao" aria-labelledby="cotacao-titulo" className="border-y border-line bg-ink-2 py-14 md:py-20">
      <div className="wrap">
        <h2 id="cotacao-titulo" className="display mb-8 text-[clamp(32px,3vw,44px)] md:mb-10">
          {copy.heading}
        </h2>
        <QuoteSentence idPrefix="cotacao" copy={copy} templates={t.whatsapp} location={location} />
      </div>
    </section>
  );
}
