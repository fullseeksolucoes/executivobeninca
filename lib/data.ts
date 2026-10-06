/**
 * Business facts, the same in every language. Text shown to visitors lives in
 * `lib/content/pt.ts` and `lib/content/en.ts`.
 */
import type {
  Airport,
  Confirmable,
  ServiceCity,
  SiteConfig,
  Testimonial,
  Vehicle,
} from "./types";

/** Bump when content changes. Used as `lastModified` in the sitemap. */
export const CONTENT_UPDATED = "2026-10-06";

export const site: SiteConfig = {
  name: "Beninca Transporte Executivo",
  shortName: "Beninca",
  legalName: "BTE Beninca Transporte Executivo",
  cnpj: "00.557.705/0001-04",
  phoneE164: "+5547999467438",
  phoneDisplay: "(47) 99946-7438",
  whatsappNumber: "5547999467438",
  email: "adenilsonbeninca@yahoo.com.br",
  instagram: "https://www.instagram.com/tr.executivobeninca/",
  instagramHandle: "@tr.executivobeninca",
  address: {
    street: "Rua XV de Novembro, 7276",
    district: "Vila Nova",
    city: "Joinville",
    region: "SC",
    country: "BR",
  },
  openingHours: "Mo-Su 00:00-23:59",
  logo: {
    /** Header: "BENINCA / TRANSPORTE EXECUTIVO" cut from the client logo, transparent background. */
    wordmark: { src: "/brand/beninca-wordmark.png", width: 528, height: 110 },
    /** Full square logo as sent by the client (black background). */
    full: {
      src: "/brand/beninca-logo.webp",
      jpg: "/brand/beninca-logo.jpg",
      width: 640,
      height: 640,
    },
  },
  wordmark: "Beninca",
  languages: ["pt-BR", "en"],
};

/** The four airports served, in the order of the departure board. */
export const airports: Airport[] = [
  {
    code: "JOI",
    officialName: "Aeroporto de Joinville – Lauro Carneiro de Loyola",
    city: "Joinville",
    approxTime: "15 min",
    approxTimeConfirmed: false,
  },
  {
    code: "NVT",
    officialName:
      "Aeroporto Internacional de Navegantes – Ministro Victor Konder",
    city: "Navegantes",
    approxTime: "1h10",
    approxTimeConfirmed: false,
  },
  {
    code: "CWB",
    officialName: "Aeroporto Internacional Afonso Pena",
    city: "São José dos Pinhais",
    approxTime: "1h45",
    approxTimeConfirmed: false,
  },
  {
    code: "FLN",
    officialName: "Aeroporto Internacional de Florianópolis – Hercílio Luz",
    city: "Florianópolis",
    approxTime: "2h20",
    approxTimeConfirmed: false,
  },
];

/** Cities where the client picks up and drops off, roughly north to south. */
export const serviceArea: ServiceCity[] = [
  { name: "Garuva" },
  { name: "Itapoá" },
  { name: "São Francisco do Sul" },
  { name: "Joinville", base: true, airportCode: "JOI" },
  { name: "Araquari" },
  { name: "Guaramirim" },
  { name: "Jaraguá do Sul" },
];

export const fleet: Vehicle[] = [
  {
    ref: "REF. 01",
    model: "Toyota Corolla",
    year: 2025,
    passengers: 4,
    luggage: { value: "", confirmed: false },
  },
  {
    ref: "REF. 02",
    model: "Honda Civic",
    year: 2022,
    passengers: 4,
    luggage: { value: "", confirmed: false },
  },
  {
    ref: "REF. 03",
    model: "Honda WR-V",
    year: 2027,
    passengers: 4,
    luggage: { value: "", confirmed: false },
  },
];

/**
 * Claims waiting for client confirmation. Nothing here is rendered while
 * `confirmed` is false. When confirmed, add the matching text to the protocol
 * and the FAQ in both dictionaries.
 */
export const pendingClaims: Record<string, Confirmable<{ label: string }>> = {
  flightTracking: {
    label: "Monitoramento de voo em tempo real",
    confirmed: false,
  },
  nameSign: {
    label: "Placa com o nome do passageiro no desembarque",
    confirmed: false,
  },
  driverDetails: {
    label: "Envio de nome, foto e placa do motorista antes da viagem",
    confirmed: false,
  },
};

/** Only real testimonials, with authorization. The section stays hidden while empty. */
export const testimonials: Testimonial[] = [];
