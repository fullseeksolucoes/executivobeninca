import type { Metadata } from 'next';
import { ContentSections } from '@/components/ui/ContentSections';
import { JsonLd } from '@/components/ui/JsonLd';
import { CONTENT_UPDATED, privacyPage as copy, site } from '@/lib/data';
import { pageGraph } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { GA_ID } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: copy.metaTitle,
  description: copy.metaDescription,
  path: '/politica-de-privacidade',
});

const updated = CONTENT_UPDATED.split('-').reverse().join('/');

export default function PrivacyPage() {
  const sections = copy.sections.filter((s) => !s.onlyWithAnalytics || GA_ID);
  return (
    <>
      <JsonLd data={pageGraph()} />
      <div className="wrap max-w-4xl py-14 md:py-20">
        <h1 className="display h1-page">{copy.h1}</h1>
        <p className="label-mono mt-6">
          {copy.updatedLabel} {updated}
        </p>
        <div className="mt-14">
          <ContentSections sections={sections} />
        </div>
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="display h3">{copy.contactHeading}</h2>
          <address className="mt-4 not-italic text-text-2">
            {site.legalName} · CNPJ {site.cnpj}
            <br />
            <a href={`mailto:${site.email}`} className="break-all text-gold underline underline-offset-4">
              {site.email}
            </a>{' '}
            · {site.phoneDisplay}
          </address>
        </section>
      </div>
    </>
  );
}
