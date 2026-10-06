import { CarLineArt } from '@/components/ui/CarLineArt';
import { Icon } from '@/components/ui/Icon';
import { hero } from '@/lib/data';

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-10 md:pt-16">
      <div className="wrap">
        <ul className="label-mono flex flex-wrap gap-x-6 gap-y-2">
          {hero.labels.map((l, i) => (
            <li key={l} className={i === 0 ? 'flex items-center gap-2 text-paper' : ''}>
              {i === 0 && <span className="dot-live" aria-hidden="true" />}
              {l}
            </li>
          ))}
        </ul>

        <h1 id="hero-titulo" className="display h1-home mt-6 max-w-[11ch] md:mt-8">
          {hero.titleBefore} <span className="text-gold">{hero.titleHighlight}</span> {hero.titleAfter}
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-start">
          <p className="lead md:col-span-6">{hero.lead}</p>
          <div className="flex gap-4 border border-line bg-ink-2 p-5 md:col-span-5 md:col-start-8">
            <Icon name="signal" size={26} className="mt-0.5 shrink-0 text-gold" />
            <p>
              <strong className="block font-semibold text-paper">{hero.badgeTitle}</strong>
              <span className="mt-1 block text-[15px] text-text-2">{hero.badgeText}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-y border-line md:mt-14">
        <CarLineArt label={hero.carLabel} />
      </div>
      <div className="wrap flex flex-col gap-2 py-4 font-mono uppercase tracking-[0.12em] sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-[13px] text-muted">{hero.captionFleet}</p>
        <p className="text-[14px] font-semibold text-gold">{hero.captionStarlink}</p>
      </div>
    </section>
  );
}
