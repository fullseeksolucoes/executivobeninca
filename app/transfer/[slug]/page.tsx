import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Faq } from '@/components/sections/Faq';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { ContentSections } from '@/components/ui/ContentSections';
import { FlapTiles } from '@/components/ui/FlapTiles';
import { InView } from '@/components/ui/InView';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { airports, routePageCopy as copy, routes, ui } from '@/lib/data';
import { breadcrumbNode, faqNode, pageGraph, serviceNode } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { messages } from '@/lib/whatsapp';

export const dynamicParams = false;

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

function findRoute(slug: string) {
  return routes.find((r) => r.slug === slug);
}

export async function generateMetadata({ params }: PageProps<'/transfer/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const route = findRoute(slug);
  if (!route) return {};
  return pageMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/transfer/${route.slug}`,
    absolute: true,
    image: { path: `/transfer/${route.slug}/opengraph-image`, alt: route.h1 },
  });
}

export default async function RoutePageView({ params }: PageProps<'/transfer/[slug]'>) {
  const { slug } = await params;
  const route = findRoute(slug);
  if (!route) notFound();

  const path = `/transfer/${route.slug}`;
  const airport = airports.find((a) => a.code === route.airportCode);
  const others = routes.filter((r) => r.slug !== route.slug);
  const crumbs: Crumb[] = [
    { name: ui.breadcrumbHome, path: '/' },
    { name: ui.breadcrumbRoutes, path: '/#rotas' },
    { name: route.breadcrumb, path },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph(
          serviceNode({
            name: route.h1,
            serviceType: copy.serviceType,
            path,
            description: route.metaDescription,
            areaServed: [route.from, airport?.city.replace(/ \(.*\)$/, '') ?? route.to],
          }),
          faqNode(route.faq, path),
          breadcrumbNode(crumbs),
        )}
      />

      <section aria-labelledby="rota-titulo" className="pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="wrap">
          <Breadcrumbs items={crumbs} />
          <InView armedClass="flap-armed" className="mt-10">
            <FlapTiles code={route.boardCode} label={`${route.boardCode}, ${route.boardLabel}`} />
          </InView>
          <h1 id="rota-titulo" className="display h1-page mt-6 max-w-[16ch]">
            {route.h1}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <p className="lead md:col-span-7">{route.lead}</p>
            <dl className="grid grid-cols-2 self-start border border-line font-mono md:col-span-4 md:col-start-9">
              <div className="p-4">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{copy.timeLabel}</dt>
                <dd className="mt-1 text-[20px] font-semibold uppercase text-paper">
                  {ui.approx} {route.approxTime}
                </dd>
              </div>
              <div className="border-l border-line p-4">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{copy.priceLabel}</dt>
                <dd className="mt-1 text-[20px] font-semibold uppercase text-gold">{ui.onRequest}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <QuoteSection
        heading={copy.quoteHeading}
        defaultOrigin={route.quote.origin}
        defaultDestination={route.quote.destination}
        location="route_page"
      />

      <div className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <ContentSections sections={[...route.sections, { heading: route.aboutHeading, body: route.about }]} />
        </div>
        <aside className="lg:col-span-4">
          <div className="border border-line bg-ink-2 p-6 lg:sticky lg:top-28">
            <p className="label-mono">{route.breadcrumb}</p>
            <p className="mt-3 text-text-2">{copy.asideText(route.to)}</p>
            <WhatsAppLink location="route_page" message={messages.route(route.from, route.to)} className="btn btn-gold btn-lg mt-6 w-full">
              {copy.ctaWhatsapp} <span className="arrow" aria-hidden="true">→</span>
            </WhatsAppLink>
          </div>
        </aside>
      </div>

      <Faq id="duvidas-rota" heading={copy.faqHeading} items={route.faq} />

      <nav aria-labelledby="outras-rotas" className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <p className="label-mono mb-4">{copy.otherRoutesLabel}</p>
          <h2 id="outras-rotas" className="display h2">
            {copy.otherRoutesHeading}
          </h2>
          <ul className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((r) => (
              <li key={r.slug} className="border-b border-r border-line">
                <Link href={`/transfer/${r.slug}`} className="flex h-full min-h-[120px] flex-col justify-between gap-4 p-5 hover:bg-ink-3">
                  <span className="font-mono text-[14px] font-semibold tracking-[0.14em] text-gold">{r.boardCode}</span>
                  <span className="font-semibold leading-snug">{r.breadcrumb}</span>
                  <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                    {ui.approx} {r.approxTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
