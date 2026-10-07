import { Icon } from '@/components/ui/Icon';
import type { Dictionary } from '@/lib/content/pt';

export function Hero({ t }: { t: Dictionary }) {
  const { hero } = t;
  const badges = [
    { icon: 'signal' as const, title: hero.badgeTitle, text: hero.badgeText },
    { icon: 'globe' as const, title: hero.languageBadgeTitle, text: hero.languageBadgeText },
  ];
  return (
    <section aria-labelledby="hero-titulo" className="pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="wrap">
        <p className="label-mono">{hero.label}</p>

        <div className="mt-6 grid gap-10 md:mt-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h1 id="hero-titulo" className="display h1-home max-w-[11ch]">
              {hero.titleBefore} <span className="text-gold">{hero.titleHighlight}</span> {hero.titleAfter}
            </h1>
            <p className="lead mt-8 max-w-2xl md:mt-10">{hero.lead}</p>
          </div>
          <ul className="grid gap-3 lg:col-span-5">
            {badges.map((b) => (
              <li key={b.title} className="flex gap-4 border border-line bg-ink-2 p-5">
                <Icon name={b.icon} size={26} className="mt-0.5 shrink-0 text-gold" />
                <p>
                  <strong className="block font-semibold text-paper">{b.title}</strong>
                  <span className="mt-1 block text-[15px] text-text-2">{b.text}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
