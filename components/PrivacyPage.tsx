import { JsonLd } from '@/components/ui/JsonLd';
import { CONTENT_UPDATED, site } from '@/lib/data';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';
import { privacyGraph } from '@/lib/schema';
import { GA_ID } from '@/lib/site';

const updated = CONTENT_UPDATED.split('-').reverse().join('/');

/** Privacy policy, the only page besides the landing page. */
export function PrivacyPage({ locale }: { locale: Locale }) {
  const { privacy, footer } = getDictionary(locale);
  const sections = privacy.sections.filter((s) => !s.onlyWithAnalytics || GA_ID);
  return (
    <>
      <JsonLd data={privacyGraph(locale, { title: privacy.metaTitle, description: privacy.metaDescription })} />
      <article className="wrap py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="label-mono">
            {privacy.updatedLabel} {updated}
          </p>
          <h1 className="display h2 mt-4">{privacy.title}</h1>

          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-[21px] font-semibold text-paper">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-text-2">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-line pt-6 text-[15px] text-text-2">
            {site.legalName} · {footer.cnpjLabel} {site.cnpj} ·{' '}
            <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4 [overflow-wrap:anywhere]">
              {site.email}
            </a>{' '}
            · {site.phoneDisplay}
          </p>

          <a href={localePath[locale]} className="link-gold mt-10 inline-flex min-h-[44px] items-center gap-2">
            <span aria-hidden="true">←</span> {privacy.backHome}
          </a>
        </div>
      </article>
    </>
  );
}
