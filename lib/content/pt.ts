/**
 * Todo o texto da landing page em português (Brasil).
 * `en.ts` tem a mesma estrutura, imposta pelo tipo `Dictionary`.
 */
export const pt = {
  meta: {
    title: 'Transfer Executivo em Joinville para Aeroportos | Beninca',
    description:
      'Transfer executivo em Joinville e região para os aeroportos de Curitiba, Navegantes e Florianópolis. Motorista bilíngue, nota fiscal, 24h com agendamento.',
    ogAlt: 'Beninca Transporte Executivo: transfer de Joinville para os aeroportos JOI, NVT, CWB e FLN.',
    ogKicker: 'Transporte executivo · Joinville – SC',
    ogHeadline: 'Transfer para os aeroportos da região',
  },

  ui: {
    skipLink: 'Pular para o conteúdo',
    homeLinkLabel: 'Beninca Transporte Executivo, início',
    headerCta: 'Cotar viagem',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    menuTitle: 'Menu',
    navLabel: 'Navegação principal',
    mobileNavLabel: 'Navegação no celular',
    whatsapp: 'WhatsApp',
    call: 'Ligar',
    floatingWhatsappLabel: 'Falar com a Beninca pelo WhatsApp',
    newTab: '(abre em nova aba)',
    approx: 'aprox.',
    onRequest: 'Sob consulta',
    quoteAction: 'Cotar',
    langSwitch: { label: 'EN', name: 'English', ariaLabel: 'Read this page in English' },
  },

  nav: [
    { label: 'Rotas', href: '#rotas' },
    { label: 'Região', href: '#regiao' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Frota', href: '#frota' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],

  hero: {
    labels: ['Portão de desembarque', 'Transporte executivo · Joinville – SC'],
    titleBefore: 'Alguém vai estar',
    titleHighlight: 'esperando',
    titleAfter: 'por você.',
    lead:
      'Transfer executivo em Joinville e região para os aeroportos de Curitiba, Navegantes, Florianópolis e Joinville. Sedans e SUV executivos, motorista bilíngue e nota fiscal para empresas.',
    badgeTitle: 'Carro com internet Starlink, sob solicitação.',
    badgeText: 'Reuniões, e-mails e chamadas de vídeo sem cair, do começo ao fim do trajeto.',
    languageBadgeTitle: 'Motorista bilíngue: português e inglês.',
    languageBadgeText: 'Para visitantes estrangeiros e viagens de negócios. Peça na reserva.',
  },

  quoteForm: {
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
      english: 'Quero motorista que fale inglês',
    },
    placeholders: { destination: 'destino', flight: 'Ex.: G3 1234', date: 'escolha a data', time: 'horário' },
    intlLocale: 'pt-BR',
    calendar: { dialog: 'Escolher a data da viagem', prevMonth: 'Mês anterior', nextMonth: 'Próximo mês' },
    originPlaceholder: 'escolha a origem',
    origins: [
      'Joinville (endereço)',
      'Araquari',
      'Garuva',
      'Guaramirim',
      'Itapoá',
      'Jaraguá do Sul',
      'São Francisco do Sul',
      'Aeroporto de Joinville (JOI)',
      'Aeroporto de Navegantes (NVT)',
      'Aeroporto de Curitiba (CWB)',
      'Aeroporto de Florianópolis (FLN)',
      'Outro endereço',
    ],
    paxOptions: ['1 pessoa', '2 pessoas', '3 pessoas', '4 pessoas', 'Mais de 4 (vários carros)'],
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
    timeAny: 'a combinar',
    flightFallback: 'não informado',
    yes: 'sim',
    no: 'não',
  },

  board: {
    label: 'Painel de saídas',
    heading: 'Saídas de Joinville',
    text: 'Cada viagem é cotada na hora pelo WhatsApp. Diga origem, destino e horário e receba o valor antes de confirmar.',
    caption: 'Aeroportos atendidos saindo de Joinville, com tempo aproximado de viagem. Valores sob consulta pelo WhatsApp.',
    columns: { code: 'Código', destination: 'Destino', time: 'Tempo aprox.', price: 'Valor', action: 'Ação' },
    footnote: 'Tempos aproximados saindo de Joinville, sem trânsito. Podem variar com o horário e as condições da estrada.',
    from: 'Joinville',
    airportNames: {
      JOI: 'Aeroporto de Joinville',
      NVT: 'Aeroporto de Navegantes',
      CWB: 'Aeroporto de Curitiba',
      FLN: 'Aeroporto de Florianópolis',
    },
  },

  region: {
    label: 'Região atendida',
    headingStart: 'Base em Joinville,',
    headingHighlight: 'todo o norte catarinense.',
    text:
      'Buscamos e levamos você em Joinville, Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul e São Francisco do Sul, de e para os quatro aeroportos da região. Outros destinos, é só pedir a cotação.',
    north: '↑ Norte · Aeroporto de Curitiba (CWB)',
    south: 'Sul ↓ · Aeroportos de Navegantes (NVT) e Florianópolis (FLN)',
    listLabel: 'Cidades atendidas, de norte a sul',
    base: 'base',
  },

  services: {
    label: 'Serviços',
    heading: 'O que a gente faz',
    items: [
      {
        title: 'Transfer aeroporto',
        summary: 'Ida e volta para os aeroportos de Joinville, Navegantes, Curitiba e Florianópolis.',
        topic: 'transfer para aeroporto',
      },
      {
        title: 'Agenda executiva',
        summary: 'Reuniões e visitas a fábricas com o mesmo motorista o dia todo, com opção de carro com internet Starlink.',
        topic: 'agenda executiva',
      },
      {
        title: 'Motorista por hora',
        summary: 'Carro à disposição por algumas horas ou pelo dia, sob consulta.',
        topic: 'motorista por hora',
      },
      {
        title: 'Visitantes estrangeiros',
        summary: 'Motorista bilíngue, que fala português e inglês, do desembarque ao hotel ou à empresa.',
        topic: 'transfer com motorista bilíngue (inglês)',
      },
      {
        title: 'Eventos e casamentos',
        summary: 'Carro para os noivos e traslado de convidados e palestrantes, sob consulta.',
        topic: 'evento ou casamento',
      },
      {
        title: 'Viagens sob consulta',
        summary: 'Outras cidades e trajetos longos, com cotação pelo WhatsApp.',
        topic: 'viagem para outra cidade',
      },
    ],
    action: 'Cotar',
  },

  fleet: {
    label: 'Frota',
    heading: 'Ficha da frota',
    terms: { passengers: 'Passag.', year: 'Ano', luggage: 'Malas' },
    extrasLabel: 'A bordo',
    photoPending: 'Foto real em breve',
    reserve: 'Reservar este carro',
    starlinkNote: 'Carro com internet Starlink disponível sob solicitação. Peça na cotação.',
    details: {
      'REF. 01': { category: 'Sedan executivo', extras: ['Água', 'Balas', 'Carregador de celular'] },
      'REF. 02': { category: 'Sedan executivo', extras: ['Água', 'Balas', 'Carregador de celular'] },
      'REF. 03': { category: 'SUV', extras: ['Água', 'Balas', 'Carregador de celular', 'Mais espaço para bagagem'] },
    } as Record<string, { category: string; extras: string[] }>,
  },

  protocol: {
    label: 'Em toda viagem',
    heading: 'Protocolo Beninca',
    subheading: 'O que está garantido em toda viagem.',
    clauses: [
      { title: 'Você sabe o valor antes.', text: 'A cotação chega pelo WhatsApp e o valor combinado é o valor pago.', confirmed: true },
      {
        title: 'Espera e cancelamento combinados.',
        text: 'O tempo de espera no aeroporto e as regras de cancelamento ficam acertados com você na reserva.',
        confirmed: true,
      },
      { title: 'Água, balas e carregador.', text: 'Em todos os carros. E, se pedir, o carro com internet Starlink.', confirmed: true },
      { title: 'Atendimento 24 horas.', text: 'Inclusive de madrugada, para voos cedo, com agendamento.', confirmed: true },
      { title: 'Nota fiscal para empresas.', text: 'Em toda viagem.', confirmed: true },
      { title: 'Discrição.', text: 'Conversas e destinos dos clientes ficam no carro.', confirmed: true },
      { title: 'Seu voo é monitorado.', text: 'Acompanhamos o horário de chegada do seu voo.', confirmed: false },
    ],
  },

  corporate: {
    label: 'Conta corporativa',
    heading: 'Sua empresa recebe visitas. A gente busca.',
    text:
      'Diretores, clientes e fornecedores chegando a Joinville e região pelos aeroportos de Curitiba, Navegantes e Florianópolis, com nota fiscal em toda viagem e pagamento por Pix ou cartão. Peça o carro com internet Starlink e as quase duas horas de estrada viram tempo de trabalho. Para visitantes estrangeiros, temos motorista bilíngue, que fala português e inglês.',
    form: {
      heading: 'Pedir proposta',
      labels: { company: 'Empresa', name: 'Seu nome', email: 'E-mail corporativo', volume: 'Viagens por mês' },
      volumePlaceholder: 'Escolha uma opção',
      volumes: [
        { value: 'até 5', label: 'Até 5' },
        { value: '5 a 15', label: '5 a 15' },
        { value: 'mais de 15', label: 'Mais de 15' },
      ],
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
  },

  testimonials: {
    label: 'Quem já viajou',
    heading: 'O que dizem os clientes',
    googleLink: 'Ver no Google',
  },

  faq: {
    label: 'Dúvidas frequentes',
    heading: 'Antes de perguntar',
    items: [
      {
        q: 'Quanto custa a viagem?',
        a: 'Cada trajeto é cotado na hora. Mande origem, destino e horário pelo WhatsApp (47) 99946-7438 e receba o valor antes de confirmar.',
      },
      {
        q: 'Vocês atendem fora de Joinville?',
        a: 'Sim. Buscamos e levamos também em Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul e São Francisco do Sul. Outros destinos, sob consulta.',
      },
      { q: 'Vocês vão até o aeroporto de Curitiba?', a: 'Sim. Levamos e buscamos em Joinville, Navegantes, Curitiba e Florianópolis.' },
      {
        q: 'Quanto tempo leva até cada aeroporto?',
        a: 'Saindo de Joinville, sem trânsito: aprox. 15 min até o aeroporto de Joinville, 1h10 até Navegantes, 1h45 até Curitiba e 2h20 até Florianópolis.',
      },
      { q: 'Atendem de madrugada?', a: 'Sim, atendemos 24 horas com agendamento. Reserve com antecedência pelo WhatsApp.' },
      {
        q: 'Como funciona a espera se o voo atrasar?',
        a: 'O tempo de espera é combinado com você na reserva. Informe o número do voo ao pedir a cotação.',
      },
      { q: 'Como eu pago?', a: 'Pix ou cartão de crédito e débito, de todas as bandeiras. Emitimos nota fiscal para empresas.' },
      { q: 'Os motoristas falam inglês?', a: 'Sim, temos motorista bilíngue, que fala português e inglês. Peça na reserva.' },
      { q: 'Todos os carros têm internet?', a: 'Temos um carro com internet Starlink, disponível sob solicitação. Avise na cotação.' },
      { q: 'O que tem dentro do carro?', a: 'Água, balas e carregador de celular em todos os carros.' },
      { q: 'Quantas pessoas cabem?', a: 'Até 4 passageiros por carro. Para grupos maiores, fale com a gente.' },
      { q: 'Vocês emitem nota fiscal?', a: 'Sim, para empresas.' },
    ],
  },

  finalCta: {
    label: 'Fale com a gente',
    heading: 'Reserve pelo WhatsApp',
    phoneNote: 'WhatsApp e ligação · 24h com agendamento',
  },

  footer: {
    columns: { contact: 'Contato', site: 'Nesta página', area: 'Atendimento', social: 'Redes' },
    siteNavLabel: 'Seções da página',
    googleBusiness: 'Perfil no Google',
    cnpjLabel: 'CNPJ',
    airportsLabel: 'Aeroportos: JOI · NVT · CWB · FLN',
  },

  privacy: {
    summary: 'Política de privacidade',
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
          'Quando você manda uma mensagem, liga ou escreve um e-mail, recebemos os dados que você mesmo informar, como nome, telefone, endereços e horários da viagem. Usamos esses dados só para cotar, organizar e realizar a viagem e, para empresas, emitir a nota fiscal. Não vendemos nem compartilhamos esses dados com terceiros para propaganda. O WhatsApp é um serviço da Meta e segue a política de privacidade dela.',
        ],
      },
      {
        heading: 'Análise de visitas',
        body: [
          'O site usa o Google Analytics, que grava cookies de análise no seu navegador para contar visitas e cliques de forma agregada. Esses dados não identificam você pelo nome. Você pode bloquear esses cookies nas configurações do navegador.',
        ],
        onlyWithAnalytics: true,
      },
      {
        heading: 'Seus direitos',
        body: [
          'Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir para saber quais dados temos sobre você, corrigir ou apagar esses dados. Basta escrever para o e-mail ou WhatsApp desta página.',
        ],
      },
    ] as { heading: string; body: string[]; onlyWithAnalytics?: boolean }[],
  },

  whatsapp: {
    general: 'Olá! Vim pelo site e gostaria de uma cotação de transfer.',
    quoteIntro: 'Olá! Gostaria de uma cotação:',
    quoteFields: {
      origin: 'Saída',
      destination: 'Destino',
      date: 'Data',
      at: 'às',
      pax: 'Passageiros',
      flight: 'Voo',
      starlink: 'Carro com Starlink',
      english: 'Motorista que fala inglês',
    },
    route: 'Olá! Quero uma cotação de transfer de {from} para {to}. Data e horário: ',
    service: 'Olá! Quero uma cotação de {topic}. ',
    fleet: 'Olá! Quero reservar o {model} para uma viagem. ',
    corporate:
      'Olá! Sou da empresa {company} ({name}, {email}). Temos {volume} viagens por mês e queremos uma proposta com nota fiscal.',
  },
};

export type Dictionary = typeof pt;
