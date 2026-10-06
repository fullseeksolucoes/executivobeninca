import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { nav, ui } from '@/lib/data';
import { messages, waLink } from '@/lib/whatsapp';
import { Clock } from './Clock';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-ink">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label={ui.homeLinkLabel} className="relative z-[60] flex shrink-0 items-center">
          <Logo priority />
        </Link>

        <p className="label-mono hidden items-center gap-3 whitespace-nowrap xl:flex">
          <span className="dot-live" aria-hidden="true" />
          <span>
            {ui.headerStatusCity} <Clock /> · <span className="2xl:hidden">{ui.headerStatusShort}</span>
            <span className="hidden 2xl:inline">{ui.headerStatusNote}</span>
          </span>
        </p>

        <div className="flex items-center gap-6">
          <nav aria-label={ui.navLabel} className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-text-2 underline-offset-8 hover:text-gold hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={ui.headerCtaHref} className="btn btn-gold hidden whitespace-nowrap sm:inline-flex">
            {ui.headerCta} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <MobileMenu whatsappHref={waLink(messages.general)} />
        </div>
      </div>
    </header>
  );
}
