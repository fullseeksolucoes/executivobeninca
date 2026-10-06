import { site } from './data';
import type { Dictionary } from './content/pt';

/** Every WhatsApp link in the site goes through here. */
export function waLink(text?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const telLink = `tel:${site.phoneE164}`;

type Templates = Dictionary['whatsapp'];

function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}

/** Ready-made messages, written in the visitor's language. */
export function messages(t: Templates) {
  return {
    general: t.general,

    quote(q: {
      origin: string;
      destination: string;
      date: string;
      /** Empty when the visitor did not choose a time. */
      time: string;
      timeFallback: string;
      pax: string;
      flight: string;
      starlink: string;
      english: string;
    }) {
      const f = t.quoteFields;
      return [
        t.quoteIntro,
        `• ${f.origin}: ${q.origin}`,
        `• ${f.destination}: ${q.destination}`,
        `• ${f.date}: ${q.time ? `${q.date} ${f.at} ${q.time}` : `${q.date} (${q.timeFallback})`}`,
        `• ${f.pax}: ${q.pax}`,
        `• ${f.flight}: ${q.flight}`,
        `• ${f.starlink}: ${q.starlink}`,
        `• ${f.english}: ${q.english}`,
      ].join('\n');
    },

    route: (from: string, to: string) => fill(t.route, { from, to }),
    service: (topic: string) => fill(t.service, { topic }),
    fleet: (model: string) => fill(t.fleet, { model }),
    corporate: (c: { company: string; name: string; email: string; volume: string }) => fill(t.corporate, c),
  };
}
