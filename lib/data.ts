import type {
  Airport,
  Clause,
  FaqItem,
  NavLink,
  RoutePage,
  SelectOption,
  ServiceLine,
  ServicePage,
  SiteConfig,
  Testimonial,
  Vehicle,
  Confirmable,
} from './types';

/** Bump when content changes. Used as `lastModified` in the sitemap. */
export const CONTENT_UPDATED = '2026-10-06';

/* -------------------------------------------------------------------------- */
/* Business                                                                    */
/* -------------------------------------------------------------------------- */

export const site: SiteConfig = {
  name: 'Beninca Transporte Executivo',
  shortName: 'Beninca',
  legalName: 'BTE Beninca Transporte Executivo',
  cnpj: '00.557.705/0001-04',
  phoneE164: '+5547999467438',
  phoneDisplay: '(47) 99946-7438',
  whatsappNumber: '5547999467438',
  email: 'adenilsonbeninca@yahoo.com.br',
  instagram: 'https://www.instagram.com/tr.executivo_beninca/',
  instagramHandle: '@tr.executivo_beninca',
  address: {
    street: 'Rua XV de Novembro, 7276',
    district: 'Vila Nova',
    city: 'Joinville',
    region: 'SC',
    country: 'BR',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  hoursNote: '24 horas, com agendamento',
  wordmark: 'Beninca',
  tagline: 'Transporte Executivo',
  areaServed: [
    'Joinville',
    'Navegantes',
    'Itajaí',
    'Balneário Camboriú',
    'Blumenau',
    'Florianópolis',
    'Curitiba',
    'São José dos Pinhais',
  ],
  paymentAccepted: 'Pix, cartão de crédito, cartão de débito',
  languages: ['pt-BR'],
};

export const airports: Airport[] = [
  {
    code: 'JOI',
    name: 'Aeroporto de Joinville',
    officialName: 'Aeroporto de Joinville – Lauro Carneiro de Loyola',
    city: 'Joinville',
  },
  {
    code: 'NVT',
    name: 'Aeroporto de Navegantes',
    officialName: 'Aeroporto Internacional de Navegantes – Ministro Victor Konder',
    city: 'Navegantes',
  },
  {
    code: 'CWB',
    name: 'Aeroporto de Curitiba',
    officialName: 'Aeroporto Internacional Afonso Pena',
    city: 'São José dos Pinhais (PR)',
  },
  {
    code: 'FLN',
    name: 'Aeroporto de Florianópolis',
    officialName: 'Aeroporto Internacional de Florianópolis – Hercílio Luz',
    city: 'Florianópolis',
  },
];

export const fleet: Vehicle[] = [
  {
    ref: 'REF. 01',
    category: 'Sedan executivo',
    model: 'Toyota Corolla',
    year: 2025,
    passengers: 4,
    luggage: { value: '', confirmed: false },
    extras: ['Água', 'Balas', 'Carregador de celular'],
  },
  {
    ref: 'REF. 02',
    category: 'Sedan executivo',
    model: 'Honda Civic',
    year: 2022,
    passengers: 4,
    luggage: { value: '', confirmed: false },
    extras: ['Água', 'Balas', 'Carregador de celular'],
  },
  {
    ref: 'REF. 03',
    category: 'SUV',
    model: 'Honda WR-V',
    year: 2027,
    passengers: 4,
    luggage: { value: '', confirmed: false },
    extras: ['Água', 'Balas', 'Carregador de celular', 'Mais espaço para bagagem'],
  },
];

/**
 * Claims waiting for client confirmation. Nothing here is rendered while
 * `confirmed` is false. When confirmed, add the matching text to the protocol,
 * the FAQ or the schema.
 */
export const pendingClaims: Record<string, Confirmable<{ label: string }>> = {
  flightTracking: { label: 'Seu voo é monitorado em tempo real.', confirmed: false },
  nameSign: { label: 'Recepção no desembarque com placa com o seu nome.', confirmed: false },
  driverDetails: { label: 'Você recebe nome, foto e placa do motorista antes da viagem.', confirmed: false },
  driverLanguage: { label: 'Idioma do motorista bilíngue: (a confirmar)', confirmed: false },
};

/** Only real testimonials, with authorization. The section stays hidden while empty. */
export const testimonials: Testimonial[] = [];

/* -------------------------------------------------------------------------- */
/* Navigation and shared UI copy                                               */
/* -------------------------------------------------------------------------- */

export const nav: NavLink[] = [
  { label: 'Rotas', href: '/#rotas' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Frota', href: '/#frota' },
  { label: 'Empresas', href: '/#empresas' },
  { label: 'Dúvidas', href: '/#duvidas' },
];

export const ui = {
  skipLink: 'Pular para o conteúdo',
  headerStatusCity: 'Joinville',
  headerStatusNote: 'Atendimento 24h com agendamento',
  headerStatusShort: 'Atendimento 24h',
  headerCta: 'Cotar viagem',
  headerCtaHref: '/#cotacao',
  homeLinkLabel: 'Beninca Transporte Executivo, página inicial',
  menuOpen: 'Abrir menu',
  menuClose: 'Fechar menu',
  menuTitle: 'Menu',
  navLabel: 'Navegação principal',
  mobileNavLabel: 'Navegação no celular',
  mobileBarWhatsapp: 'WhatsApp',
  mobileBarCall: 'Ligar',
  floatingWhatsapp: 'WhatsApp',
  floatingWhatsappLabel: 'Falar com a Beninca pelo WhatsApp',
  breadcrumbLabel: 'Você está em',
  breadcrumbHome: 'Início',
  breadcrumbRoutes: 'Rotas',
  breadcrumbServices: 'Serviços',
  approx: 'aprox.',
  onRequest: 'Sob consulta',
  quoteAction: 'Cotar',
  newTab: '(abre o WhatsApp em nova aba)',
};

/* -------------------------------------------------------------------------- */
/* Home                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  labels: ['Portão de desembarque', 'Transporte executivo · Joinville – SC'],
  titleBefore: 'Alguém vai estar',
  titleHighlight: 'esperando',
  titleAfter: 'por você.',
  lead:
    'Transfer executivo saindo de Joinville para os aeroportos de Curitiba, Navegantes, Florianópolis e Joinville. Sedans e SUV executivos, motoristas experientes e nota fiscal para empresas.',
  badgeTitle: 'Carro com internet Starlink, sob solicitação.',
  badgeText: 'Reuniões, e-mails e chamadas de vídeo sem cair, do começo ao fim do trajeto.',
};

export const quoteForm = {
  sectionLabel: 'Cotação em uma frase',
  heading: 'Peça sua cotação',
  textStart: 'Preciso de um motorista saindo de',
  textTo: 'até',
  textDate: ', no dia',
  textTime: 'às',
  textPax: ', para',
  textEnd: '.',
  labels: {
    origin: 'Origem',
    destination: 'Destino',
    date: 'Data',
    time: 'Horário',
    pax: 'Passageiros',
    flight: 'Número do voo (opcional)',
    starlink: 'Quero o carro com internet Starlink',
  },
  placeholders: {
    destination: 'destino',
    flight: 'Ex.: G3 1234',
  },
  originPlaceholder: 'escolha a origem',
  origins: [
    { value: 'Joinville (endereço)', label: 'Joinville (endereço)' },
    { value: 'Aeroporto de Joinville (JOI)', label: 'Aeroporto de Joinville (JOI)' },
    { value: 'Aeroporto de Navegantes (NVT)', label: 'Aeroporto de Navegantes (NVT)' },
    { value: 'Aeroporto de Curitiba (CWB)', label: 'Aeroporto de Curitiba (CWB)' },
    { value: 'Aeroporto de Florianópolis (FLN)', label: 'Aeroporto de Florianópolis (FLN)' },
    { value: 'Outro endereço', label: 'Outro endereço' },
  ] satisfies SelectOption[],
  paxOptions: [
    { value: '1 pessoa', label: '1 pessoa' },
    { value: '2 pessoas', label: '2 pessoas' },
    { value: '3 pessoas', label: '3 pessoas' },
    { value: '4 pessoas', label: '4 pessoas' },
    { value: 'Mais de 4 (vários carros)', label: 'Mais de 4 (vários carros)' },
  ] satisfies SelectOption[],
  submit: 'Pedir cotação no WhatsApp',
  note: 'Você recebe o valor pelo WhatsApp antes de confirmar. Sem cadastro.',
  errors: {
    origin: 'Escolha de onde você sai.',
    destination: 'Diga para onde você vai.',
    date: 'Informe a data da viagem.',
    datePast: 'Essa data já passou. Confira o dia.',
  },
  errorSummary: 'Confira os campos marcados antes de enviar.',
  timeFallback: 'horário a combinar',
  flightFallback: 'não informado',
  yes: 'sim',
  no: 'não',
};

export const departureBoard = {
  label: 'Painel de saídas',
  heading: 'Saídas de Joinville',
  text: 'Cada viagem é cotada na hora pelo WhatsApp. Diga origem, destino e horário e receba o valor antes de confirmar.',
  caption: 'Rotas saindo de Joinville, com tempo aproximado de viagem. Valores sob consulta pelo WhatsApp.',
  columns: { code: 'Código', destination: 'Destino', time: 'Tempo aprox.', price: 'Valor', action: 'Ação' },
  footnote: 'Tempos aproximados, sem trânsito. Podem variar com o horário e as condições da estrada.',
};

export const coastLine = {
  label: 'Área atendida',
  headingStart: 'Base em Joinville,',
  headingHighlight: 'todo o litoral pela BR-101.',
  text: 'Levamos e buscamos em todos os aeroportos da região. Outros destinos, é só pedir a cotação.',
  north: '↑ Norte · Curitiba (CWB)',
  south: 'Sul ↓',
  listLabel: 'Cidades atendidas pela BR-101, de norte a sul',
  stops: [
    { name: 'Joinville', note: 'base', code: 'JOI' },
    { name: 'Navegantes', code: 'NVT' },
    { name: 'Itajaí' },
    { name: 'Balneário Camboriú' },
    { name: 'Itapema' },
    { name: 'Bombinhas' },
    { name: 'Florianópolis', code: 'FLN' },
    { name: 'Garopaba' },
    { name: 'Praia do Rosa' },
  ] as { name: string; note?: string; code?: string }[],
};

export const servicesSection = {
  label: 'Serviços',
  heading: 'O que a gente faz',
  items: [
    {
      title: 'Transfer aeroporto',
      summary: 'Ida e volta para os aeroportos de Joinville, Navegantes, Curitiba e Florianópolis.',
      href: '/servicos/transfer-aeroporto-joinville',
    },
    {
      title: 'Agenda executiva',
      summary: 'Reuniões e visitas a fábricas com o mesmo motorista o dia todo, com opção de carro com internet Starlink.',
      href: '/servicos/transporte-executivo-empresas-joinville',
    },
    {
      title: 'Motorista por hora',
      summary: 'Carro à disposição por algumas horas ou pelo dia, sob consulta.',
      href: '/servicos/motorista-particular-joinville',
    },
    {
      title: 'Eventos',
      summary: 'Traslado de convidados e palestrantes, sob consulta.',
      href: '/servicos/transfer-eventos-e-casamentos-joinville',
    },
    {
      title: 'Casamentos',
      summary: 'Carro para os noivos e traslado de convidados, sob consulta.',
      href: '/servicos/transfer-eventos-e-casamentos-joinville',
    },
    {
      title: 'Viagens sob consulta',
      summary: 'Outras cidades e trajetos longos, com cotação pelo WhatsApp.',
      href: '/#cotacao',
    },
  ] satisfies ServiceLine[],
};

export const fleetSection = {
  label: 'Frota',
  heading: 'Ficha da frota',
  terms: { passengers: 'Passag.', year: 'Ano', luggage: 'Malas' },
  extrasLabel: 'A bordo',
  photoPending: 'Foto real em breve',
  reserve: 'Reservar este carro',
  starlinkNote: 'Carro com internet Starlink disponível sob solicitação. Peça na cotação.',
};

export const protocol = {
  label: 'Em toda viagem',
  heading: 'Protocolo Beninca',
  subheading: 'O que está garantido em toda viagem.',
  clauses: [
    {
      title: 'Você sabe o valor antes.',
      text: 'A cotação chega pelo WhatsApp e o valor combinado é o valor pago.',
      confirmed: true,
    },
    {
      title: 'Espera e cancelamento combinados.',
      text: 'O tempo de espera no aeroporto e as regras de cancelamento ficam acertados com você na reserva.',
      confirmed: true,
    },
    {
      title: 'Água, balas e carregador.',
      text: 'Em todos os carros. E, se pedir, o carro com internet Starlink.',
      confirmed: true,
    },
    {
      title: 'Atendimento 24 horas.',
      text: 'Inclusive de madrugada, para voos cedo, com agendamento.',
      confirmed: true,
    },
    {
      title: 'Nota fiscal para empresas.',
      text: 'Em toda viagem.',
      confirmed: true,
    },
    {
      title: 'Discrição.',
      text: 'Conversas e destinos dos clientes ficam no carro.',
      confirmed: true,
    },
    {
      title: 'Seu voo é monitorado.',
      text: 'Acompanhamos o horário de chegada do seu voo.',
      confirmed: false,
    },
  ] satisfies Clause[],
};

export const corporate = {
  label: 'Conta corporativa',
  heading: 'Sua empresa recebe visitas. A gente busca.',
  text:
    'Diretores, clientes e fornecedores chegando a Joinville pelos aeroportos da região, com nota fiscal em toda viagem e pagamento por Pix ou cartão. Peça o carro com internet Starlink e as quase duas horas até Curitiba ou Florianópolis viram tempo de trabalho. Também temos motorista bilíngue para visitantes estrangeiros.',
  pageLink: 'Ver transfer para empresas',
  form: {
    heading: 'Pedir proposta',
    labels: {
      company: 'Empresa',
      name: 'Seu nome',
      email: 'E-mail corporativo',
      volume: 'Viagens por mês',
    },
    volumePlaceholder: 'Escolha uma opção',
    volumes: [
      { value: 'até 5', label: 'Até 5' },
      { value: '5 a 15', label: '5 a 15' },
      { value: 'mais de 15', label: 'Mais de 15' },
    ] satisfies SelectOption[],
    submit: 'Enviar pelo WhatsApp',
    note: 'O formulário só monta a mensagem. Nada fica salvo no site.',
    errors: {
      company: 'Informe o nome da empresa.',
      name: 'Informe seu nome.',
      email: 'Informe um e-mail válido.',
      volume: 'Escolha quantas viagens por mês.',
    },
    errorSummary: 'Confira os campos marcados antes de enviar.',
  },
};

export const testimonialsSection = {
  label: 'Quem já viajou',
  heading: 'O que dizem os clientes',
  googleLink: 'Ver no Google',
};

export const faqSection = {
  label: 'Dúvidas frequentes',
  heading: 'Antes de perguntar',
};

export const homeFaq: FaqItem[] = [
  {
    topic: 'reserva',
    q: 'Quanto custa a viagem?',
    a: 'Cada trajeto é cotado na hora. Mande origem, destino e horário pelo WhatsApp (47) 99946-7438 e receba o valor antes de confirmar.',
  },
  {
    topic: 'aeroporto',
    q: 'Vocês vão até o aeroporto de Curitiba?',
    a: 'Sim. Levamos e buscamos em Joinville, Navegantes, Curitiba e Florianópolis.',
  },
  {
    topic: 'reserva',
    q: 'Atendem de madrugada?',
    a: 'Sim, atendemos 24 horas com agendamento. Reserve com antecedência pelo WhatsApp.',
  },
  {
    topic: 'aeroporto',
    q: 'Como funciona a espera se o voo atrasar?',
    a: 'O tempo de espera é combinado com você na reserva. Informe o número do voo ao pedir a cotação.',
  },
  {
    topic: 'pagamento',
    q: 'Como eu pago?',
    a: 'Pix ou cartão de crédito e débito, de todas as bandeiras. Emitimos nota fiscal para empresas.',
  },
  {
    topic: 'reserva',
    q: 'Os motoristas falam outros idiomas?',
    a: 'Sim, temos motorista bilíngue. Peça na reserva.',
  },
  {
    topic: 'carros',
    q: 'Todos os carros têm internet?',
    a: 'Temos um carro com internet Starlink, disponível sob solicitação. Avise na cotação.',
  },
  {
    topic: 'carros',
    q: 'O que tem dentro do carro?',
    a: 'Água, balas e carregador de celular em todos os carros.',
  },
  {
    topic: 'carros',
    q: 'Quantas pessoas cabem?',
    a: 'Até 4 passageiros por carro. Para grupos maiores, fale com a gente.',
  },
  {
    topic: 'empresas',
    q: 'Vocês emitem nota fiscal?',
    a: 'Sim, para empresas.',
  },
];

export const finalCta = {
  label: 'Fale com a gente',
  heading: 'Reserve pelo WhatsApp',
  phoneNote: 'WhatsApp e ligação · 24h com agendamento',
  call: 'Ligar',
};

export const footer = {
  columns: { contact: 'Contato', site: 'Site', routes: 'Rotas', social: 'Redes' },
  siteLinks: [
    { label: 'Início', href: '/' },
    { label: 'Transfer para empresas', href: '/empresas' },
    { label: 'Transfer aeroporto', href: '/servicos/transfer-aeroporto-joinville' },
    { label: 'Motorista particular', href: '/servicos/motorista-particular-joinville' },
    { label: 'Transporte executivo para empresas', href: '/servicos/transporte-executivo-empresas-joinville' },
    { label: 'Eventos e casamentos', href: '/servicos/transfer-eventos-e-casamentos-joinville' },
    { label: 'Dúvidas frequentes', href: '/#duvidas' },
  ] satisfies NavLink[],
  googleBusiness: 'Perfil no Google',
  privacy: 'Política de privacidade',
  cnpjLabel: 'CNPJ',
  routesNavLabel: 'Rotas atendidas',
  siteNavLabel: 'Páginas do site',
};

/* -------------------------------------------------------------------------- */
/* SEO                                                                         */
/* -------------------------------------------------------------------------- */

export const homeSeo = {
  title: 'Transfer Executivo em Joinville para Aeroportos | Beninca',
  description:
    'Transfer executivo em Joinville para os aeroportos de Curitiba, Navegantes e Florianópolis. Sedans e SUV, nota fiscal, 24h com agendamento. Cotação pelo WhatsApp.',
  ogAlt: 'Beninca Transporte Executivo: transfer de Joinville para os aeroportos JOI, NVT, CWB e FLN.',
};

/* -------------------------------------------------------------------------- */
/* Route pages                                                                 */
/* -------------------------------------------------------------------------- */

export const routePageCopy = {
  quoteHeading: 'Monte sua cotação',
  faqHeading: 'Perguntas sobre esta rota',
  otherRoutesHeading: 'Outras rotas',
  otherRoutesLabel: 'Outras saídas',
  timeLabel: 'Tempo aprox.',
  priceLabel: 'Valor',
  ctaWhatsapp: 'Cotar esta rota no WhatsApp',
  asideText: (to: string) => `Mande a data e o horário da viagem para ${to}. O valor chega pelo WhatsApp antes de você confirmar.`,
  serviceType: 'Transfer executivo',
};

export const routes: RoutePage[] = [
  {
    slug: 'joinville-aeroporto-de-curitiba',
    from: 'Joinville',
    to: 'Aeroporto de Curitiba',
    airportCode: 'CWB',
    boardCode: 'CWB',
    boardLabel: 'Aeroporto de Curitiba',
    approxTime: '1h45',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Joinville → Aeroporto de Curitiba (CWB) | Beninca',
    metaDescription:
      'Transfer de Joinville ao Aeroporto Afonso Pena (CWB) em aprox. 1h45. Valor sob consulta pelo WhatsApp, 24h com agendamento e nota fiscal para empresas.',
    h1: 'Transfer de Joinville para o Aeroporto de Curitiba',
    breadcrumb: 'Joinville → Aeroporto de Curitiba',
    lead:
      'Saída da sua casa, hotel ou empresa em Joinville direto para o Aeroporto Afonso Pena, em São José dos Pinhais. A viagem leva aprox. 1h45 e o valor sai na hora, com cotação pelo WhatsApp.',
    quote: { origin: 'Joinville (endereço)', destination: 'Aeroporto de Curitiba (CWB)' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'O carro sai de Joinville pela BR-101 no sentido norte até Garuva, onde pega a BR-376 rumo ao Paraná. Depois de subir a serra, o trajeto chega a São José dos Pinhais, onde fica o aeroporto, sem precisar entrar em Curitiba.',
          'Sem trânsito, o percurso leva aprox. 1h45. A serra pede atenção em dias de chuva ou neblina, e o fluxo de caminhões muda bastante conforme o horário. Por isso, na hora de marcar, a gente conversa sobre a sua chegada e sugere uma saída com folga.',
          'As companhias aéreas costumam pedir que o passageiro chegue com antecedência, e voos internacionais pedem ainda mais tempo. Confira a orientação da sua companhia e conte com isso ao escolher o horário de saída de Joinville.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Quase duas horas de estrada até Curitiba cansam quem dirige, e a volta costuma ser pior: chegar de um voo longo e ainda encarar a serra à noite. Com motorista, você descansa nos dois sentidos e não paga estacionamento no aeroporto por dias seguidos.',
          'Para quem viaja a trabalho, a rota é longa o bastante para render. Peça o carro com internet Starlink na cotação e use o caminho para responder e-mails ou entrar numa chamada de vídeo. Empresas recebem nota fiscal da viagem.',
        ],
      },
    ],
    aboutHeading: 'Sobre o Aeroporto de Curitiba',
    about: [
      'O nome oficial é Aeroporto Internacional Afonso Pena. Apesar de ser chamado de aeroporto de Curitiba, ele fica no município de São José dos Pinhais (PR), na região metropolitana da capital. O código IATA é CWB.',
      'A Beninca leva e busca passageiros no Afonso Pena. Na volta, combine com a gente o ponto de encontro e o tempo de espera na hora da reserva.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva de Joinville ao Aeroporto Afonso Pena?',
        a: 'Aprox. 1h45 sem trânsito, pela BR-101 e pela BR-376. Chuva na serra e horário de pico podem aumentar esse tempo, por isso a gente sugere sair com folga.',
      },
      {
        q: 'Vocês buscam no aeroporto de Curitiba de madrugada?',
        a: 'Sim. O atendimento é 24 horas com agendamento. Reserve com antecedência e informe o número do voo para a gente combinar a espera.',
      },
      {
        q: 'Dá para trabalhar durante a viagem até Curitiba?',
        a: 'Sim. Temos um carro com internet Starlink, disponível sob solicitação. Peça na cotação para garantir esse carro na sua data.',
      },
      {
        q: 'O transfer para Curitiba sai de qualquer bairro de Joinville?',
        a: 'Sim. O motorista busca no endereço que você informar em Joinville. Se a saída for de outra cidade, peça a cotação do mesmo jeito.',
      },
    ],
  },
  {
    slug: 'joinville-aeroporto-de-navegantes',
    from: 'Joinville',
    to: 'Aeroporto de Navegantes',
    airportCode: 'NVT',
    boardCode: 'NVT',
    boardLabel: 'Aeroporto de Navegantes',
    approxTime: '1h10',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Joinville → Aeroporto de Navegantes (NVT) | Beninca',
    metaDescription:
      'Transfer de Joinville ao Aeroporto de Navegantes (NVT) em aprox. 1h10 pela BR-101. Valor sob consulta pelo WhatsApp, 24h com agendamento e nota fiscal.',
    h1: 'Transfer de Joinville para o Aeroporto de Navegantes',
    breadcrumb: 'Joinville → Aeroporto de Navegantes',
    lead:
      'De Joinville ao Aeroporto Ministro Victor Konder, em Navegantes, em aprox. 1h10 pela BR-101. Você manda origem e horário pelo WhatsApp e recebe o valor antes de confirmar.',
    quote: { origin: 'Joinville (endereço)', destination: 'Aeroporto de Navegantes (NVT)' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'É um trajeto direto: o carro segue pela BR-101 no sentido sul, passa por Araquari, Barra Velha e Penha, e sai da rodovia na altura de Navegantes. O aeroporto fica perto da foz do rio Itajaí-Açu, a poucos minutos da saída da BR.',
          'Sem trânsito, a viagem leva aprox. 1h10. A BR-101 nesse trecho tem fluxo intenso em feriados e na temporada de verão, quando o litoral enche. Nesses períodos, a gente recomenda sair mais cedo do que o normal.',
          'Para voos nacionais, organize a saída de Joinville considerando a antecedência que a sua companhia aérea pede para o embarque. Na dúvida, mande o horário do voo na cotação e a gente sugere o horário de saída.',
          'Na volta, o caminho é o mesmo, no sentido norte. Se o voo chegar tarde da noite, não tem problema: com agendamento, o carro espera você no horário combinado e leva direto para casa.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Navegantes é uma opção frequente para quem mora em Joinville, e tem gente que passa por lá toda semana. Ir com motorista evita deixar o carro parado no estacionamento e evita dirigir na BR-101 cansado, na volta de um voo atrasado.',
          'Quem chega de fora para trabalhar em Joinville também usa essa rota. Combine a busca no desembarque, e o motorista leva o visitante direto para o hotel ou para a empresa. Para clientes corporativos, toda viagem sai com nota fiscal.',
        ],
      },
    ],
    aboutHeading: 'Sobre o Aeroporto de Navegantes',
    about: [
      'O nome oficial é Aeroporto Internacional de Navegantes – Ministro Victor Konder, código IATA NVT. Ele fica em Navegantes, no litoral norte de Santa Catarina, e atende também quem vai para Itajaí, Balneário Camboriú e Blumenau.',
      'A Beninca faz a ida e a volta. O ponto de encontro e o tempo de espera são combinados com você na reserva.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva de Joinville ao aeroporto de Navegantes?',
        a: 'Aprox. 1h10 sem trânsito, pela BR-101. Em feriados e na temporada de verão, vale sair mais cedo.',
      },
      {
        q: 'Vocês buscam passageiros que chegam em Navegantes e vão para Joinville?',
        a: 'Sim. A gente busca no Aeroporto de Navegantes e leva até o endereço em Joinville. Informe o número do voo na cotação.',
      },
      {
        q: 'Posso dividir o transfer para Navegantes com colegas?',
        a: 'Sim. Cada carro leva até 4 passageiros. Para grupos maiores, peça a cotação com vários carros.',
      },
    ],
  },
  {
    slug: 'joinville-aeroporto-de-florianopolis',
    from: 'Joinville',
    to: 'Aeroporto de Florianópolis',
    airportCode: 'FLN',
    boardCode: 'FLN',
    boardLabel: 'Aeroporto de Florianópolis',
    approxTime: '2h20',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Joinville → Aeroporto Florianópolis (FLN) | Beninca',
    metaDescription:
      'Transfer de Joinville ao Aeroporto Hercílio Luz (FLN) em aprox. 2h20 pela BR-101. Carro com Starlink sob solicitação. Valor sob consulta, 24h com agendamento.',
    h1: 'Transfer de Joinville para o Aeroporto de Florianópolis',
    breadcrumb: 'Joinville → Aeroporto de Florianópolis',
    lead:
      'A rota mais longa do litoral: de Joinville ao Aeroporto Hercílio Luz, em Florianópolis, em aprox. 2h20. Cotação pelo WhatsApp, com o valor fechado antes da viagem.',
    quote: { origin: 'Joinville (endereço)', destination: 'Aeroporto de Florianópolis (FLN)' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'O caminho todo é pela BR-101 no sentido sul. O carro passa por Itajaí, Balneário Camboriú, Itapema, Tijucas e pela Grande Florianópolis, atravessa a ponte para a Ilha de Santa Catarina e segue pela Ilha até o aeroporto.',
          'Sem trânsito, a viagem leva aprox. 2h20. Os pontos mais lentos costumam ser a região de Balneário Camboriú e a chegada à Grande Florianópolis, principalmente no verão, em feriados e no fim da tarde. Saia com margem.',
          'Some ao tempo de estrada a antecedência que a sua companhia aérea pede para o embarque. Para voos cedo, o atendimento é 24 horas: dá para sair de Joinville de madrugada, com agendamento.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Mais de duas horas ao volante, ida e volta, é um dia inteiro de cansaço. De transfer, você pode dormir no caminho, chegar descansado ao embarque e, na volta, não precisa enfrentar a BR-101 depois do voo.',
          'É também a rota em que o carro com internet Starlink mais faz diferença. Peça esse carro na cotação, e as horas de estrada viram tempo para reuniões, relatórios e chamadas. Ele está disponível sob solicitação. Empresas recebem nota fiscal.',
        ],
      },
    ],
    aboutHeading: 'Sobre o Aeroporto de Florianópolis',
    about: [
      'O nome oficial é Aeroporto Internacional de Florianópolis – Hercílio Luz, código IATA FLN. Ele fica na Ilha de Santa Catarina, na capital do estado.',
      'A Beninca leva e busca no Hercílio Luz. Ponto de encontro e tempo de espera ficam combinados na reserva.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva de Joinville até o aeroporto de Florianópolis?',
        a: 'Aprox. 2h20 sem trânsito, pela BR-101. No verão e em feriados, o trecho de Balneário Camboriú e a chegada à Grande Florianópolis podem ficar lentos.',
      },
      {
        q: 'Vale a pena pegar voo em Florianópolis saindo de Joinville?',
        a: 'Depende da passagem e do horário. Quando o voo por Florianópolis compensa, o transfer resolve a distância: você vai descansando e não paga estacionamento.',
      },
      {
        q: 'O carro com Starlink está disponível para Florianópolis?',
        a: 'Sim, sob solicitação. Temos um carro com internet Starlink. Peça na cotação para reservar esse carro na sua data.',
      },
      {
        q: 'Vocês fazem a volta do aeroporto de Florianópolis para Joinville?',
        a: 'Sim. A gente busca no Hercílio Luz e leva até o seu endereço em Joinville. Informe o voo e combine a espera na reserva.',
      },
    ],
  },
  {
    slug: 'aeroporto-de-joinville',
    from: 'Joinville',
    to: 'Aeroporto de Joinville',
    airportCode: 'JOI',
    boardCode: 'JOI',
    boardLabel: 'Aeroporto de Joinville',
    approxTime: '15 min',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Aeroporto de Joinville (JOI) | Beninca',
    metaDescription:
      'Transfer no Aeroporto de Joinville (JOI) para hotéis, empresas e casas na cidade. Motorista bilíngue, nota fiscal e 24h com agendamento. Valor pelo WhatsApp.',
    h1: 'Transfer no Aeroporto de Joinville',
    breadcrumb: 'Aeroporto de Joinville',
    lead:
      'Busca e entrega no Aeroporto Lauro Carneiro de Loyola, em Joinville. Do aeroporto ao centro são aprox. 15 minutos. Peça o valor pelo WhatsApp e receba antes de confirmar.',
    quote: { origin: 'Joinville (endereço)', destination: 'Aeroporto de Joinville (JOI)' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'O aeroporto de Joinville fica dentro da própria cidade. Do centro até o terminal são aprox. 15 minutos sem trânsito. De bairros mais afastados, ou de empresas nos distritos industriais, o tempo muda, e a gente calcula na cotação.',
          'Por ser perto, muita gente deixa para resolver o transporte na última hora. Não precisa: com agendamento, o carro já está marcado para o seu horário, inclusive nos voos de madrugada e no começo da manhã.',
          'Na chegada, o encontro com o motorista e o tempo de espera ficam combinados na reserva. Informe o número do voo, e a gente organiza o horário a partir dele.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Para quem chega a Joinville a trabalho, o transfer resolve o primeiro e o último trecho da viagem. O motorista leva do aeroporto ao hotel, à fábrica ou ao escritório do cliente, e você não precisa conhecer a cidade.',
          'Visitantes estrangeiros podem pedir o motorista bilíngue. Empresas que recebem fornecedores e diretores com frequência contam com nota fiscal em toda viagem e pagamento por Pix ou cartão.',
          'E, para quem mora aqui, é a forma mais simples de ir ao aeroporto sem deixar o carro no estacionamento durante a viagem.',
        ],
      },
    ],
    aboutHeading: 'Sobre o Aeroporto de Joinville',
    about: [
      'O nome oficial é Aeroporto de Joinville – Lauro Carneiro de Loyola, código IATA JOI. É o aeroporto mais perto para quem mora ou trabalha em Joinville.',
      'Quando o voo que você precisa não sai de Joinville, a Beninca também faz as rotas para Navegantes, Curitiba e Florianópolis.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva do aeroporto de Joinville ao centro?',
        a: 'Aprox. 15 minutos sem trânsito. De outros bairros ou dos distritos industriais, o tempo muda e a gente informa na cotação.',
      },
      {
        q: 'Vocês buscam visitantes estrangeiros no aeroporto de Joinville?',
        a: 'Sim. Temos motorista bilíngue. Peça na reserva e informe o número do voo.',
      },
      {
        q: 'Vocês levam do aeroporto de Joinville para outras cidades?',
        a: 'Sim. Quem chega por Joinville e vai trabalhar em Jaraguá do Sul, São Bento do Sul ou no litoral pode pedir a cotação do trecho completo.',
      },
      {
        q: 'Dá para agendar um transfer no aeroporto de Joinville para voo de madrugada?',
        a: 'Sim. O atendimento é 24 horas com agendamento. Reserve com antecedência pelo WhatsApp.',
      },
    ],
  },
  {
    slug: 'joinville-balneario-camboriu',
    from: 'Joinville',
    to: 'Balneário Camboriú',
    boardCode: 'BC',
    boardLabel: 'Balneário Camboriú',
    approxTime: '1h15',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Joinville → Balneário Camboriú | Beninca',
    metaDescription:
      'Transfer de Joinville para Balneário Camboriú em aprox. 1h15 pela BR-101. Sedans e SUV executivos, 24h com agendamento. Valor sob consulta pelo WhatsApp.',
    h1: 'Transfer de Joinville para Balneário Camboriú',
    breadcrumb: 'Joinville → Balneário Camboriú',
    lead:
      'De Joinville a Balneário Camboriú em aprox. 1h15, pela BR-101. Para reunião, evento, hotel ou fim de semana. O valor vem pelo WhatsApp, antes de você confirmar.',
    quote: { origin: 'Joinville (endereço)', destination: 'Balneário Camboriú' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'O carro desce pela BR-101 no sentido sul, passa por Barra Velha, Penha, Navegantes e Itajaí, e entra em Balneário Camboriú. Sem trânsito, são aprox. 1h15 até a cidade. O tempo até o endereço final depende do bairro e do movimento.',
          'Balneário Camboriú muda muito ao longo do ano. No verão, em feriados e em dias de evento, tanto a BR-101 quanto as avenidas da cidade ficam cheias. Nessas datas, combine a saída com mais folga.',
          'A volta para Joinville pode ser no mesmo dia ou em outra data. Se for um jantar ou uma festa, combine um horário aproximado de retorno, e o motorista fica de prontidão para buscar você.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Quem vai a Balneário Camboriú para um evento, um casamento ou um jantar não precisa se preocupar com estacionamento nem com dirigir na volta. O motorista deixa você na porta e busca no horário combinado.',
          'Para reuniões e visitas a clientes, dá para fazer ida e volta no mesmo dia com o mesmo motorista. Peça o carro com internet Starlink, sob solicitação, se quiser trabalhar no caminho. Empresas recebem nota fiscal.',
        ],
      },
    ],
    aboutHeading: 'Chegando de avião',
    about: [
      'Balneário Camboriú não tem aeroporto próprio. O mais perto é o Aeroporto Internacional de Navegantes (NVT), no caminho entre Joinville e Balneário.',
      'Se você chega por Navegantes e precisa ir para Balneário Camboriú ou para Joinville, a Beninca faz esse trecho também. Peça a cotação com a origem no aeroporto.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva de Joinville a Balneário Camboriú?',
        a: 'Aprox. 1h15 até a cidade, pela BR-101 e sem trânsito. No verão e em feriados, o tempo aumenta.',
      },
      {
        q: 'Vocês esperam e trazem de volta no mesmo dia?',
        a: 'Sim, sob consulta. Informe o horário de ida e de volta na cotação e a gente monta o valor do dia.',
      },
      {
        q: 'Fazem transfer para casamentos e eventos em Balneário Camboriú?',
        a: 'Sim, para os noivos e para convidados, sob consulta. Mande a data, os horários e o número de pessoas.',
      },
    ],
  },
  {
    slug: 'joinville-blumenau',
    from: 'Joinville',
    to: 'Blumenau',
    boardCode: 'BLU',
    boardLabel: 'Blumenau',
    approxTime: '1h30',
    approxTimeConfirmed: false,
    metaTitle: 'Transfer Joinville → Blumenau | Beninca',
    metaDescription:
      'Transfer executivo de Joinville para Blumenau em aprox. 1h30. Visitas a empresas, reuniões e eventos. 24h com agendamento e valor sob consulta pelo WhatsApp.',
    h1: 'Transfer de Joinville para Blumenau',
    breadcrumb: 'Joinville → Blumenau',
    lead:
      'Transfer executivo de Joinville para Blumenau, no Vale do Itajaí, em aprox. 1h30. Para reunião, visita a fábrica ou evento. Cotação pelo WhatsApp, com o valor antes da viagem.',
    quote: { origin: 'Joinville (endereço)', destination: 'Blumenau' },
    sections: [
      {
        heading: 'Como é a viagem',
        body: [
          'Há mais de um caminho entre Joinville e Blumenau. O motorista escolhe conforme o horário e o trânsito: em geral, o carro desce pela BR-101 até a região de Navegantes e segue pela BR-470 rumo ao Vale do Itajaí.',
          'Sem trânsito, a viagem leva aprox. 1h30. A BR-470 costuma ter muito caminhão e trechos lentos, então, para compromissos com hora marcada, a gente sugere uma saída com margem.',
          'Em outubro, a cidade recebe muitos visitantes por causa da Oktoberfest, e o movimento nas ruas aumenta bastante. Se a sua viagem cair nesse período, reserve com antecedência e conte com mais tempo de trajeto.',
        ],
      },
      {
        heading: 'Por que ir de transfer',
        body: [
          'Joinville e Blumenau são dois polos industriais, e muita viagem entre as cidades é de trabalho: auditoria, visita técnica, reunião com fornecedor. Com motorista, você chega concentrado e usa o tempo do trajeto para revisar a pauta.',
          'Se a agenda tiver várias paradas, o mesmo motorista pode ficar com você o dia todo, sob consulta. Peça o carro com internet Starlink, disponível sob solicitação. A empresa recebe nota fiscal e paga por Pix ou cartão.',
        ],
      },
    ],
    aboutHeading: 'Chegando de avião',
    about: [
      'Para quem vem de avião para Blumenau, o aeroporto com voos comerciais mais perto é o Aeroporto Internacional de Navegantes (NVT), no litoral.',
      'A Beninca faz o trecho de Navegantes para Blumenau e também de Blumenau para Joinville. Peça a cotação com a origem e o destino certos.',
    ],
    faq: [
      {
        q: 'Quanto tempo leva de Joinville a Blumenau?',
        a: 'Aprox. 1h30 sem trânsito. O motorista escolhe o caminho conforme o horário; a BR-470 costuma ter trechos lentos.',
      },
      {
        q: 'O motorista pode ficar comigo o dia todo em Blumenau?',
        a: 'Sim, sob consulta. Mande os horários e as paradas da agenda e a gente cota o dia inteiro.',
      },
      {
        q: 'Vocês emitem nota fiscal para viagens de trabalho a Blumenau?',
        a: 'Sim. Empresas recebem nota fiscal em toda viagem.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Service pages                                                               */
/* -------------------------------------------------------------------------- */

export const servicePageCopy = {
  faqHeading: 'Perguntas frequentes',
  routesHeading: 'Rotas mais pedidas',
  cta: 'Pedir cotação no WhatsApp',
};

export const services: ServicePage[] = [
  {
    slug: 'transfer-aeroporto-joinville',
    serviceType: 'Transfer aeroporto',
    metaTitle: 'Transfer Aeroporto Joinville: JOI, NVT, CWB e FLN | Beninca',
    metaDescription:
      'Transfer aeroporto em Joinville para JOI, Navegantes, Curitiba e Florianópolis. Ida e volta, 24h com agendamento, nota fiscal. Cotação pelo WhatsApp.',
    h1: 'Transfer aeroporto em Joinville',
    breadcrumb: 'Transfer aeroporto',
    lead:
      'Ida e volta entre Joinville e os quatro aeroportos da região: Joinville, Navegantes, Curitiba e Florianópolis. Você diz o voo e o horário, a gente manda o valor.',
    sections: [
      {
        heading: 'Quatro aeroportos, uma base',
        body: [
          'Quem mora em Joinville escolhe o aeroporto pelo preço da passagem e pelo horário do voo, não pela distância. Às vezes compensa sair por Navegantes; em outras, por Curitiba ou Florianópolis. O transfer acompanha essa escolha: a Beninca leva e busca em todos eles.',
          'A partir de Joinville, os tempos aproximados são de 15 minutos até o JOI, 1h10 até Navegantes, 1h45 até Curitiba e 2h20 até Florianópolis, sem trânsito.',
          'Ir de transfer também evita deixar o carro no estacionamento do aeroporto durante a viagem e dirigir cansado na volta, depois de um voo longo ou atrasado.',
        ],
      },
      {
        heading: 'Como reservar',
        body: [
          'Mande pelo WhatsApp a origem, o aeroporto, a data, o horário e o número do voo. Você recebe o valor antes de confirmar. Na volta, o tempo de espera no desembarque e as regras de cancelamento são combinados com você na reserva.',
          'O atendimento é 24 horas, com agendamento. Voo às seis da manhã em Curitiba ou chegada à meia-noite em Navegantes: é só marcar com antecedência.',
        ],
      },
      {
        heading: 'No carro',
        body: [
          'Sedans Corolla e Civic e o SUV WR-V, com até 4 passageiros por carro. Água, balas e carregador de celular em todos. Para quem precisa trabalhar no caminho, temos um carro com internet Starlink, disponível sob solicitação.',
        ],
      },
    ],
    faq: [
      {
        q: 'Qual aeroporto vocês atendem a partir de Joinville?',
        a: 'Os quatro da região: Joinville (JOI), Navegantes (NVT), Curitiba (CWB) e Florianópolis (FLN), ida e volta.',
      },
      {
        q: 'Preciso informar o número do voo?',
        a: 'Ajuda bastante. Com o voo em mãos, a gente combina com você o horário de saída e o tempo de espera.',
      },
      {
        q: 'Posso reservar ida e volta de uma vez?',
        a: 'Sim. Mande as duas datas na mesma cotação e receba o valor dos dois trechos.',
      },
    ],
  },
  {
    slug: 'motorista-particular-joinville',
    serviceType: 'Motorista particular',
    metaTitle: 'Motorista Particular em Joinville por Hora ou Dia | Beninca',
    metaDescription:
      'Motorista particular em Joinville com carro executivo por algumas horas ou pelo dia. Compromissos, compras e viagens. Valor sob consulta pelo WhatsApp.',
    h1: 'Motorista particular em Joinville',
    breadcrumb: 'Motorista particular',
    lead:
      'Carro executivo com motorista à sua disposição por algumas horas ou pelo dia inteiro, em Joinville e região. Você monta a agenda, a gente cota o tempo.',
    sections: [
      {
        heading: 'Para quem é',
        body: [
          'Para quem tem vários compromissos no mesmo dia e não quer procurar estacionamento a cada parada. Para quem está na cidade sem carro. Para quem não pode ou não quer dirigir, seja depois de um procedimento médico, seja numa noite de comemoração.',
          'Também atende famílias que precisam levar parentes a consultas, cartórios ou ao aeroporto, com um motorista que espera e traz de volta.',
        ],
      },
      {
        heading: 'Como funciona',
        body: [
          'Você manda pelo WhatsApp o dia, o horário de início, as paradas previstas e por quanto tempo vai precisar do carro. A gente responde com o valor, e você confirma só se fizer sentido.',
          'O motorista busca no endereço combinado e segue a sua agenda. Se surgir uma parada nova no meio do dia, é só falar com ele. Mudanças grandes de horário são acertadas na hora.',
          'Entre um compromisso e outro, o carro fica à sua espera, e você segue para a próxima parada sem procurar estacionamento nem chamar outro carro.',
        ],
      },
      {
        heading: 'Carros e pagamento',
        body: [
          'Corolla 2025, Civic 2022 ou WR-V 2027, todos com água, balas e carregador de celular, para até 4 passageiros. Temos motorista bilíngue. O pagamento é por Pix ou cartão de crédito e débito, e empresas recebem nota fiscal.',
        ],
      },
    ],
    faq: [
      {
        q: 'Qual é o tempo mínimo para contratar o motorista?',
        a: 'Depende do dia e do roteiro. Mande a sua agenda pelo WhatsApp e a gente informa as opções e o valor.',
      },
      {
        q: 'O motorista particular pode sair de Joinville?',
        a: 'Sim. Viagens para outras cidades são cotadas do mesmo jeito, com o roteiro completo.',
      },
      {
        q: 'Posso escolher o carro?',
        a: 'Sim, conforme a disponibilidade na data. Diga qual prefere na cotação.',
      },
    ],
  },
  {
    slug: 'transporte-executivo-empresas-joinville',
    serviceType: 'Transporte executivo corporativo',
    metaTitle: 'Transporte Executivo para Empresas em Joinville | Beninca',
    metaDescription:
      'Transporte executivo para empresas em Joinville: visitantes, diretores e agendas de fábrica. Nota fiscal, motorista bilíngue e Starlink sob solicitação.',
    h1: 'Transporte executivo para empresas em Joinville',
    breadcrumb: 'Transporte executivo para empresas',
    lead:
      'Agenda executiva com o mesmo motorista o dia todo, transfer de visitantes e diretores, nota fiscal em toda viagem. Para empresas de Joinville e região.',
    sections: [
      {
        heading: 'Agenda executiva',
        body: [
          'Joinville recebe todos os dias visitantes que precisam ir do aeroporto à fábrica, da fábrica ao hotel e, às vezes, a uma segunda empresa em outra cidade. Com a agenda executiva, o mesmo motorista acompanha o visitante do começo ao fim do dia.',
          'Isso tira um peso da equipe que recebe: ninguém precisa sair da própria rotina para buscar alguém no aeroporto ou ficar ligando para saber se o carro chegou.',
          'O roteiro do dia é combinado antes, com horários e endereços. Se a reunião atrasar ou a agenda mudar, basta avisar pelo WhatsApp e a gente ajusta.',
        ],
      },
      {
        heading: 'Trabalho no caminho',
        body: [
          'As rotas até Curitiba e Florianópolis levam perto de duas horas. Temos um carro com internet Starlink, disponível sob solicitação, para que esse tempo vire reunião, e-mail e chamada de vídeo. Para visitantes estrangeiros, temos motorista bilíngue.',
        ],
      },
      {
        heading: 'Faturamento simples',
        body: [
          'Toda viagem sai com nota fiscal para a empresa. O pagamento pode ser por Pix ou por cartão de crédito e débito. As reservas são feitas pelo WhatsApp ou por e-mail, e o valor de cada trajeto é informado antes da confirmação.',
          'Se a sua empresa tem viagens frequentes, peça uma proposta pela página de empresas.',
        ],
      },
    ],
    faq: [
      {
        q: 'A empresa recebe nota fiscal de cada viagem?',
        a: 'Sim. Emitimos nota fiscal para empresas em toda viagem.',
      },
      {
        q: 'Quem da empresa pode fazer as reservas?',
        a: 'Qualquer pessoa autorizada pela empresa, pelo WhatsApp ou por e-mail. Informe os dados de faturamento na primeira reserva.',
      },
      {
        q: 'Vocês atendem visitantes estrangeiros?',
        a: 'Sim. Temos motorista bilíngue. Peça na reserva.',
      },
    ],
  },
  {
    slug: 'transfer-eventos-e-casamentos-joinville',
    serviceType: 'Transfer para eventos e casamentos',
    metaTitle: 'Transfer para Eventos e Casamentos em Joinville | Beninca',
    metaDescription:
      'Transfer para eventos e casamentos em Joinville e no litoral: carro para os noivos, traslado de convidados e palestrantes. Valor sob consulta pelo WhatsApp.',
    h1: 'Transfer para eventos e casamentos em Joinville',
    breadcrumb: 'Eventos e casamentos',
    lead:
      'Carro executivo para os noivos, traslado de convidados e de palestrantes, em Joinville e no litoral. Cada evento é cotado a partir da sua programação.',
    sections: [
      {
        heading: 'Casamentos',
        body: [
          'No dia do casamento, a última coisa que os noivos precisam é de um problema com transporte. O carro busca a noiva ou o noivo no horário marcado, leva até a cerimônia e, depois, à festa.',
          'Convidados que chegam de avião também podem ser buscados nos aeroportos da região e levados ao hotel ou ao local da festa. Para a volta, combine os horários com antecedência.',
        ],
      },
      {
        heading: 'Eventos e palestrantes',
        body: [
          'Congressos, feiras e eventos corporativos costumam receber palestrantes e convidados que chegam por Navegantes, Curitiba ou Florianópolis. A Beninca busca no aeroporto, leva ao hotel e ao local do evento e faz o caminho de volta.',
          'Para empresas e organizadores, toda viagem sai com nota fiscal. Temos motorista bilíngue para convidados de fora do país.',
        ],
      },
      {
        heading: 'Como pedir',
        body: [
          'Mande pelo WhatsApp a data, os locais, os horários e o número de pessoas. Cada carro leva até 4 passageiros; para grupos maiores, a cotação inclui mais de um carro.',
          'Quanto antes a reserva, melhor: datas de casamento e de grandes eventos costumam concentrar pedidos, e a frota tem três carros.',
        ],
      },
    ],
    faq: [
      {
        q: 'Vocês fazem o carro dos noivos?',
        a: 'Sim, sob consulta. Mande a data, os horários e os endereços da cerimônia e da festa.',
      },
      {
        q: 'Conseguem levar muitos convidados?',
        a: 'Cada carro leva até 4 passageiros. Para grupos, a gente monta a cotação com mais de um carro, conforme a disponibilidade.',
      },
      {
        q: 'Atendem eventos fora de Joinville?',
        a: 'Sim. Balneário Camboriú, Blumenau, Florianópolis e outras cidades da região, sob consulta.',
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* /empresas                                                                   */
/* -------------------------------------------------------------------------- */

export const companiesPage = {
  metaTitle: 'Transfer para Empresas em Joinville | Beninca',
  metaDescription:
    'Transfer para empresas em Joinville: visitantes chegando por CWB, NVT e FLN, nota fiscal, motorista bilíngue e carro com Starlink sob solicitação.',
  label: 'Conta corporativa',
  h1: 'Transfer para empresas em Joinville',
  breadcrumb: 'Empresas',
  lead:
    'Sua empresa recebe diretores, clientes e fornecedores que chegam por Curitiba, Navegantes e Florianópolis. A Beninca busca, leva e emite nota fiscal de cada viagem.',
  sections: [
    {
      heading: 'O problema',
      body: [
        'Joinville é uma cidade industrial, mas boa parte dos voos que trazem visitantes pousa fora dela: em Navegantes, a pouco mais de uma hora, ou em Curitiba e Florianópolis, a quase duas. Alguém precisa buscar essas pessoas, e muitas vezes quem faz isso é um colaborador que para o próprio trabalho para dirigir.',
      ],
    },
    {
      heading: 'Como funciona',
      body: [
        'A reserva é feita pelo WhatsApp ou por e-mail, com o nome do passageiro, o voo e o destino. O valor de cada trajeto é informado antes da confirmação, e o tempo de espera e as regras de cancelamento ficam combinados na reserva.',
        'Toda viagem sai com nota fiscal para a empresa, com pagamento por Pix ou cartão. Para visitantes estrangeiros, temos motorista bilíngue. Para executivos que precisam trabalhar no trajeto, temos um carro com internet Starlink, sob solicitação.',
        'O atendimento é 24 horas, com agendamento, e cobre os aeroportos de Joinville, Navegantes, Curitiba e Florianópolis, além de agendas executivas com o mesmo motorista o dia todo.',
      ],
    },
  ],
  formHeading: 'Peça uma proposta',
  formText: 'Preencha os dados e a mensagem chega pronta no WhatsApp da Beninca.',
  emailText: 'Prefere e-mail? Escreva para',
  faqHeading: 'Dúvidas de empresas',
  faq: [
    {
      q: 'Como a empresa recebe a nota fiscal?',
      a: 'A nota fiscal é emitida para a empresa em toda viagem. Informe os dados de faturamento na primeira reserva.',
    },
    {
      q: 'Vocês fazem várias viagens no mesmo dia para a empresa?',
      a: 'Sim, conforme a disponibilidade da frota. Mande a programação completa e a gente organiza os horários.',
    },
    {
      q: 'Dá para reservar para um visitante que não fala português?',
      a: 'Sim. Temos motorista bilíngue. Peça na reserva e informe o voo do visitante.',
    },
    {
      q: 'Quais formas de pagamento a empresa pode usar?',
      a: 'Pix ou cartão de crédito e débito, de todas as bandeiras.',
    },
  ],
  serviceType: 'Transporte executivo corporativo',
};

/* -------------------------------------------------------------------------- */
/* /politica-de-privacidade                                                    */
/* -------------------------------------------------------------------------- */

export const privacyPage = {
  metaTitle: 'Política de privacidade',
  metaDescription:
    'Como o site da Beninca Transporte Executivo trata os seus dados: os formulários só montam a mensagem do WhatsApp e nada fica guardado no site.',
  h1: 'Política de privacidade',
  updatedLabel: 'Atualizada em',
  sections: [
    {
      heading: 'O que este site guarda',
      body: [
        'Nada. Os formulários de cotação e de empresas não enviam dados para nenhum servidor da Beninca. Eles apenas montam uma mensagem de texto e abrem o WhatsApp no seu aparelho. Você vê a mensagem antes de enviar e decide se quer mandar.',
      ],
    },
    {
      heading: 'WhatsApp, telefone e e-mail',
      body: [
        'Quando você manda uma mensagem, liga ou escreve um e-mail, recebemos os dados que você mesmo informar, como nome, telefone, endereços e horários da viagem. Usamos esses dados só para cotar, organizar e realizar a viagem e, para empresas, emitir a nota fiscal.',
        'Não vendemos nem compartilhamos esses dados com terceiros para fins de propaganda. O WhatsApp é um serviço da Meta e segue a política de privacidade dela.',
      ],
    },
    {
      heading: 'Análise de visitas',
      body: [
        'Se a medição de visitas estiver ativa, o site usa o Google Analytics, que grava cookies de análise no seu navegador para contar visitas e cliques de forma agregada. Esses dados não identificam você pelo nome. Você pode bloquear esses cookies nas configurações do navegador.',
      ],
      onlyWithAnalytics: true,
    },
    {
      heading: 'Seus direitos',
      body: [
        'Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir para saber quais dados temos sobre você, corrigir ou apagar esses dados. Basta escrever para o e-mail ou WhatsApp abaixo.',
      ],
    },
  ] as { heading: string; body: string[]; onlyWithAnalytics?: boolean }[],
  contactHeading: 'Contato do responsável',
};

/* -------------------------------------------------------------------------- */
/* 404                                                                         */
/* -------------------------------------------------------------------------- */

export const notFoundPage = {
  label: 'Erro 404',
  code: 'Voo não encontrado',
  heading: 'Esta página não está no painel.',
  text: 'O endereço pode ter mudado ou não existe mais. Escolha uma rota abaixo ou fale com a gente pelo WhatsApp.',
  routesHeading: 'Saídas disponíveis',
  home: 'Voltar ao início',
  whatsapp: 'Falar no WhatsApp',
};
