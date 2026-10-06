'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { ui } from '@/lib/data';
import { telLink } from '@/lib/whatsapp';

/**
 * Fixed WhatsApp/call bar on mobile and a floating WhatsApp button on desktop.
 * Both hide while an element marked with `data-hide-cta` (the quote forms) is
 * on screen, so they never cover the form's submit button.
 */
export function MobileCtaBar({ whatsappHref }: { whatsappHref: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-hide-cta]');
    if (!targets.length) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setHidden(visible.size > 0);
    });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const state = hidden ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100';

  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-ink px-3 pt-2 pb-[calc(8px+env(safe-area-inset-bottom,0px))] transition duration-200 md:hidden ${state}`}
        inert={hidden}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold h-14"
          data-track="click_whatsapp"
          data-track-location="mobile_bar"
        >
          <Icon name="whatsapp" /> {ui.mobileBarWhatsapp}
          <span className="sr-only">{ui.newTab}</span>
        </a>
        <a href={telLink} className="btn btn-outline h-14 bg-ink" data-track="click_phone" data-track-location="mobile_bar">
          <Icon name="phone" /> {ui.mobileBarCall}
        </a>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ui.floatingWhatsappLabel} ${ui.newTab}`}
        className={`btn btn-gold btn-lg fixed bottom-6 right-6 z-30 hidden transition duration-200 md:inline-flex ${state}`}
        data-track="click_whatsapp"
        data-track-location="floating"
        inert={hidden}
      >
        <Icon name="whatsapp" /> {ui.floatingWhatsapp}
      </a>
    </>
  );
}
