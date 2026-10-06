import { localePath, type Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/content/pt';

/** Link to the same landing page in the other language (full page load: separate root layouts). */
export function LangSwitch({ locale, ui, className = '' }: { locale: Locale; ui: Dictionary['ui']; className?: string }) {
  const target: Locale = locale === 'en' ? 'pt-BR' : 'en';
  return (
    <a
      href={localePath[target]}
      hrefLang={target}
      lang={target}
      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-line px-3 font-mono text-[13px] font-semibold tracking-[0.12em] text-paper hover:border-gold hover:text-gold ${className}`}
    >
      {ui.langSwitch.label}
      <span className="sr-only"> – {ui.langSwitch.ariaLabel}</span>
    </a>
  );
}
