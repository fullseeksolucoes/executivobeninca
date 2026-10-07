import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import type { Dictionary } from '@/lib/content/pt';
import { fleet } from '@/lib/data';
import { messages } from '@/lib/whatsapp';

export function Fleet({ t }: { t: Dictionary }) {
  const copy = t.fleet;
  const msg = messages(t.whatsapp);
  return (
    <section id="frota" aria-labelledby="frota-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionTitle id="frota-titulo" heading={copy.heading} />

        <ul className="mt-12 grid border-l border-t border-line md:grid-cols-3">
          {fleet.map((car) => {
            const details = copy.details[car.model];
            return (
              <li key={car.model} className="flex flex-col border-b border-r border-line">
                <p className="border-b border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                  {details.category}
                </p>

                <div className="relative flex aspect-[16/10] items-center justify-center bg-ink-2 px-6">
                  {car.image ? (
                    <Image src={car.image.src} alt={car.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" draggable={false} className="object-cover" />
                  ) : (
                    <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted" aria-hidden="true">
                      {copy.photoPending}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="display h3">{car.model}</h3>
                  <dl className="mt-5 grid grid-cols-3 border-y border-line font-mono">
                    <div className="py-3">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{copy.terms.passengers}</dt>
                      <dd className="mt-1 text-[22px] font-semibold text-paper">{car.passengers}</dd>
                    </div>
                    <div className="border-l border-line py-3 pl-4">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{copy.terms.year}</dt>
                      <dd className="mt-1 text-[22px] font-semibold text-paper">{car.year}</dd>
                    </div>
                    {car.luggage?.confirmed && (
                      <div className="border-l border-line py-3 pl-4">
                        <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{copy.terms.luggage}</dt>
                        <dd className="mt-1 text-[22px] font-semibold text-paper">{car.luggage.value}</dd>
                      </div>
                    )}
                  </dl>

                  <p className="label-mono mt-5">{copy.extrasLabel}</p>
                  <ul className="mt-2 flex-1 space-y-1 text-[15px] text-text-2">
                    {details.extras.map((extra) => (
                      <li key={extra} className="flex gap-2">
                        <span aria-hidden="true" className="text-gold">
                          —
                        </span>
                        {extra}
                      </li>
                    ))}
                  </ul>

                  <WhatsAppLink
                    location="fleet"
                    message={msg.fleet(car.model)}
                    newTabLabel={t.ui.newTab}
                    className="link-gold mt-6 inline-flex min-h-[44px] items-center gap-2 self-start"
                  >
                    {copy.reserve} <span aria-hidden="true">→</span>
                  </WhatsAppLink>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-text-2">
          {copy.starlinkNote}
        </p>
      </div>
    </section>
  );
}
