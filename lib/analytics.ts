export type AnalyticsEvent = 'click_whatsapp' | 'click_phone' | 'generate_lead' | 'click_instagram';

export type WhatsappLocation =
  | 'header'
  | 'hero'
  | 'board'
  | 'fleet'
  | 'footer'
  | 'mobile_bar'
  | 'floating'
  | 'services'
  | 'corporate';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. Does nothing when GA4 is not configured. */
export function track(event: AnalyticsEvent, params: Record<string, string | number | boolean> = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

/**
 * Data attributes read by <AnalyticsListener />, so server-rendered links can
 * be tracked without becoming client components.
 */
export function trackAttrs(event: AnalyticsEvent, location?: string) {
  return {
    'data-track': event,
    ...(location ? { 'data-track-location': location } : {}),
  };
}
