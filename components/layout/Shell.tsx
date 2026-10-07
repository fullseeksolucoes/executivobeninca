import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { fontVariables } from '@/app/fonts';
import { getDictionary, type Locale } from '@/lib/i18n';
import { GA_ID, GSC_VERIFICATION, SITE_URL } from '@/lib/site';
import { messages, waLink } from '@/lib/whatsapp';
import { AnalyticsListener } from './AnalyticsListener';
import { Footer } from './Footer';
import { Header } from './Header';
import { LenisProvider } from './LenisProvider';
import { MobileCtaBar } from './MobileCtaBar';
import { SkipLink } from './SkipLink';
import { SmoothAnchors } from './SmoothAnchors';
import 'lenis/dist/lenis.css';
import '@/app/globals.css';

/** Shared by both root layouts. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Beninca Transporte Executivo',
  formatDetection: { telephone: false, email: false, address: false },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const baseViewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

/** <html> and <body> for one language: header, footer, mobile bar and analytics. */
export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale);
  const whatsappHref = waLink(messages(t.whatsapp).general);
  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <SkipLink label={t.ui.skipLink} />
        <Header t={t} locale={locale} whatsappHref={whatsappHref} />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer t={t} locale={locale} />
        <MobileCtaBar whatsappHref={whatsappHref} ui={t.ui} />
        <AnalyticsListener />
        <LenisProvider />
        <SmoothAnchors />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
