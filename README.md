# Beninca Transporte Executivo — site

Site institucional da Beninca Transporte Executivo (Joinville, SC). Next.js 16 (App Router), TypeScript, Tailwind CSS 4. Todas as páginas são geradas de forma estática.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

Node 20.9 ou mais recente.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

| Variável | Para que serve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública, sem barra no final. Provisória: `https://www.beninca.com.br`. Usada em canonical, Open Graph, sitemap, robots e JSON-LD. |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4 (`G-XXXX`). Sem valor, nenhum script de análise é carregado. Com valor, a política de privacidade passa a citar os cookies de análise. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Código da meta tag de verificação do Google Search Console. |

## Onde editar o conteúdo

**Todo o texto do site fica em `lib/data.ts`** (tipos em `lib/types.ts`). Os componentes não têm texto próprio.

- Dados do negócio: `site`
- Aeroportos: `airports`
- Frota: `fleet`
- Seções da home: `hero`, `quoteForm`, `departureBoard`, `coastLine`, `servicesSection`, `fleetSection`, `protocol`, `corporate`, `homeFaq`, `finalCta`, `footer`
- Páginas de rota: `routes`
- Páginas de serviço: `services`
- `/empresas`: `companiesPage`
- Política de privacidade: `privacyPage`
- Data do conteúdo (usada no sitemap): `CONTENT_UPDATED`. Atualize quando mudar o texto.

Outros pontos únicos:

- URL do site: `lib/site.ts`
- Links de WhatsApp e mensagens prontas: `lib/whatsapp.ts` (`waLink()` e `messages`)
- JSON-LD: `lib/schema.ts`
- Metadata das páginas: `lib/seo.ts`
- Eventos de analytics: `lib/analytics.ts` (`track()`). Links server-side usam `data-track`, lido por `components/layout/AnalyticsListener.tsx`.

## Adicionar uma nova rota

Acrescente um objeto ao array `routes` em `lib/data.ts`, com:

- `slug` único (vira `/transfer/{slug}`)
- textos únicos, de 400 a 700 palavras somando `lead`, `sections`, `about` e `faq`
- `boardCode` (letras do painel), `approxTime` e `approxTimeConfirmed`
- `quote.origin` (um dos valores de `quoteForm.origins`) e `quote.destination`

A página, a imagem OG, o sitemap, o JSON-LD, a linha no painel de saídas, os links do rodapé e de "Outras rotas" são gerados a partir dele. Não repita parágrafos de outras rotas.

## Ativar os depoimentos

Preencha `testimonials` em `lib/data.ts` com depoimentos **reais e autorizados**. A seção aparece sozinha quando o array tiver itens. Se `source` for `'google'` e `site.googleBusinessUrl` existir, aparece o link para o perfil.

## Pendências

Veja `PENDENCIAS.md`. Itens não confirmados ficam com `confirmed: false` e não aparecem no site.

## Validar os dados estruturados

Cada página tem um único `<script type="application/ld+json">` com `@graph` (`LocalBusiness`/`TaxiService`, `WebSite` e, conforme a página, `Service`, `FAQPage` e `BreadcrumbList`).

1. Publique (ou use um túnel para o ambiente local).
2. Teste cada tipo de página no [Rich Results Test](https://search.google.com/test/rich-results): home, uma rota, um serviço e `/empresas`.
3. Confira também no [Schema Markup Validator](https://validator.schema.org/).
4. Esperado: `LocalBusiness`, `FAQPage` e `BreadcrumbList` reconhecidos, sem erros.

## Google Meu Negócio

1. Acesse [business.google.com](https://business.google.com) com a conta do cliente.
2. Crie o perfil com **exatamente** o mesmo nome, endereço e telefone do site (NAP idêntico):
   - Beninca Transporte Executivo
   - Rua XV de Novembro, 7276 – Vila Nova – Joinville – SC
   - (47) 99946-7438
3. Categoria principal: "Serviço de transfer" (ou "Serviço de motorista particular").
4. Horário: aberto 24 horas. Informe o site e o WhatsApp.
5. Depois da verificação, copie o link do perfil para `site.googleBusinessUrl`.

## Deploy na Vercel

1. Importe o repositório na Vercel (framework detectado: Next.js).
2. Em *Settings → Environment Variables*, cadastre `NEXT_PUBLIC_SITE_URL` (e, se houver, `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_GSC_VERIFICATION`).
3. Faça o deploy. Ao trocar de domínio, atualize `NEXT_PUBLIC_SITE_URL` e faça um novo deploy.
4. Envie `https://SEU-DOMINIO/sitemap.xml` no Google Search Console.

## Fontes

- Big Shoulders Display (títulos): servida localmente de `assets/fonts/` (corte opsz 72, pesos 800 e 900, subconjunto latin), com fallback de largura ajustada em `app/globals.css`.
- Instrument Sans e IBM Plex Mono: `next/font/google`.
- Os `.ttf` em `assets/fonts/` são usados só nas imagens OG e nos ícones gerados por código.
