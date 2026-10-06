import { LandingPage } from '@/components/LandingPage';
import { landingMetadata } from '@/lib/seo';

export const metadata = landingMetadata('pt-BR');

export default function Page() {
  return <LandingPage locale="pt-BR" />;
}
