'use client';

import { useEffect } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

/** Tracks clicks on any element with `data-track`, so links can stay server-rendered. */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (!el) return;
      const location = el.dataset.trackLocation;
      track(el.dataset.track as AnalyticsEvent, location ? { location } : {});
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
