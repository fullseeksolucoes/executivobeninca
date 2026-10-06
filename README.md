# Beninca Transporte Executivo — site

Landing page da Beninca Transporte Executivo (Joinville, SC), em português (`/`) e inglês (`/en`). Next.js 16 (App Router), TypeScript, Tailwind CSS 4. Tudo é gerado de forma estática.

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

O site é uma **única página**, em dois idiomas.

- **Textos:** `lib/content/pt.ts` (português) e `lib/content/en.ts` (inglês). Os dois têm a mesma estrutura; o TypeScript acusa se faltar algo no inglês. Toda mudança de texto deve ser feita nos dois.
- **Fatos do negócio** (iguais nos dois idiomas): `lib/data.ts`
  - `site`: nome, telefone, e-mail, endereço, CNPJ, idiomas do motorista
  - `airports`: aeroportos do painel e tempos aproximados
  - `serviceArea`: cidades atendidas (ordem de norte a sul)
  - `fleet`: carros
  - `testimonials`: depoimentos
  - `CONTENT_UPDATED`: data do conteúdo (sitemap e política de privacidade)
- Mensagens prontas do WhatsApp: chave `whatsapp` de cada dicionário; a montagem fica em `lib/whatsapp.ts`.
- Ordem das seções: `components/LandingPage.tsx`.
- A política de privacidade é um bloco expansível no rodapé (`#privacidade`).

Outros pontos únicos:

- URL do site: `lib/site.ts`
- Idiomas e URLs de cada idioma: `lib/i18n.ts`
- JSON-LD: `lib/schema.ts`
- Metadata e `hreflang`: `lib/seo.ts`
- Eventos de analytics: `lib/analytics.ts` (`track()`). Links server-side usam `data-track`, lido por `components/layout/AnalyticsListener.tsx`.

## Idiomas

- `/` em português (`app/(pt)`) e `/en` em inglês (`app/(en)/en`). Cada um tem o próprio root layout, com `<html lang>` correto. Trocar de idioma recarrega a página.
- O botão PT/EN fica no cabeçalho. As duas versões apontam uma para a outra com `hreflang`, e o sitemap lista as duas.
- A página 404 é bilíngue (`app/global-not-found.tsx`).

## Adicionar uma cidade atendida

Acrescente `{ name: 'Cidade' }` em `serviceArea` (`lib/data.ts`), na posição certa de norte a sul. Atualize também, nos dois dicionários, o texto `region.text`, a lista de origens `quoteForm.origins` e a pergunta "Vocês atendem fora de Joinville?" do FAQ.

## Ativar os depoimentos

Preencha `testimonials` em `lib/data.ts` com depoimentos **reais e autorizados**. A seção aparece sozinha quando o array tiver itens. Se `source` for `'google'` e `site.googleBusinessUrl` existir, aparece o link para o perfil.

## Pendências

Veja `PENDENCIAS.md`. Itens não confirmados ficam com `confirmed: false` e não aparecem no site.

## Validar os dados estruturados

Cada idioma tem um único `<script type="application/ld+json">` com `@graph`: `LocalBusiness`/`TaxiService`, `WebSite`, `WebPage` e `FAQPage`.

1. Publique (ou use um túnel para o ambiente local).
2. Teste `/` e `/en` no [Rich Results Test](https://search.google.com/test/rich-results).
3. Confira também no [Schema Markup Validator](https://validator.schema.org/).
4. Esperado: `LocalBusiness` e `FAQPage` reconhecidos, sem erros.

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
- Os `.ttf` em `assets/fonts/` são usados só nas imagens OG (`/og-pt.png`, `/og-en.png`).

## Logo e ícones

Arquivos em `public/brand/`, derivados da logo enviada pelo cliente (JPG/WebP 640×640, fundo preto):

- `beninca-logo.webp` / `.jpg`: original (rodapé, schema, imagem OG).
- `beninca-wordmark.png`: recorte do nome com fundo transparente (cabeçalho).
- `icon-192.png` / `icon-512.png`: manifest.
- `app/icon.png` e `app/apple-icon.png`: recorte do "B" (favicon e iPhone).

Quando chegar a versão em vetor, refaça esses recortes a partir dela.
