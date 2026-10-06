import { SectionTitle } from '@/components/ui/SectionTitle';
import type { Dictionary } from '@/lib/content/pt';

export function Protocol({ t }: { t: Dictionary }) {
  const copy = t.protocol;
  const clauses = copy.clauses.filter((c) => c.confirmed);
  return (
    <section aria-labelledby="protocolo-titulo" className="bg-paper py-20 text-ink md:py-28">
      <div className="wrap">
        <SectionTitle id="protocolo-titulo" label={copy.label} heading={copy.heading} text={copy.subheading} tone="light" />
        <ol className="mt-12 grid border-t border-ink/20 md:grid-cols-2">
          {clauses.map((c, i) => (
            <li key={c.title} className="grid grid-cols-[56px_minmax(0,1fr)] gap-2 border-b border-ink/20 py-6 md:pr-10 md:odd:border-r md:even:pl-10">
              <span className="font-mono text-[15px] font-semibold text-gold-ink" aria-hidden="true">
                § {i + 1}
              </span>
              <p>
                <strong className="block text-[19px] font-semibold">{c.title}</strong>
                <span className="mt-1 block text-ink/75">{c.text}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
