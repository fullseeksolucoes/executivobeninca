interface Props {
  heading: React.ReactNode;
  id?: string;
  text?: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionTitle({ heading, id, text, tone = 'dark', className = '' }: Props) {
  const light = tone === 'light';
  return (
    <div className={`grid gap-6 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-7">
        <h2 id={id} className="display h2">
          {heading}
        </h2>
      </div>
      {text && <p className={`md:col-span-5 ${light ? 'text-ink/80' : 'text-text-2'}`}>{text}</p>}
    </div>
  );
}
