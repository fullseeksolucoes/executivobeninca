import { FaqList } from '@/components/ui/FaqList';
import { SectionTitle } from '@/components/ui/SectionTitle';
import type { FaqEntry } from '@/lib/types';

interface Props {
  id?: string;
  label?: string;
  heading: string;
  items: FaqEntry[];
}

export function Faq({ id = 'duvidas', label, heading, items }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="border-t border-line py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle id={`${id}-titulo`} label={label} heading={heading} className="!block" />
        </div>
        <div className="lg:col-span-8">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}
