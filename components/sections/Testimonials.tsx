import { testimonials, testimonialsSection as copy, site } from '@/lib/data';

/** Renders only when there are real testimonials. Shows a single quote. */
export function Testimonials() {
  const item = testimonials[0];
  if (!item) return null;
  const googleUrl = item.source === 'google' ? site.googleBusinessUrl : undefined;

  return (
    <section aria-labelledby="depoimentos-titulo" className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <p className="label-mono mb-4">{copy.label}</p>
        <h2 id="depoimentos-titulo" className="sr-only">
          {copy.heading}
        </h2>
        <figure>
          <blockquote className="display max-w-5xl text-[clamp(36px,4.6vw,72px)]">“{item.quote}”</blockquote>
          <figcaption className="label-mono mt-8">
            {item.name}
            {item.role && ` · ${item.role}`}
            {googleUrl && (
              <>
                {' · '}
                <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
                  {copy.googleLink}
                </a>
              </>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
