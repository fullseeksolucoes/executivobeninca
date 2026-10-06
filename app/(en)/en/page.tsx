import { LandingPage } from '@/components/LandingPage';
import { landingMetadata } from '@/lib/seo';

export const metadata = landingMetadata('en');

export default function Page() {
  return <LandingPage locale="en" />;
}
