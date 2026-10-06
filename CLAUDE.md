# CLAUDE.md — Site Beninca Transporte Executivo

Site institucional da **Beninca Transporte Executivo** (Joinville, SC). Transfer executivo para os aeroportos de Joinville (JOI), Navegantes (NVT), Curitiba (CWB) e Florianópolis (FLN). Toda conversão vai para o WhatsApp.

## Comandos

- `npm run dev`: desenvolvimento
- `npm run build`: build de produção (rodar antes de encerrar qualquer tarefa)
- `npm run lint`: lint (precisa passar sem avisos)

## Stack

- Next.js (App Router), TypeScript strict, Tailwind CSS 4 (tokens em `@theme`, em `app/globals.css`).
- Antes de usar uma API do Next.js, consulte `node_modules/next/dist/docs/`. Esta versão tem mudanças (por exemplo, `params` é uma Promise).
- Fontes via `next/font/google`: Big Shoulders Display (títulos), Instrument Sans (corpo) e IBM Plex Mono (rótulos e dados).
- Animações só em CSS. **Não adicionar** framer-motion, three.js nem bibliotecas de ícones.
- Server Components por padrão; `'use client'` só quando houver estado ou eventos.

## Onde fica cada coisa

- **Todo o conteúdo do site:** `lib/data.ts` (tipos em `lib/types.ts`). Nenhum texto de conteúdo fica dentro dos componentes.
- URL do site: só em `lib/site.ts` (`NEXT_PUBLIC_SITE_URL`).
- Links de WhatsApp: só via `waLink()` em `lib/whatsapp.ts`.
- JSON-LD: `lib/schema.ts` (um `@graph` com `@context` por página).
- Eventos de analytics: `track()` em `lib/analytics.ts`.
- Pendências do cliente: `PENDENCIAS.md`.

## Dados confirmados do cliente

- WhatsApp e telefone: (47) 99946-7438 · `+5547999467438`
- E-mail: adenilsonbeninca@yahoo.com.br · Instagram: @tr.executivo_beninca
- CNPJ 00.557.705/0001-04 · Rua XV de Novembro, 7276 – Vila Nova – Joinville – SC
- Frota: Corolla 2025, Civic 2022, WR-V 2027. Até 4 passageiros por carro.
- Água, balas e carregador em todos os carros. **Starlink em um carro, sob solicitação.**
- Motorista bilíngue. 24h com agendamento. Nota fiscal para empresas. Pix e cartões.
- Preço sempre **sob consulta**. Espera e cancelamento **combinados na reserva**.

## Regras de conteúdo (não quebrar)

- **Nunca inventar** preço, depoimento, nota, estatística, CEP, coordenadas ou tempo de espera.
- Não afirmar sem confirmação: monitoramento de voo, placa com nome no desembarque, envio de foto do motorista, capacidade de malas. No `data.ts`, esses itens ficam com `confirmed: false` e não aparecem.
- Não dizer que todos os carros têm Starlink. Não mencionar Cadastur.
- A seção de depoimentos só aparece se `testimonials` tiver itens reais.
- Textos em português do Brasil, frases curtas, falando com "você". Código e nomes de arquivos em inglês.

## Design

- Conceito "portão de desembarque": sinalização e painel de aeroporto, preto `#0A0A0A`, texto `#F4F1EA`, dourado `#D6B25E`.
- Títulos em caixa alta condensada; rótulos em mono espaçado; divisórias de 1px; cantos com raio de no máximo 2px; sem sombras pesadas.
- **Evitar a identidade do concorrente:** Playfair Display, Inter, azul/vermelho como cores de marca, foto de sedan em rua molhada com linhas de luz.
- Nada de grade de cards com ícone, gradientes coloridos ou emoji.

## SEO e qualidade (sempre)

- Um H1 por página. Metadata completa (canonical, Open Graph com `siteName`, `locale`, `type`, `url` e imagem) em toda página. Rotas e serviços usam `title.absolute`.
- Toda nova rota ou serviço entra no sitemap e recebe links internos (rodapé e "outras rotas"). Nenhuma página órfã.
- Nunca bloquear `/_next/` no robots. Sem `new Date()` no sitemap.
- Acessibilidade WCAG AA: labels reais, foco visível, `aria-label` em botões só com ícone, `prefers-reduced-motion` respeitado.
- Metas: Lighthouse mobile Performance ≥ 95, SEO 100, Acessibilidade ≥ 95. Sem rolagem horizontal em 360px.

## Como adicionar uma nova rota

Acrescente um objeto `RoutePage` em `lib/data.ts`, com slug, textos únicos (400 a 700 palavras) e FAQ própria. A página, o sitemap, o schema e os links internos são gerados a partir dele.
