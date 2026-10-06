import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { servicesSection as copy } from '@/lib/data';

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionTitle id="servicos-titulo" label={copy.label} heading={copy.heading} />
        <ol className="mt-12 border-t border-line">
          {copy.items.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <Link
                href={item.href}
                className="service-row grid gap-2 px-1 py-6 transition-colors hover:bg-ink-3 md:grid-cols-[80px_minmax(0,5fr)_minmax(0,6fr)_40px] md:items-center md:gap-6 md:px-4 md:py-8"
              >
                <span className="font-mono text-[13px] text-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display text-[34px] md:text-[44px]">{item.title}</span>
                <span className="text-text-2">{item.summary}</span>
                <span className="arrow hidden font-mono text-xl text-gold md:block" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
