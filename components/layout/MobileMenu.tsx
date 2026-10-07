'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { Dictionary } from '@/lib/content/pt';
import { site } from '@/lib/data';
import { getLenis } from '@/lib/scroll';
import { telLink } from '@/lib/whatsapp';

const MENU_ID = 'menu-mobile';

interface Props {
  nav: Dictionary['nav'];
  quoteHref: string;
  ui: Dictionary['ui'];
  whatsappHref: string;
}

export function MobileMenu({ nav, quoteHref, ui, whatsappHref }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="relative z-[60] flex h-12 w-12 items-center justify-center border border-line text-paper lg:hidden"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-label={open ? ui.menuClose : ui.menuOpen}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'close' : 'menu'} size={22} />
      </button>

      <div
        id={MENU_ID}
        ref={panelRef}
        hidden={!open}
        data-lenis-prevent=""
        className="fixed inset-0 z-50 overflow-y-auto bg-ink px-4 pb-10 pt-[calc(88px+env(safe-area-inset-top,0px))] lg:hidden"
      >
        <nav aria-label={ui.mobileNavLabel}>
          <p className="label-mono mb-4">{ui.menuTitle}</p>
          <ul className="border-t border-line">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a href={item.href} onClick={close} className="display flex min-h-[64px] items-center justify-between text-[40px] hover:text-gold">
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-xl text-gold">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a href={quoteHref} onClick={close} className="btn btn-gold btn-lg">
              {ui.headerCta} <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn btn-outline btn-lg"
              data-track="click_whatsapp"
              data-track-location="header"
            >
              <Icon name="whatsapp" /> {ui.whatsapp} <span className="sr-only">{ui.newTab}</span>
            </a>
            <a href={telLink} className="btn btn-outline btn-lg" data-track="click_phone" data-track-location="header">
              <Icon name="phone" /> {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
