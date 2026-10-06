/**
 * Smooth scroll to a section, same feel as Lenis (used in other projects):
 * 1.2s with an exponential ease-out, leaving room for the sticky header.
 * No library: one requestAnimationFrame loop. Instant with reduced motion,
 * and cancelled as soon as the visitor scrolls by hand.
 */
const DURATION = 1200;
const EXTRA_OFFSET = 20;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

let cancelCurrent: (() => void) | null = null;

function headerOffset() {
  const header = document.querySelector('header');
  return (header?.getBoundingClientRect().height ?? 0) + EXTRA_OFFSET;
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToY(targetY: number, onDone?: () => void) {
  cancelCurrent?.();
  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));

  if (reducedMotion() || Math.abs(endY - startY) < 2) {
    window.scrollTo({ top: endY, behavior: 'instant' });
    onDone?.();
    return;
  }

  let frame = 0;
  const start = performance.now();
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
    cancelCurrent = null;
  };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  window.addEventListener('keydown', stop);
  cancelCurrent = stop;

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / DURATION);
    window.scrollTo({ top: startY + (endY - startY) * easeOutExpo(t), behavior: 'instant' });
    if (t < 1) {
      frame = requestAnimationFrame(step);
    } else {
      stop();
      onDone?.();
    }
  };
  frame = requestAnimationFrame(step);
}

/** Scrolls to the element with this id and moves keyboard focus to it. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
  scrollToY(top, () => {
    if (!el.hasAttribute('tabindex') && !el.matches('a, button, input, select, textarea')) {
      el.setAttribute('tabindex', '-1');
    }
    el.focus({ preventScroll: true });
  });
}
