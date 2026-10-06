import Image from 'next/image';
import { site } from '@/lib/data';

/** Client logo when available; typographic wordmark until then. */
export function Logo({ priority = false }: { priority?: boolean }) {
  if (site.logo) {
    const height = 56;
    const width = Math.round((site.logo.width / site.logo.height) * height);
    return <Image src={site.logo.src} alt={site.name} width={width} height={height} priority={priority} className="h-14 w-auto" />;
  }
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-[30px] font-black uppercase tracking-[0.04em] text-gold">{site.wordmark}</span>{' '}
      <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-text-2">{site.tagline}</span>
    </span>
  );
}
