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
- Animações em CSS. **Não adicionar** framer-motion, three.js nem bibliotecas de ícones. O site não tem animação de carro. Exceção: **Lenis** (rolagem suave, igual ao projeto fullseek).
- Rolagem e navegação na página (igual ao fullseek): `components/layout/LenisProvider.tsx` liga o Lenis (`lerp: 0.15` na roda do mouse, `smoothWheel`, `touchMultiplier: 2`, `respectReducedMotion: false` a pedido do cliente, como no fullseek). Cliques em links usam curva ease-in-out com duração proporcional à distância (0,8s a 1,4s), para o percurso ficar visível nesta página longa. `components/layout/SmoothAnchors.tsx` intercepta links `#secao` e o link da logo e chama `scrollToSection()`/`scrollToTop()` de `lib/scroll.ts`, **sem colocar `#secao` na URL**. O menu do celular fecha e a rolagem começa 150ms depois; o Lenis fica parado com o menu aberto. A folga do cabeçalho vem do `scroll-margin-top` das seções. Elementos com rolagem própria levam `data-lenis-prevent`. Links novos só precisam de `href="#id"`.
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
- **Campos de formulário:** sempre os componentes de `components/ui/form/` — `TextField`, `Select`, `DatePicker` e `Checkbox` — nunca `<select>`, `<input type="date|time|checkbox">` nativos. Variantes: `line` (dentro da frase de cotação, com `hideLabel`) e `box` (formulários comuns). `Select` e `DatePicker` seguem os padrões WAI-ARIA (combobox/listbox e date picker) e mandam o valor por `<input type="hidden">`, então `FormData` funciona normalmente. O horário é um `Select` de 30 em 30 minutos. Estilos em `app/globals.css` (bloco "Field kit", classes `fx-*`).
- Política de privacidade: bloco `<details id="privacidade">` no rodapé.
- Pendências do cliente: `PENDENCIAS.md`.
- Logo do cliente (`public/brand/`, configurada em `site.logo`): `beninca-logo.webp/.jpg` é a original (640×640, fundo preto), usada no rodapé, no schema e na imagem OG; `beninca-wordmark.png` é o recorte "BENINCA / TRANSPORTE EXECUTIVO" com fundo transparente, usado no cabeçalho. Ícones: `app/icon.png` e `app/apple-icon.png` (recorte do "B") e `public/brand/icon-192.png`/`icon-512.png` (logo inteira, para o manifest). Não redesenhar a logo.

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
- Acessibilidade WCAG AA: labels reais, foco visível, `aria-label` em botões só com ícone, `prefers-reduced-motion` respeitado nas animações CSS (exceção pedida pelo cliente: a rolagem do Lenis).
- Metas: Lighthouse mobile Performance ≥ 95, SEO 100, Acessibilidade ≥ 95. Sem rolagem horizontal em 360px.
