import type Lenis from 'lenis';

/**
 * In-page navigation, same approach as fullseek: Lenis scrolls to the section
 * (1.2s) and the URL is not changed. The section's `scroll-margin-top`
 * (globals.css) keeps it clear of the sticky header; Lenis reads it.
 */
let lenisInstance: Lenis | null = null;

/** Link clicks: 1.2s with Lenis' default exponential ease-out, as in fullseek. */
const LINK_SCROLL = { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) };

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

/** Moves keyboard and screen-reader focus to the section after the scroll. */
function focusSection(el: HTMLElement) {
  if (!el.hasAttribute('tabindex') && !el.matches('a, button, input, select, textarea')) {
    el.setAttribute('tabindex', '-1');
  }
  el.focus({ preventScroll: true });
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { ...LINK_SCROLL, onComplete: () => focusSection(el) });
    return;
  }
  // Fallback before Lenis starts.
  const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - margin;
  window.scrollTo({ top, behavior: 'smooth' });
  focusSection(el);
}

export function scrollToTop() {
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(0, LINK_SCROLL);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}
