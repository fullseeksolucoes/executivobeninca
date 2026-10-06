import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { AnalyticsListener } from '@/components/layout/AnalyticsListener';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { SkipLink } from '@/components/layout/SkipLink';
import { homeSeo, site } from '@/lib/data';
import { GA_ID, GSC_VERIFICATION, SITE_URL } from '@/lib/site';
import { messages, waLink } from '@/lib/whatsapp';
import './globals.css';

// Big Shoulders Display (Google now ships it as "Big Shoulders" with an optical
// size axis). We self-host only the display cut (opsz 72), latin subset, which
// is about half the size of the variable file. Next has no fallback metrics
// for it, so the size-adjusted fallbacks live in globals.css ("BS Fallback *").
const display = localFont({
  src: [
    { path: '../assets/fonts/BigShoulders-Display-800.woff2', weight: '800', style: 'normal' },
    { path: '../assets/fonts/BigShoulders-Display-900.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['BS Fallback Arial', 'BS Fallback Roboto', 'Arial Narrow', 'sans-serif'],
  variable: '--font-bs',
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-is',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  // Labels only: not needed for the first paint, so it is not preloaded.
  preload: false,
  variable: '--font-plex',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: homeSeo.title, template: `%s | ${site.shortName}` },
  description: homeSeo.description,
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
  ...(GSC_VERIFICATION ? { verification: { google: GSC_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const whatsappHref = waLink(messages.general);
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SkipLink />
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileCtaBar whatsappHref={whatsappHref} />
        <AnalyticsListener />
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
