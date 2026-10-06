import type { Dictionary } from '@/lib/content/pt';
import { serviceArea } from '@/lib/data';

export function Region({ t }: { t: Dictionary }) {
  const copy = t.region;
  return (
    <section id="regiao" aria-labelledby="regiao-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-4">{copy.label}</p>
            <h2 id="regiao-titulo" className="display h2">
              {copy.headingStart} <span className="text-gold">{copy.headingHighlight}</span>
            </h2>
          </div>
          <p className="text-text-2 md:col-span-4">{copy.text}</p>
        </div>

        <p className="label-mono mt-14">{copy.north}</p>
        <ol className="coast mt-6" aria-label={copy.listLabel}>
          {serviceArea.map((city) => (
            <li key={city.name} className={`coast-stop ${city.base ? 'is-airport' : ''}`}>
              <span className="coast-dot" aria-hidden="true" />
              <span className={`font-semibold leading-tight ${city.base ? 'text-paper' : 'text-text-2'}`}>{city.name}</span>
              {city.base && (
                <span className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-gold">
                  {[copy.base, city.airportCode].filter(Boolean).join(' · ')}
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="label-mono mt-6 md:text-right">{copy.south}</p>
      </div>
    </section>
  );
}
