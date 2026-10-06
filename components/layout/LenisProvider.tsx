'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { setLenis } from '@/lib/scroll';

/**
 * Smooth scrolling for the whole page (same setup as fullseek). Lenis honours
 * prefers-reduced-motion by itself. Elements with `data-lenis-prevent` keep
 * their own native scroll (mobile menu, departures table).
 */
export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
