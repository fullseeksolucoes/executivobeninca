import Link from 'next/link';
import { ui } from '@/lib/data';

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb. The last item is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label={ui.breadcrumbLabel} className="label-mono">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-paper">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="underline-offset-4 hover:text-gold hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">›</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
