import { coastLine as copy } from '@/lib/data';

export function CoastLine() {
  return (
    <section aria-labelledby="litoral-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-4">{copy.label}</p>
            <h2 id="litoral-titulo" className="display h2">
              {copy.headingStart} <span className="text-gold">{copy.headingHighlight}</span>
            </h2>
          </div>
          <p className="text-text-2 md:col-span-4">{copy.text}</p>
        </div>

        <p className="label-mono mt-14">{copy.north}</p>
        <ol className="coast mt-6" aria-label={copy.listLabel}>
          {copy.stops.map((stop) => (
            <li key={stop.name} className={`coast-stop ${stop.code ? 'is-airport' : ''}`}>
              <span className="coast-dot" aria-hidden="true" />
              <span className={`font-semibold leading-tight ${stop.code ? 'text-paper' : 'text-text-2'}`}>{stop.name}</span>
              {(stop.note || stop.code) && (
                <span className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-gold">
                  {[stop.note, stop.code].filter(Boolean).join(' · ')}
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
