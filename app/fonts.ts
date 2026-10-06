import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Big Shoulders Display (Google now ships it as "Big Shoulders" with an optical
// size axis). We self-host only the display cut (opsz 72), latin subset, which
// is about half the size of the variable file. Next has no fallback metrics
// for it, so the size-adjusted fallbacks live in globals.css ("BS Fallback *").
export const display = localFont({
  src: [
    { path: '../assets/fonts/BigShoulders-Display-800.woff2', weight: '800', style: 'normal' },
    { path: '../assets/fonts/BigShoulders-Display-900.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  adjustFontFallback: false,
  fallback: ['BS Fallback Arial', 'BS Fallback Roboto', 'Arial Narrow', 'sans-serif'],
  variable: '--font-bs',
});

export const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-is',
});

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  // Labels only: not needed for the first paint, so it is not preloaded.
  preload: false,
  variable: '--font-plex',
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
