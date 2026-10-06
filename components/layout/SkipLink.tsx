import { ui } from '@/lib/data';

export function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="sr-only-focusable fixed left-4 top-4 z-[100] bg-gold px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.08em] text-ink"
    >
      {ui.skipLink}
    </a>
  );
}
