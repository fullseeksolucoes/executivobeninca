import type { WhatsappLocation } from '@/lib/analytics';
import { quoteForm } from '@/lib/data';
import { QuoteSentence } from './QuoteSentence';

interface Props {
  id?: string;
  heading?: string;
  defaultOrigin?: string;
  defaultDestination?: string;
  location: WhatsappLocation;
}

export function QuoteSection({ id = 'cotacao', heading = quoteForm.heading, defaultOrigin, defaultDestination, location }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="border-y border-line bg-ink-2 py-14 md:py-20">
      <div className="wrap">
        <p className="label-mono mb-3">{quoteForm.sectionLabel}</p>
        <h2 id={`${id}-titulo`} className="display mb-8 text-[clamp(32px,3vw,44px)] md:mb-10">
          {heading}
        </h2>
        <QuoteSentence idPrefix={id} defaultOrigin={defaultOrigin} defaultDestination={defaultDestination} location={location} />
      </div>
    </section>
  );
}
