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
  /** Client logo files (public/brand). */
  logo: {
    wordmark: { src: string; width: number; height: number };
    full: { src: string; jpg: string; width: number; height: number };
  };
  wordmark: string;
  /** Languages spoken by the drivers (BCP 47), used in the schema. */
  languages: string[];
}

export type AirportCode = 'JOI' | 'NVT' | 'CWB' | 'FLN';

export interface Airport {
  code: AirportCode;
  officialName: string;
  city: string;
  /** Approximate drive time from Joinville, shown with "aprox.". */
  approxTime: string;
  approxTimeConfirmed: boolean;
}

export interface ServiceCity {
  name: string;
  /** Base of operations. */
  base?: boolean;
  airportCode?: AirportCode;
}

export interface Vehicle {
  model: string;
  year: number;
  passengers: number;
  luggage?: Confirmable<{ value: string }>;
  image?: { src: string; alt: string };
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  source: 'google' | 'whatsapp';
}

export interface Clause {
  title: string;
  text: string;
  confirmed: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
