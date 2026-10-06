# CLAUDE.md — Site Beninca Transporte Executivo

**Landing page única** da **Beninca Transporte Executivo** (Joinville, SC), em português (`/`) e inglês (`/en`). Transfer executivo de Joinville e região para os aeroportos de Joinville (JOI), Navegantes (NVT), Curitiba (CWB) e Florianópolis (FLN). Toda conversão vai para o WhatsApp.

**Não criar outras páginas.** Conteúdo novo entra como seção da landing, nos dois idiomas.

## Comandos

- `npm run dev`: desenvolvimento
- `npm run build`: build de produção (rodar antes de encerrar qualquer tarefa)
- `npm run lint`: lint (precisa passar sem avisos)

## Stack

- Next.js 16 (App Router), TypeScript strict, Tailwind CSS 4 (tokens em `@theme`, em `app/globals.css`).
- Antes de usar uma API do Next.js, consulte `node_modules/next/dist/docs/`. Esta versão tem mudanças.
- Dois root layouts: `app/(pt)/layout.tsx` (`/`, `lang="pt-BR"`) e `app/(en)/layout.tsx` (`/en`, `lang="en"`), ambos usando `components/layout/Shell.tsx`. A 404 é `app/global-not-found.tsx` (bilíngue, flag `experimental.globalNotFound`).
- Imagens OG com URL fixa: `app/og-pt.png/route.tsx` e `app/og-en.png/route.tsx` (dentro de route groups, `opengraph-image` ganha sufixo na URL).
- Fontes (`app/fonts.ts`): Big Shoulders Display via `next/font/local` (`assets/fonts/`, opsz 72, pesos 800/900), Instrument Sans e IBM Plex Mono (sem preload) via `next/font/google`. O fallback com largura ajustada fica em `app/globals.css`.
- Animações só em CSS. **Não adicionar** framer-motion, three.js nem bibliotecas de ícones. O site não tem animação de carro.
- Server Components por padrão; `'use client'` só quando houver estado ou eventos.

## Onde fica cada coisa

- **Textos do site:** `lib/content/pt.ts` e `lib/content/en.ts` (mesma estrutura, tipo `Dictionary`). Nenhum texto fica dentro dos componentes. Toda mudança de texto vale para os dois idiomas.
- **Fatos do negócio** (iguais nos dois idiomas): `lib/data.ts` — `site`, `airports`, `serviceArea`, `fleet`, `pendingClaims`, `testimonials`.
- Idiomas e URLs: `lib/i18n.ts`. Metadata com `hreflang`: `lib/seo.ts`.
- URL do site: só em `lib/site.ts` (`NEXT_PUBLIC_SITE_URL`).
- Links e mensagens de WhatsApp: só via `waLink()` e `messages()` em `lib/whatsapp.ts` (modelos no dicionário, chave `whatsapp`).
- JSON-LD: `lib/schema.ts` (um `@graph` por página).
- Eventos de analytics: `track()` em `lib/analytics.ts`.
- Seções: `components/LandingPage.tsx` monta a página; cada seção em `components/sections/`.
- Política de privacidade: bloco `<details id="privacidade">` no rodapé.
- Pendências do cliente: `PENDENCIAS.md`.
- Logo: ainda não existe arquivo. Enquanto `site.logo` for `undefined`, o cabeçalho usa um wordmark tipográfico.

## Dados confirmados do cliente

- WhatsApp e telefone: (47) 99946-7438 · `+5547999467438`
- E-mail: adenilsonbeninca@yahoo.com.br · Instagram: @tr.executivo_beninca
- CNPJ 00.557.705/0001-04 · Rua XV de Novembro, 7276 – Vila Nova – Joinville – SC
- Cidades atendidas: Joinville (base), Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul e São Francisco do Sul. Aeroportos: JOI, NVT, CWB, FLN. Outros destinos sob consulta.
- Frota: Corolla 2025, Civic 2022, WR-V 2027. Até 4 passageiros por carro.
- Água, balas e carregador em todos os carros. **Starlink em um carro, sob solicitação.**
- **Motorista bilíngue: português e inglês.** 24h com agendamento. Nota fiscal para empresas. Pix e cartões.
- Preço sempre **sob consulta**. Espera e cancelamento **combinados na reserva**.

## Regras de conteúdo (não quebrar)

- **Nunca inventar** preço, depoimento, nota, estatística, CEP, coordenadas ou tempo de espera.
- Não afirmar sem confirmação: monitoramento de voo, placa com nome no desembarque, envio de foto do motorista, capacidade de malas. Esses itens ficam com `confirmed: false` e não aparecem.
- Não dizer que todos os carros têm Starlink. Não mencionar Cadastur.
- A seção de depoimentos só aparece se `testimonials` tiver itens reais.
- Português do Brasil, frases curtas, falando com "você". Inglês claro e direto. Código e nomes de arquivos em inglês.

## Design

- Conceito "portão de desembarque": sinalização e painel de aeroporto, preto `#0A0A0A`, texto `#F4F1EA`, dourado `#D6B25E`.
- Títulos em caixa alta condensada; rótulos em mono espaçado; divisórias de 1px; cantos com raio de no máximo 2px; sem sombras pesadas.
- **Evitar a identidade do concorrente:** Playfair Display, Inter, azul/vermelho como cores de marca, foto de sedan em rua molhada com linhas de luz.
- Nada de grade de cards com ícone, gradientes coloridos ou emoji.

## SEO e qualidade (sempre)

- Um H1 por página. Metadata completa (canonical, `hreflang` pt-BR/en/x-default, Open Graph com `siteName`, `locale`, `type`, `url` e imagem).
- Sitemap com as duas URLs e alternâncias de idioma. Nunca bloquear `/_next/` no robots. Sem `new Date()` no sitemap.
- Acessibilidade WCAG AA: labels reais, foco visível, `aria-label` em botões só com ícone, `prefers-reduced-motion` respeitado.
- Metas: Lighthouse mobile Performance ≥ 95, SEO 100, Acessibilidade ≥ 95. Sem rolagem horizontal em 360px.
