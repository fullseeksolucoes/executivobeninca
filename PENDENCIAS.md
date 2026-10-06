# Pendências do cliente

Itens que faltam para completar o site. Cada um diz onde fica no código e o que muda quando for preenchido. Nada aqui aparece no site enquanto estiver pendente.

| # | Pendência | Onde fica | O que muda quando chegar |
|---|---|---|---|
| 1 | **Logo** em SVG ou PNG com fundo transparente. Hoje não há nenhum arquivo de logo no projeto. | `site.logo` em `lib/data.ts` (hoje `undefined`). Coloque o arquivo em `public/brand/` (ex.: `logo-beninca.png`). | Preencha `logo: { src: '/brand/logo-beninca.png', width, height }`. O cabeçalho troca o wordmark tipográfico pela logo (`components/ui/Logo.tsx`). Os ícones (`app/icon.tsx`, `app/apple-icon.tsx`) usam um "B" dourado e podem passar a usar a logo. |
| 2 | **Fotos reais** dos três carros (lateral e 3/4 de frente) e do motorista. | Campo `image` de cada carro em `fleet` (`lib/data.ts`). Arquivos em `public/frota/` (WebP/AVIF, até 250KB, ex.: `transfer-executivo-joinville-corolla.webp`). | A ficha da frota troca a moldura "Foto real em breve" pela foto, com `next/image`. |
| 3 | **CEP** do endereço. | `site.address.postalCode` | Aparece no rodapé e entra no JSON-LD (`PostalAddress`). |
| 4 | **Coordenadas** (latitude e longitude) da base. | `site.geo` | Entram no JSON-LD (`GeoCoordinates`). |
| 5 | **Domínio definitivo** e, de preferência, e-mail no domínio (ex.: contato@beninca.com.br). | Variável `NEXT_PUBLIC_SITE_URL` (Vercel). E-mail em `site.email`. | Canonical, Open Graph, sitemap, robots e schema passam a usar o domínio. |
| 6 | **Google Meu Negócio** (link do perfil, depois de criado). | `site.googleBusinessUrl` | Aparece o link no rodapé e o perfil entra no `sameAs` do schema. |
| 7 | **Confirmação dos tempos de viagem** (hoje: JOI 15 min, NVT 1h10, CWB 1h45, FLN 2h20, BC 1h15, Blumenau 1h30). | `approxTime` e `approxTimeConfirmed` de cada rota em `routes`. | Hoje são exibidos sempre com "aprox.". Ajuste os valores se o cliente corrigir. |
| 8 | **Monitoramento de voo** em tempo real. | `pendingClaims.flightTracking` e a cláusula "Seu voo é monitorado" em `protocol.clauses` (ambos `confirmed: false`). | Mude para `confirmed: true`: a cláusula aparece no Protocolo. Revise também a FAQ "Como funciona a espera se o voo atrasar?". |
| 9 | **Placa com o nome** do passageiro no desembarque. | `pendingClaims.nameSign` | Quando confirmado, acrescente a cláusula no `protocol` e cite nas rotas de aeroporto. |
| 10 | **Envio de nome, foto e placa** do motorista antes da viagem. | `pendingClaims.driverDetails` | Idem: cláusula no `protocol`. |
| 11 | **Idioma do motorista bilíngue.** | `pendingClaims.driverLanguage` e `site.languages` (hoje `['pt-BR']`). | Troque "bilíngue" pelo idioma nos textos e acrescente o código (ex.: `'en'`) em `site.languages`, que vai para o `knowsLanguage` do schema. |
| 12 | **Capacidade de malas** de cada carro. | `luggage` de cada carro em `fleet` (`confirmed: false`). | Preencha `value` (ex.: `'2 grandes + 2 pequenas'`) e `confirmed: true`: aparece a linha **MALAS** na ficha. |
| 13 | **Depoimentos reais**, com autorização por escrito. | `testimonials` (hoje `[]`). | A seção de depoimentos passa a aparecer na home (uma citação grande). Se a origem for o Google, aparece o link para o perfil. Não acrescentar `aggregateRating` sem avaliações reais. |
| 14 | **Logos de empresas clientes**, com autorização. | Ainda não há componente. | Só criar uma faixa de logos quando houver autorização. |

## Observações

- Nomes oficiais dos aeroportos (`airports` em `lib/data.ts`) foram escritos conforme a especificação. Confira numa fonte pública antes de publicar, caso algum tenha mudado.
- A faixa "Saídas de Joinville" usa "BC" e "BLU" como siglas de Balneário Camboriú e Blumenau. Não são códigos de aeroporto. Se o cliente preferir outra sigla, troque `boardCode` na rota.
