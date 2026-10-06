# Pendências do cliente

Itens que faltam para completar o site. Cada um diz onde fica no código e o que muda quando for preenchido. Nada aqui aparece no site enquanto estiver pendente. Textos novos entram nos dois dicionários (`lib/content/pt.ts` e `lib/content/en.ts`).

| # | Pendência | Onde fica | O que muda quando chegar |
|---|---|---|---|
| 1 | **Logo em vetor (SVG) ou PNG com fundo transparente.** Recebida em JPG e WebP (640×640, fundo preto); o site já usa essa versão. | `public/brand/` e `site.logo` (`lib/data.ts`). | Com o vetor, refazer `beninca-wordmark.png` (cabeçalho), `app/icon.png`, `app/apple-icon.png` e `public/brand/icon-*.png` com mais nitidez, e a logo do rodapé sem o quadrado preto. |
| 2 | **Fotos reais** dos três carros (lateral e 3/4 de frente) e do motorista. | Campo `image` de cada carro em `fleet` (`lib/data.ts`). Arquivos em `public/frota/` (WebP/AVIF, até 250KB, ex.: `transfer-executivo-joinville-corolla.webp`). | A ficha da frota troca a moldura "Foto real em breve" pela foto, com `next/image`. |
| 3 | **CEP** do endereço. | `site.address.postalCode` | Aparece no rodapé e entra no JSON-LD (`PostalAddress`). |
| 4 | **Coordenadas** (latitude e longitude) da base. | `site.geo` | Entram no JSON-LD (`GeoCoordinates`). |
| 5 | **Domínio definitivo** e, de preferência, e-mail no domínio (ex.: contato@beninca.com.br). | Variável `NEXT_PUBLIC_SITE_URL` (Vercel). E-mail em `site.email`. | Canonical, Open Graph, sitemap, robots e schema passam a usar o domínio. |
| 6 | **Google Meu Negócio** (link do perfil, depois de criado). | `site.googleBusinessUrl` | Aparece o link no rodapé e o perfil entra no `sameAs` do schema. |
| 7 | **Confirmação dos tempos de viagem** até os aeroportos (hoje: JOI 15 min, NVT 1h10, CWB 1h45, FLN 2h20, saindo de Joinville). | `approxTime` e `approxTimeConfirmed` em `airports` (`lib/data.ts`). Os tempos também aparecem na FAQ "Quanto tempo leva até cada aeroporto?" dos dois dicionários. | Hoje são exibidos sempre com "aprox.". Ajuste os valores se o cliente corrigir. |
| 8 | **Monitoramento de voo** em tempo real. | `pendingClaims.flightTracking` e a cláusula "Seu voo é monitorado" em `protocol.clauses` dos dois dicionários (`confirmed: false`). | Mude para `confirmed: true` nos dois idiomas: a cláusula aparece no Protocolo. Revise também a FAQ "Como funciona a espera se o voo atrasar?". |
| 9 | **Placa com o nome** do passageiro no desembarque. | `pendingClaims.nameSign` | Quando confirmado, acrescente a cláusula no `protocol` dos dois dicionários. |
| 10 | **Envio de nome, foto e placa** do motorista antes da viagem. | `pendingClaims.driverDetails` | Idem: cláusula no `protocol`. |
| 11 | **Capacidade de malas** de cada carro. | `luggage` de cada carro em `fleet` (`confirmed: false`). | Preencha `value` (ex.: `'2 grandes + 2 pequenas'`) e `confirmed: true`: aparece a linha **MALAS** na ficha. |
| 12 | **Depoimentos reais**, com autorização por escrito. | `testimonials` (hoje `[]`). | A seção de depoimentos passa a aparecer na home (uma citação grande). Se a origem for o Google, aparece o link para o perfil. Não acrescentar `aggregateRating` sem avaliações reais. |
| 13 | **Logos de empresas clientes**, com autorização. | Ainda não há componente. | Só criar uma faixa de logos quando houver autorização. |

## Observações

- Nomes oficiais dos aeroportos (`airports` em `lib/data.ts`) foram escritos conforme a especificação. Confira numa fonte pública antes de publicar, caso algum tenha mudado.
- O idioma do motorista bilíngue foi confirmado (português e inglês) e já está no site e no schema (`knowsLanguage`).
- Cidades atendidas confirmadas: Joinville, Araquari, Garuva, Guaramirim, Itapoá, Jaraguá do Sul e São Francisco do Sul. Balneário Camboriú e Blumenau saíram do painel; se o cliente também atender essas cidades com frequência, é só acrescentá-las em `serviceArea`.
- Revisar a tradução para o inglês com o motorista bilíngue antes de publicar.
