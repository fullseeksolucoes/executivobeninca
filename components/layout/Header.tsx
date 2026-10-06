import { Logo } from '@/components/ui/Logo';
import type { Dictionary } from '@/lib/content/pt';
import { localePath, type Locale } from '@/lib/i18n';
import { LangSwitch } from './LangSwitch';
import { MobileMenu } from './MobileMenu';

interface Props {
  t: Dictionary;
  locale: Locale;
  whatsappHref: string;
}

export function Header({ t, locale, whatsappHref }: Props) {
  const { ui } = t;
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-ink">
      <div className="wrap flex h-[76px] items-center justify-between gap-5">
        <a href={localePath[locale]} aria-label={ui.homeLinkLabel} className="relative z-[60] flex shrink-0 items-center">
          <Logo tagline={ui.tagline} priority />
        </a>

        <div className="flex items-center gap-4 xl:gap-5">
          <nav aria-label={ui.navLabel} className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-text-2 underline-offset-8 hover:text-gold hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <LangSwitch locale={locale} ui={ui} className="relative z-[60]" />
          <a href="#cotacao" className="btn btn-gold hidden whitespace-nowrap sm:inline-flex">
            {ui.headerCta} <span className="arrow" aria-hidden="true">→</span>
          </a>
          <MobileMenu nav={t.nav} ui={ui} whatsappHref={whatsappHref} />
        </div>
      </div>
    </header>
  );
}
