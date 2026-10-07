import Image from 'next/image';
import { FinalCta } from '@/components/sections/FinalCta';
import { Icon } from '@/components/ui/Icon';
import { trackAttrs } from '@/lib/analytics';
import type { Dictionary } from '@/lib/content/pt';
import { CONTENT_UPDATED, developer, serviceArea, site } from '@/lib/data';
import { pagePath, sectionHref, type Locale } from '@/lib/i18n';

const year = CONTENT_UPDATED.slice(0, 4);

const colTitle = 'label-mono mb-5';
const linkClass = 'inline-flex min-h-[44px] items-center text-text-2 underline-offset-4 hover:text-gold hover:underline';

export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const { address } = site;
  const { footer, privacy } = t;

  return (
    <footer className="overflow-hidden border-t border-line">
      <FinalCta t={t} />

      <div className="wrap grid gap-10 border-t border-line py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={site.logo.full.src}
            alt={site.name}
            width={site.logo.full.width}
            height={site.logo.full.height}
            sizes="128px"
            draggable={false}
            className="mb-8 h-32 w-32 border border-line"
          />
          <h2 className={colTitle}>{footer.columns.contact}</h2>
          <address className="not-italic">
            <a href={`mailto:${site.email}`} className={`${linkClass} gap-2 text-[15px] [overflow-wrap:anywhere]`}>
              <Icon name="mail" size={18} className="shrink-0" />
              {site.email}
            </a>
            <p className="mt-2 flex gap-2 text-text-2">
              <Icon name="pin" size={18} className="mt-1 shrink-0" />
              <span>
                {address.street}
                <br />
                {address.district} – {address.city} – {address.region}
                {address.postalCode && (
                  <>
                    <br />
                    {address.postalCode}
                  </>
                )}
              </span>
            </p>
          </address>
        </div>

        <nav aria-label={footer.siteNavLabel}>
          <h2 className={colTitle}>{footer.columns.site}</h2>
          <ul>
            {t.nav.map((l) => (
              <li key={l.href}>
                <a href={sectionHref(locale, l.href)} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={colTitle}>{footer.columns.area}</h2>
          <ul className="space-y-2 text-text-2">
            {[...serviceArea]
              .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
              .map((c) => (
                <li key={c.name}>{c.name}</li>
              ))}
          </ul>
          <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.1em] text-muted">{footer.airportsLabel}</p>
        </div>

        <div>
          <h2 className={colTitle}>{footer.columns.social}</h2>
          <ul>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} gap-2`}
                {...trackAttrs('click_instagram', 'footer')}
              >
                <Icon name="instagram" size={18} />
                {site.instagramHandle}
              </a>
            </li>
            {site.googleBusinessUrl && (
              <li>
                <a href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {footer.googleBusiness}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 font-mono text-[12px] uppercase tracking-[0.1em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {footer.cnpjLabel} {site.cnpj} ·{' '}
            <a href={pagePath.privacy[locale]} className="underline underline-offset-4 hover:text-gold">
              {privacy.title}
            </a>
          </p>
          <p>
            {footer.developedBy}{' '}
            <a href={developer.url} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-gold">
              {developer.name}
            </a>
          </p>
        </div>
      </div>

      <div className="wrap" aria-hidden="true">
        <p className="wordmark-giant">{site.wordmark}</p>
      </div>
    </footer>
  );
}
