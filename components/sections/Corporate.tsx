import type { Dictionary } from '@/lib/content/pt';
import { CorporateForm } from './CorporateForm';

export function Corporate({ t }: { t: Dictionary }) {
  const copy = t.corporate;
  return (
    <section id="empresas" aria-labelledby="empresas-titulo" className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="label-mono mb-4">{copy.label}</p>
          <h2 id="empresas-titulo" className="display h2">
            {copy.heading}
          </h2>
          <p className="lead mt-8 max-w-2xl">{copy.text}</p>
        </div>
        <div className="border border-line bg-ink-2 p-5 sm:p-8 lg:col-span-5">
          <h3 className="display mb-6 text-[32px]">{copy.form.heading}</h3>
          <CorporateForm idPrefix="empresa" copy={copy.form} templates={t.whatsapp} />
        </div>
      </div>
    </section>
  );
}
