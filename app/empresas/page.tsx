import type { Metadata } from 'next';
import { CorporateForm } from '@/components/sections/CorporateForm';
import { Faq } from '@/components/sections/Faq';
import { Breadcrumbs, type Crumb } from '@/components/ui/Breadcrumbs';
import { ContentSections } from '@/components/ui/ContentSections';
import { JsonLd } from '@/components/ui/JsonLd';
import { companiesPage as copy, site, ui } from '@/lib/data';
import { breadcrumbNode, faqNode, pageGraph, serviceNode } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

const PATH = '/empresas';

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: PATH,
  absolute: true,
});

const crumbs: Crumb[] = [
  { name: ui.breadcrumbHome, path: '/' },
  { name: copy.breadcrumb, path: PATH },
];

export default function CompaniesPage() {
  return (
    <>
      <JsonLd
        data={pageGraph(
          serviceNode({ name: copy.h1, serviceType: copy.serviceType, path: PATH, description: copy.metaDescription }),
          faqNode(copy.faq, PATH),
          breadcrumbNode(crumbs),
        )}
      />

      <section aria-labelledby="empresas-titulo" className="border-b border-line pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="wrap">
          <Breadcrumbs items={crumbs} />
          <p className="label-mono mt-10">{copy.label}</p>
          <h1 id="empresas-titulo" className="display h1-page mt-4 max-w-[14ch]">
            {copy.h1}
          </h1>
          <p className="lead mt-8 max-w-3xl">{copy.lead}</p>
        </div>
      </section>

      <div className="wrap grid gap-14 py-20 md:py-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <ContentSections sections={copy.sections} />
        </div>
        <section aria-labelledby="proposta-titulo" className="lg:col-span-5">
          <div className="border border-line bg-ink-2 p-5 sm:p-8">
            <h2 id="proposta-titulo" className="display text-[clamp(32px,3vw,44px)]">
              {copy.formHeading}
            </h2>
            <p className="mb-6 mt-3 text-text-2">{copy.formText}</p>
            <CorporateForm idPrefix="empresa-pagina" />
            <p className="mt-6 border-t border-line pt-5 text-[15px] text-text-2">
              {copy.emailText}{' '}
              <a href={`mailto:${site.email}`} className="break-all text-gold underline underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
        </section>
      </div>

      <Faq id="duvidas-empresas" heading={copy.faqHeading} items={copy.faq} />
    </>
  );
}
