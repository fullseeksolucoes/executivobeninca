import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Faq } from '@/components/sections/Faq';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { ContentSections } from '@/components/ui/ContentSections';
import { JsonLd } from '@/components/ui/JsonLd';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { routes, servicePageCopy as copy, services, ui } from '@/lib/data';
import { breadcrumbNode, faqNode, pageGraph, serviceNode } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: PageProps<'/servicos/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicos/${service.slug}`,
    absolute: true,
  });
}

export default async function ServicePageView({ params }: PageProps<'/servicos/[slug]'>) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const path = `/servicos/${service.slug}`;
  const crumbs: Crumb[] = [
    { name: ui.breadcrumbHome, path: '/' },
    { name: ui.breadcrumbServices, path: '/#servicos' },
    { name: service.breadcrumb, path },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph(
          serviceNode({ name: service.h1, serviceType: service.serviceType, path, description: service.metaDescription }),
          faqNode(service.faq, path),
          breadcrumbNode(crumbs),
        )}
      />

      <section aria-labelledby="servico-titulo" className="border-b border-line pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="wrap">
          <Breadcrumbs items={crumbs} />
          <h1 id="servico-titulo" className="display h1-page mt-10 max-w-[16ch]">
            {service.h1}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="lead md:col-span-7">{service.lead}</p>
            <div className="md:col-span-4 md:col-start-9">
              <WhatsAppLink location="service_page" className="btn btn-gold btn-lg w-full">
                {copy.cta} <span className="arrow" aria-hidden="true">→</span>
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <ContentSections sections={service.sections} />
        </div>
        <nav aria-labelledby="rotas-servico" className="lg:col-span-4">
          <div className="border border-line bg-ink-2 p-6 lg:sticky lg:top-28">
            <h2 id="rotas-servico" className="label-mono">
              {copy.routesHeading}
            </h2>
            <ul className="mt-4 border-t border-line">
              {routes.map((r) => (
                <li key={r.slug} className="border-b border-line">
                  <Link href={`/transfer/${r.slug}`} className="flex min-h-[52px] items-center justify-between gap-3 py-2 hover:text-gold">
                    <span>{r.breadcrumb}</span>
                    <span className="font-mono text-[13px] text-gold" aria-hidden="true">
                      {r.boardCode}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <Faq id="duvidas-servico" heading={copy.faqHeading} items={service.faq} />
    </>
  );
}
