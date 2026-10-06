import Link from 'next/link';
import { corporate as copy } from '@/lib/data';
import { CorporateForm } from './CorporateForm';

export function Corporate() {
  return (
    <section id="empresas" aria-labelledby="empresas-titulo" className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="label-mono mb-4">{copy.label}</p>
          <h2 id="empresas-titulo" className="display h2">
            {copy.heading}
          </h2>
          <p className="lead mt-8 max-w-2xl">{copy.text}</p>
          <Link href="/empresas" className="link-gold mt-8 inline-flex min-h-[44px] items-center gap-2">
            {copy.pageLink} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="border border-line bg-ink-2 p-5 sm:p-8 lg:col-span-5">
          <h3 className="display mb-6 text-[32px]">{copy.form.heading}</h3>
          <CorporateForm idPrefix="empresa-home" />
        </div>
      </div>
    </section>
  );
}
