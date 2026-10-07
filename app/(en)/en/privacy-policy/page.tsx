import { PrivacyPage } from '@/components/PrivacyPage';
import { privacyMetadata } from '@/lib/seo';

export const metadata = privacyMetadata('en');

export default function Page() {
  return <PrivacyPage locale="en" />;
}
