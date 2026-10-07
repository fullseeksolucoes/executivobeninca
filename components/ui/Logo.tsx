import Image from 'next/image';
import { site } from '@/lib/data';

/** Header logo: the "BENINCA / TRANSPORTE EXECUTIVO" lockup from the client logo. */
export function Logo({ priority = false }: { priority?: boolean }) {
  const { src, width, height } = site.logo.wordmark;
  return (
    <Image
      src={src}
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      draggable={false}
      sizes="(min-width: 640px) 231px, 173px"
      className="h-9 w-auto sm:h-12"
    />
  );
}
