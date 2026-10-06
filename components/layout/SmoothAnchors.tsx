'use client';

import { useEffect } from 'react';
import { scrollToSection, scrollToTop } from '@/lib/scroll';

/** Waits for the mobile menu to close before scrolling (as in fullseek). */
const MENU_CLOSE_DELAY = 150;
/** Lets fonts and layout settle before correcting an initial #hash (as in fullseek). */
const INITIAL_HASH_DELAY = 300;

/**
 * Same-page links scroll with Lenis and leave the URL untouched: "#section"
 * links go to the section, a link to the current page (the logo) goes to the
 * top. Links keep a real href, so they still work without JavaScript.
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
      if (id && !document.getElementById(id)) return;

      e.preventDefault();
      const delay = link.closest('#menu-mobile') ? MENU_CLOSE_DELAY : 0;
      window.setTimeout(() => (id ? scrollToSection(id) : scrollToTop()), delay);
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
