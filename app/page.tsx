import type { Metadata } from 'next';
import { CoastLine } from '@/components/sections/CoastLine';
import { Corporate } from '@/components/sections/Corporate';
import { DepartureBoard } from '@/components/sections/DepartureBoard';
import { Faq } from '@/components/sections/Faq';
import { Fleet } from '@/components/sections/Fleet';
import { Hero } from '@/components/sections/Hero';
import { Protocol } from '@/components/sections/Protocol';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { JsonLd } from '@/components/ui/JsonLd';
import { faqSection, homeFaq, homeSeo } from '@/lib/data';
import { faqNode, pageGraph } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: '/',
  absolute: true,
  image: { path: '/opengraph-image', alt: homeSeo.ogAlt },
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={pageGraph(faqNode(homeFaq, '/'))} />
      <Hero />
      <QuoteSection location="hero" />
      <DepartureBoard />
      <CoastLine />
      <Services />
      <Fleet />
      <Protocol />
      <Corporate />
      <Testimonials />
      <Faq label={faqSection.label} heading={faqSection.heading} items={homeFaq} />
    </>
  );
}
