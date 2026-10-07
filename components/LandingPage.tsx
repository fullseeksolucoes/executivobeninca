import { Corporate } from '@/components/sections/Corporate';
import { DepartureBoard } from '@/components/sections/DepartureBoard';
import { Faq } from '@/components/sections/Faq';
import { Fleet } from '@/components/sections/Fleet';
import { Hero } from '@/components/sections/Hero';
import { Protocol } from '@/components/sections/Protocol';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Region } from '@/components/sections/Region';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { JsonLd } from '@/components/ui/JsonLd';
import { getDictionary, type Locale } from '@/lib/i18n';
import { landingGraph } from '@/lib/schema';

/** The whole site: one landing page, rendered in the given language. */
export function LandingPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd data={landingGraph(locale, t.meta, t.faq.items)} />
      <Hero t={t} />
      <QuoteSection t={t} location="hero" />
      <DepartureBoard t={t} />
      <Region t={t} />
      <Services t={t} />
      <Fleet t={t} />
      <Protocol t={t} />
      <Corporate t={t} />
      <Testimonials t={t} />
      <Faq heading={t.faq.heading} items={t.faq.items} />
    </>
  );
}
