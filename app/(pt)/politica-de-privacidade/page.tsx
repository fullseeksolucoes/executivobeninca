import { PrivacyPage } from '@/components/PrivacyPage';
import { privacyMetadata } from '@/lib/seo';

export const metadata = privacyMetadata('pt-BR');

export default function Page() {
  return <PrivacyPage locale="pt-BR" />;
}
