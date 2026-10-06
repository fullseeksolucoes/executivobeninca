import type { ContentSection } from '@/lib/types';

/** Editorial text blocks: one H2 per block, paragraphs below. */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="display h2">{s.heading}</h2>
          <div className="prose-body mt-6 max-w-3xl">
            {s.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
