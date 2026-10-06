import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { fleet, fleetSection as copy } from '@/lib/data';
import { messages } from '@/lib/whatsapp';

export function Fleet() {
  return (
    <section id="frota" aria-labelledby="frota-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionTitle id="frota-titulo" label={copy.label} heading={copy.heading} />

        <ul className="mt-12 grid border-l border-t border-line md:grid-cols-3">
          {fleet.map((car) => (
            <li key={car.ref} className="flex flex-col border-b border-r border-line">
              <p className="flex justify-between border-b border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                <span>{car.ref}</span>
                <span>{car.category}</span>
              </p>

              <div className="relative flex aspect-[16/10] items-center justify-center bg-ink-2 px-6">
                {car.image ? (
                  <Image src={car.image.src} alt={car.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
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
                  {car.extras.map((extra) => (
                    <li key={extra} className="flex gap-2">
                      <span aria-hidden="true" className="text-gold">
                        —
                      </span>
                      {extra}
                    </li>
                  ))}
                </ul>

                <WhatsAppLink location="fleet" message={messages.fleet(car.model)} className="link-gold mt-6 inline-flex min-h-[44px] items-center gap-2 self-start">
                  {copy.reserve} <span aria-hidden="true">→</span>
                </WhatsAppLink>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-3 text-text-2">
          <span className="dot-live" aria-hidden="true" />
          {copy.starlinkNote}
        </p>
      </div>
    </section>
  );
}
