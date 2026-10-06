'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { setLenis } from '@/lib/scroll';

/**
 * Smooth scrolling for the whole page (as in fullseek).
 * - Wheel/touch use a short lerp so scrolling stays responsive (settles in
 *   about 0.3s). The 1.2s duration is only for link clicks (lib/scroll.ts).
 * - `respectReducedMotion: false` matches fullseek's Lenis 1.3.23, which had
 *   no reduced-motion handling: the client asked for the animation even
 *   with Windows animation effects turned off.
 * Elements with `data-lenis-prevent` keep their own native scroll.
 */
export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
      touchMultiplier: 2,
      respectReducedMotion: false,
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
