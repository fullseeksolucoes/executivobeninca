import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import type { Dictionary } from '@/lib/content/pt';
import { messages } from '@/lib/whatsapp';

export function Services({ t }: { t: Dictionary }) {
  const copy = t.services;
  const msg = messages(t.whatsapp);
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionTitle id="servicos-titulo" label={copy.label} heading={copy.heading} />
        <ol className="mt-12 border-t border-line">
          {copy.items.map((item, i) => (
            <li
              key={item.title}
              className="grid gap-2 border-b border-line px-1 py-6 md:grid-cols-[80px_minmax(0,5fr)_minmax(0,6fr)_auto] md:items-center md:gap-6 md:px-4 md:py-8"
            >
              <span className="font-mono text-[13px] text-muted" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-[34px] md:text-[44px]">{item.title}</h3>
              <p className="text-text-2">{item.summary}</p>
              <WhatsAppLink
                location="services"
                message={msg.service(item.topic)}
                newTabLabel={t.ui.newTab}
                aria-label={`${copy.action}: ${item.title} ${t.ui.newTab}`}
                className="service-row link-gold mt-2 inline-flex min-h-[44px] items-center gap-2 justify-self-start md:mt-0"
              >
                {copy.action} <span className="arrow" aria-hidden="true">→</span>
              </WhatsAppLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
