import Link from 'next/link';
import { FinalCta } from '@/components/sections/FinalCta';
import { Icon } from '@/components/ui/Icon';
import { trackAttrs } from '@/lib/analytics';
import { CONTENT_UPDATED, footer, routes, site } from '@/lib/data';

const year = CONTENT_UPDATED.slice(0, 4);

const colTitle = 'label-mono mb-5';
const linkClass = 'inline-flex min-h-[44px] items-center text-text-2 underline-offset-4 hover:text-gold hover:underline';

export function Footer() {
  const { address } = site;
  return (
    <footer className="overflow-hidden border-t border-line">
      <FinalCta />

      <div className="wrap grid gap-10 border-t border-line py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className={colTitle}>{footer.columns.contact}</h2>
          <address className="not-italic">
            <a href={`mailto:${site.email}`} className={`${linkClass} gap-2 break-all`}>
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
            {footer.siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={footer.routesNavLabel}>
          <h2 className={colTitle}>{footer.columns.routes}</h2>
          <ul>
            {routes.map((r) => (
              <li key={r.slug}>
                <Link href={`/transfer/${r.slug}`} className={linkClass}>
                  {r.breadcrumb}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
            © {year} {site.name} · {footer.cnpjLabel} {site.cnpj}
          </p>
          <Link href="/politica-de-privacidade" className="inline-flex min-h-[44px] items-center underline-offset-4 hover:text-gold hover:underline">
            {footer.privacy}
          </Link>
        </div>
      </div>

      <div className="wrap" aria-hidden="true">
        <p className="wordmark-giant">{site.wordmark}</p>
      </div>
    </footer>
  );
}
