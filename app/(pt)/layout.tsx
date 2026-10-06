import { Shell, baseMetadata, baseViewport } from '@/components/layout/Shell';

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <Shell locale="pt-BR">{children}</Shell>;
}
