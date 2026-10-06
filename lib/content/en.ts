import type { Dictionary } from './pt';

/** All landing page text in English. Same structure as `pt.ts`. */
export const en: Dictionary = {
  meta: {
    title: 'Executive Airport Transfer in Joinville, Brazil | Beninca',
    description:
      'Executive transfers from Joinville and nearby cities to Curitiba, Navegantes and Florianópolis airports. English-speaking driver, 24/7 by booking.',
    ogAlt: 'Beninca Executive Transport: transfers from Joinville to JOI, NVT, CWB and FLN airports.',
    ogKicker: 'Executive transport · Joinville – Brazil',
    ogHeadline: 'Airport transfers in the region',
  },

  ui: {
    skipLink: 'Skip to content',
    homeLinkLabel: 'Beninca Executive Transport, home',
    headerCta: 'Get a quote',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuTitle: 'Menu',
    navLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    whatsapp: 'WhatsApp',
    call: 'Call',
    floatingWhatsappLabel: 'Message Beninca on WhatsApp',
    newTab: '(opens in a new tab)',
    approx: 'approx.',
    onRequest: 'On request',
    quoteAction: 'Quote',
    langSwitch: { label: 'PT', name: 'Português', ariaLabel: 'Ler esta página em português' },
  },

  nav: [
    { label: 'Routes', href: '#rotas' },
    { label: 'Area', href: '#regiao' },
    { label: 'Services', href: '#servicos' },
    { label: 'Fleet', href: '#frota' },
    { label: 'Companies', href: '#empresas' },
    { label: 'FAQ', href: '#duvidas' },
  ],

  hero: {
    labels: ['Arrivals gate', 'Executive transport · Joinville – Brazil'],
    titleBefore: 'Someone will be',
    titleHighlight: 'waiting',
    titleAfter: 'for you.',
    lead:
      'Executive transfers from Joinville and nearby cities to the Curitiba, Navegantes, Florianópolis and Joinville airports. Executive sedans and SUV, an English-speaking driver and invoices for companies.',
    badgeTitle: 'Car with Starlink internet, on request.',
    badgeText: 'Meetings, emails and video calls that stay connected for the whole ride.',
    languageBadgeTitle: 'Bilingual driver: Portuguese and English.',
    languageBadgeText: 'For international visitors and business trips. Ask when you book.',
  },

  quoteForm: {
    sectionLabel: 'Quote in one sentence',
    heading: 'Get your quote',
    textStart: 'I need a driver from',
    textTo: 'to',
    textDate: ', on',
    textTime: 'at',
    textPax: ', for',
    textEnd: '.',
    labels: {
      origin: 'Pick-up',
      destination: 'Destination',
      date: 'Date',
      time: 'Time',
      pax: 'Passengers',
      flight: 'Flight number (optional)',
      starlink: 'I want the car with Starlink internet',
      english: 'I want an English-speaking driver',
    },
    placeholders: { destination: 'destination', flight: 'e.g. G3 1234', date: 'pick a date', time: 'time' },
    intlLocale: 'en-US',
    calendar: { dialog: 'Choose the travel date', prevMonth: 'Previous month', nextMonth: 'Next month' },
    originPlaceholder: 'choose pick-up',
    origins: [
      'Joinville (address)',
      'Araquari',
      'Garuva',
      'Guaramirim',
      'Itapoá',
      'Jaraguá do Sul',
      'São Francisco do Sul',
      'Joinville Airport (JOI)',
      'Navegantes Airport (NVT)',
      'Curitiba Airport (CWB)',
      'Florianópolis Airport (FLN)',
      'Other address',
    ],
    paxOptions: ['1 person', '2 people', '3 people', '4 people', 'More than 4 (several cars)'],
    submit: 'Get a quote on WhatsApp',
    note: 'You get the price on WhatsApp before you confirm. No sign-up.',
    errors: {
      origin: 'Choose where you are leaving from.',
      destination: 'Tell us where you are going.',
      date: 'Enter the date of the trip.',
      datePast: 'That date has passed. Please check the day.',
    },
    errorSummary: 'Please check the highlighted fields.',
    timeFallback: 'time to be agreed',
    timeAny: 'flexible',
    flightFallback: 'not provided',
    yes: 'yes',
    no: 'no',
  },

  board: {
    label: 'Departures board',
    heading: 'Departures from Joinville',
    text: 'Every trip is quoted on WhatsApp. Tell us pick-up, destination and time, and get the price before you confirm.',
    caption: 'Airports served from Joinville, with approximate travel time. Prices on request via WhatsApp.',
    columns: { code: 'Code', destination: 'Destination', time: 'Approx. time', price: 'Price', action: 'Action' },
    footnote: 'Approximate times from Joinville, without traffic. They may vary with the time of day and road conditions.',
    from: 'Joinville',
    airportNames: {
      JOI: 'Joinville Airport',
      NVT: 'Navegantes Airport',
      CWB: 'Curitiba Airport',
      FLN: 'Florianópolis Airport',
    },
  },

  region: {
    label: 'Service area',
    headingStart: 'Based in Joinville,',
    headingHighlight: 'serving northern Santa Catarina.',
    text:
      'We pick you up and drop you off in Joinville, Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul and São Francisco do Sul, to and from the four airports in the region. Other destinations are quoted on request.',
    north: '↑ North · Curitiba Airport (CWB)',
    south: 'South ↓ · Navegantes (NVT) and Florianópolis (FLN) airports',
    listLabel: 'Cities served, from north to south',
    base: 'base',
  },

  services: {
    label: 'Services',
    heading: 'What we do',
    items: [
      {
        title: 'Airport transfer',
        summary: 'To and from the Joinville, Navegantes, Curitiba and Florianópolis airports.',
        topic: 'an airport transfer',
      },
      {
        title: 'Business day',
        summary: 'Meetings and factory visits with the same driver all day, with the option of the car with Starlink internet.',
        topic: 'a driver for a business day',
      },
      {
        title: 'Hourly driver',
        summary: 'A car and driver for a few hours or the whole day, on request.',
        topic: 'an hourly driver',
      },
      {
        title: 'International visitors',
        summary: 'A bilingual driver who speaks Portuguese and English, from the arrivals hall to your hotel or company.',
        topic: 'a transfer with an English-speaking driver',
      },
      {
        title: 'Events and weddings',
        summary: 'A car for the couple and transfers for guests and speakers, on request.',
        topic: 'an event or a wedding',
      },
      {
        title: 'Trips on request',
        summary: 'Other cities and long trips, quoted on WhatsApp.',
        topic: 'a trip to another city',
      },
    ],
    action: 'Quote',
  },

  fleet: {
    label: 'Fleet',
    heading: 'Fleet sheet',
    terms: { passengers: 'Pass.', year: 'Year', luggage: 'Bags' },
    extrasLabel: 'On board',
    photoPending: 'Real photo coming soon',
    reserve: 'Book this car',
    starlinkNote: 'Car with Starlink internet available on request. Ask for it in your quote.',
    details: {
      'REF. 01': { category: 'Executive sedan', extras: ['Water', 'Candies', 'Phone charger'] },
      'REF. 02': { category: 'Executive sedan', extras: ['Water', 'Candies', 'Phone charger'] },
      'REF. 03': { category: 'SUV', extras: ['Water', 'Candies', 'Phone charger', 'More luggage space'] },
    },
  },

  protocol: {
    label: 'On every trip',
    heading: 'The Beninca protocol',
    subheading: 'What you can count on, every trip.',
    clauses: [
      { title: 'You know the price first.', text: 'The quote comes on WhatsApp, and the price agreed is the price paid.', confirmed: true },
      {
        title: 'Waiting time and cancellation, agreed.',
        text: 'Airport waiting time and cancellation terms are agreed with you when you book.',
        confirmed: true,
      },
      { title: 'Water, candies and a charger.', text: 'In every car. And, if you ask, the car with Starlink internet.', confirmed: true },
      { title: '24/7 service.', text: 'Including late at night and for early flights, by booking.', confirmed: true },
      { title: 'Invoices for companies.', text: 'On every trip (Brazilian nota fiscal).', confirmed: true },
      { title: 'Discretion.', text: 'What is said in the car stays in the car.', confirmed: true },
      { title: 'Your flight is tracked.', text: 'We follow your flight’s arrival time.', confirmed: false },
    ],
  },

  corporate: {
    label: 'Corporate account',
    heading: 'Your company has visitors. We pick them up.',
    text:
      'Directors, clients and suppliers arriving in Joinville and nearby cities through the Curitiba, Navegantes and Florianópolis airports, with an invoice (nota fiscal) on every trip and payment by Pix or card. Ask for the car with Starlink internet and almost two hours on the road become working time. For international visitors, we have a bilingual driver who speaks Portuguese and English.',
    form: {
      heading: 'Request a proposal',
      labels: { company: 'Company', name: 'Your name', email: 'Work email', volume: 'Trips per month' },
      volumePlaceholder: 'Choose an option',
      volumes: [
        { value: 'up to 5', label: 'Up to 5' },
        { value: '5 to 15', label: '5 to 15' },
        { value: 'more than 15', label: 'More than 15' },
      ],
      submit: 'Send on WhatsApp',
      note: 'The form only writes the message. Nothing is stored on this site.',
      errors: {
        company: 'Enter the company name.',
        name: 'Enter your name.',
        email: 'Enter a valid email.',
        volume: 'Choose how many trips per month.',
      },
      errorSummary: 'Please check the highlighted fields.',
    },
  },

  testimonials: {
    label: 'From our passengers',
    heading: 'What clients say',
    googleLink: 'See on Google',
  },

  faq: {
    label: 'Frequently asked questions',
    heading: 'Before you ask',
    items: [
      {
        q: 'How much does a trip cost?',
        a: 'Every trip is quoted individually. Send pick-up, destination and time on WhatsApp +55 47 99946-7438 and get the price before you confirm.',
      },
      {
        q: 'Do you serve cities other than Joinville?',
        a: 'Yes. We also pick up and drop off in Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul and São Francisco do Sul. Other destinations on request.',
      },
      { q: 'Do you go to Curitiba airport?', a: 'Yes. We drop off and pick up at the Joinville, Navegantes, Curitiba and Florianópolis airports.' },
      {
        q: 'How long does it take to each airport?',
        a: 'From Joinville, without traffic: approx. 15 min to Joinville airport, 1h10 to Navegantes, 1h45 to Curitiba and 2h20 to Florianópolis.',
      },
      { q: 'Do you work late at night?', a: 'Yes, we work 24/7 by booking. Book ahead on WhatsApp.' },
      {
        q: 'What happens if my flight is delayed?',
        a: 'The waiting time is agreed with you when you book. Include your flight number when you ask for a quote.',
      },
      { q: 'How do I pay?', a: 'Pix or credit and debit cards of all major brands. We issue invoices (nota fiscal) for companies.' },
      { q: 'Do the drivers speak English?', a: 'Yes, we have a bilingual driver who speaks Portuguese and English. Ask for one when you book.' },
      { q: 'Do all cars have internet?', a: 'We have one car with Starlink internet, available on request. Mention it in your quote.' },
      { q: 'What is in the car?', a: 'Water, candies and a phone charger in every car.' },
      { q: 'How many people fit in a car?', a: 'Up to 4 passengers per car. For larger groups, get in touch.' },
      { q: 'Do you issue invoices?', a: 'Yes, for companies (Brazilian nota fiscal).' },
    ],
  },

  finalCta: {
    label: 'Get in touch',
    heading: 'Book on WhatsApp',
    phoneNote: 'WhatsApp and calls · 24/7 by booking',
  },

  footer: {
    columns: { contact: 'Contact', site: 'On this page', area: 'Service area', social: 'Social' },
    siteNavLabel: 'Page sections',
    googleBusiness: 'Google profile',
    cnpjLabel: 'CNPJ',
    airportsLabel: 'Airports: JOI · NVT · CWB · FLN',
  },

  privacy: {
    summary: 'Privacy policy',
    updatedLabel: 'Updated on',
    sections: [
      {
        heading: 'What this site stores',
        body: [
          'Nothing. The quote and company forms do not send data to any Beninca server. They only write a text message and open WhatsApp on your device. You see the message before sending it and decide whether to send it.',
        ],
      },
      {
        heading: 'WhatsApp, phone and email',
        body: [
          'When you send a message, call or email us, we receive the information you choose to share, such as your name, phone number, addresses and trip times. We use it only to quote, organize and carry out the trip and, for companies, to issue the invoice. We do not sell or share it with third parties for advertising. WhatsApp is a Meta service and follows its own privacy policy.',
        ],
      },
      {
        heading: 'Visit analytics',
        body: [
          'This site uses Google Analytics, which sets analytics cookies in your browser to count visits and clicks in aggregate. This data does not identify you by name. You can block these cookies in your browser settings.',
        ],
        onlyWithAnalytics: true,
      },
      {
        heading: 'Your rights',
        body: [
          'Under the Brazilian General Data Protection Law (LGPD, Law 13.709/2018), you can ask which data we hold about you, and have it corrected or deleted. Just write to the email or WhatsApp on this page.',
        ],
      },
    ],
  },

  whatsapp: {
    general: 'Hello! I found you on your website and would like a transfer quote.',
    quoteIntro: 'Hello! I would like a quote:',
    quoteFields: {
      origin: 'Pick-up',
      destination: 'Destination',
      date: 'Date',
      at: 'at',
      pax: 'Passengers',
      flight: 'Flight',
      starlink: 'Car with Starlink',
      english: 'English-speaking driver',
    },
    route: 'Hello! I would like a transfer quote from {from} to {to}. Date and time: ',
    service: 'Hello! I would like a quote for {topic}. ',
    fleet: 'Hello! I would like to book the {model} for a trip. ',
    corporate:
      'Hello! I am from {company} ({name}, {email}). We have {volume} trips per month and would like a proposal with invoices.',
  },
};
