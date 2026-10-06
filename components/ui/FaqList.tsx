import type { FaqEntry } from '@/lib/types';

/** Native <details> accordion: accessible and without JavaScript. */
export function FaqList({ items, headingLevel = 3 }: { items: FaqEntry[]; headingLevel?: 3 | 4 }) {
  const Heading = `h${headingLevel}` as 'h3' | 'h4';
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="faq-item group border-b border-line">
          <summary className="flex min-h-[64px] items-center gap-4 py-4 hover:text-gold">
            <span className="faq-marker font-mono text-gold" aria-hidden="true">
              ▸
            </span>
            <Heading className="text-[19px] font-semibold leading-snug md:text-[21px]">{item.q}</Heading>
          </summary>
          <p className="max-w-3xl pb-6 pl-8 text-text-2">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
