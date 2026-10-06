import type { Metadata } from 'next';
import { FlapTiles } from '@/components/ui/FlapTiles';
import { getDictionary, localePath, locales } from '@/lib/i18n';
import { messages, waLink } from '@/lib/whatsapp';
import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: '404 · Beninca Transporte Executivo',
  robots: { index: false },
};

const copy = {
  'pt-BR': { code: 'Voo não encontrado', text: 'Esta página não está no painel.', home: 'Ir para o início', whatsapp: 'Falar no WhatsApp' },
  en: { code: 'Flight not found', text: 'This page is not on the board.', home: 'Go to the home page', whatsapp: 'Message us on WhatsApp' },
};

/** Bilingual 404: the site has two root layouts, so this page has its own <html>. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <body>
        <main className="wrap py-16 md:py-24">
          <FlapTiles code="404" label="404" />
          <div className="mt-12 grid gap-14 md:grid-cols-2">
            {locales.map((locale) => {
              const c = copy[locale];
              const t = getDictionary(locale);
              return (
                <section key={locale} lang={locale}>
                  <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.14em] text-gold">{c.code}</p>
                  {locale === 'pt-BR' ? (
                    <h1 className="display h1-page mt-4">{c.text}</h1>
                  ) : (
                    <p className="display h1-page mt-4">{c.text}</p>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={localePath[locale]} className="btn btn-outline btn-lg">
                      {c.home}
                    </a>
                    <a href={waLink(messages(t.whatsapp).general)} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                      {c.whatsapp} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </body>
    </html>
  );
}
