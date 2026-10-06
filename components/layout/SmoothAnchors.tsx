'use client';

import { useEffect } from 'react';
import { scrollToSection, scrollToY } from '@/lib/scroll';

/** Waits for the mobile menu to close before scrolling. */
const MENU_CLOSE_DELAY = 150;
/** Lets fonts and layout settle before correcting the initial #hash position. */
const INITIAL_HASH_DELAY = 300;

/**
 * Turns every same-page link into a smooth scroll: "#section" links scroll to
 * the section, and a link to the current page (the logo) scrolls to the top.
 * Links keep a real href, so they still work without JavaScript.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target === '_blank') return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      const delay = link.closest('#menu-mobile') ? MENU_CLOSE_DELAY : 0;

      if (id) {
        if (!document.getElementById(id)) return;
        e.preventDefault();
        history.pushState(null, '', `#${id}`);
        window.setTimeout(() => scrollToSection(id), delay);
      } else {
        e.preventDefault();
        history.pushState(null, '', url.pathname);
        window.setTimeout(() => scrollToY(0), delay);
      }
    };

    document.addEventListener('click', onClick);

    const initial = decodeURIComponent(window.location.hash.slice(1));
    const timer = initial ? window.setTimeout(() => scrollToSection(initial), INITIAL_HASH_DELAY) : undefined;

    return () => {
      document.removeEventListener('click', onClick);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
