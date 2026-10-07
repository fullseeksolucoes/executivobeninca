import { FlapTiles } from '@/components/ui/FlapTiles';
import { InView } from '@/components/ui/InView';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import type { Dictionary } from '@/lib/content/pt';
import { airports } from '@/lib/data';
import { messages } from '@/lib/whatsapp';

export function DepartureBoard({ t }: { t: Dictionary }) {
  const { board: copy, ui } = t;
  const msg = messages(t.whatsapp);
  return (
    <section id="rotas" aria-labelledby="rotas-titulo" className="py-20 md:py-28">
      <div className="wrap">
        <SectionTitle id="rotas-titulo" heading={copy.heading} text={copy.text} />

        <InView
          armedClass="flap-armed"
          tabIndex={0}
          role="region"
          aria-label={copy.caption}
          className="relative mt-12 overflow-x-auto border border-line bg-ink-2"
        >
          <table className="w-full border-collapse font-mono text-[14px] sm:min-w-[720px]">
            <caption className="sr-only">{copy.caption}</caption>
            <thead>
              <tr className="border-b border-line text-left text-[12px] uppercase tracking-[0.14em] text-muted">
                <th scope="col" className="px-3 py-4 font-medium sm:px-5">
                  {copy.columns.code}
                </th>
                <th scope="col" className="px-3 py-4 font-medium sm:px-5">
                  {copy.columns.destination}
                </th>
                <th scope="col" className="hidden px-5 py-4 font-medium sm:table-cell">
                  {copy.columns.time}
                </th>
                <th scope="col" className="hidden px-5 py-4 font-medium sm:table-cell">
                  {copy.columns.price}
                </th>
                <th scope="col" className="px-3 py-4 font-medium sm:px-5">
                  <span className="sr-only">{copy.columns.action}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {airports.map((a, i) => {
                const name = copy.airportNames[a.code];
                return (
                  <tr key={a.code} className="border-b border-line-soft last:border-b-0 hover:bg-ink-3">
                    <td className="px-3 py-4 sm:px-5">
                      <FlapTiles code={a.code} label={`${a.code}, ${name}`} row={i} />
                    </td>
                    <th scope="row" className="px-3 py-4 text-left font-medium sm:px-5">
                      <span className="block text-[15px] uppercase tracking-[0.06em] text-paper">{name}</span>
                      <span className="mt-1 block text-[12px] font-normal tracking-[0.02em] text-muted">{a.officialName}</span>
                      <span className="mt-1 block text-[12px] uppercase tracking-[0.06em] text-muted sm:hidden">
                        {ui.approx} {a.approxTime} · {ui.onRequest}
                      </span>
                    </th>
                    <td className="hidden px-5 py-4 uppercase tracking-[0.06em] text-text-2 sm:table-cell">
                      {ui.approx} {a.approxTime}
                    </td>
                    <td className="hidden px-5 py-4 uppercase tracking-[0.06em] text-text-2 sm:table-cell">{ui.onRequest}</td>
                    <td className="px-3 py-4 text-right sm:px-5">
                      <WhatsAppLink
                        location="board"
                        message={msg.route(copy.from, name)}
                        newTabLabel={ui.newTab}
                        className="btn btn-outline min-h-[44px] whitespace-nowrap px-3 text-[13px] sm:px-4"
                        aria-label={`${ui.quoteAction}: ${name} ${ui.newTab}`}
                      >
                        {ui.quoteAction} <span className="arrow" aria-hidden="true">→</span>
                      </WhatsAppLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </InView>
        <p className="mt-4 text-[14px] text-muted">{copy.footnote}</p>
      </div>
    </section>
  );
}
