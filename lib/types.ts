/** Only rendered when `confirmed === true`. */
export type Confirmable<T> = T & { confirmed: boolean };

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  cnpj: string;
  phoneE164: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: {
    street: string;
    district: string;
    city: string;
    region: string;
    postalCode?: string;
    country: 'BR';
  };
  geo?: { lat: number; lng: number };
  googleBusinessUrl?: string;
  openingHours: string;
  hoursNote: string;
  /** Client logo. While undefined, the typographic wordmark is used. */
  logo?: { src: string; width: number; height: number };
  wordmark: string;
  tagline: string;
  areaServed: string[];
  paymentAccepted: string;
  languages: string[];
}

export type AirportCode = 'JOI' | 'NVT' | 'CWB' | 'FLN';

export interface Airport {
  code: AirportCode;
  name: string;
  officialName: string;
  city: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
}

export interface RoutePage {
  slug: string;
  from: string;
  to: string;
  airportCode?: AirportCode;
  /** Letters shown in the departure board tiles. */
  boardCode: string;
  boardLabel: string;
  approxTime: string;
  approxTimeConfirmed: boolean;
  distanceKm?: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  breadcrumb: string;
  lead: string;
  /** Prefilled values for the quote sentence. */
  quote: { origin: string; destination: string };
  sections: ContentSection[];
  aboutHeading: string;
  about: string[];
  faq: FaqEntry[];
}

export interface Vehicle {
  ref: string;
  category: string;
  model: string;
  year: number;
  passengers: number;
  luggage?: Confirmable<{ value: string }>;
  extras: string[];
  image?: { src: string; alt: string };
}

export interface ServicePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  breadcrumb: string;
  lead: string;
  sections: ContentSection[];
  faq: FaqEntry[];
  serviceType: string;
}

export interface ServiceLine {
  title: string;
  summary: string;
  href: string;
}

export type FaqTopic = 'reserva' | 'pagamento' | 'aeroporto' | 'empresas' | 'carros';

export interface FaqItem extends FaqEntry {
  topic: FaqTopic;
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  source: 'google' | 'whatsapp';
}

export interface ProtocolClause {
  title: string;
  text: string;
}

export type Clause = Confirmable<ProtocolClause>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
