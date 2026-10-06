'use client';

import { useRef, useState } from 'react';
import { Select } from '@/components/ui/form/Select';
import { TextField } from '@/components/ui/form/TextField';
import { track } from '@/lib/analytics';
import type { Dictionary } from '@/lib/content/pt';
import { messages, waLink } from '@/lib/whatsapp';

type Field = 'company' | 'name' | 'email' | 'volume';
type Errors = Partial<Record<Field, string>>;

const FIELDS: Field[] = ['company', 'name', 'email', 'volume'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  idPrefix: string;
  copy: Dictionary['corporate']['form'];
  templates: Dictionary['whatsapp'];
}

export function CorporateForm({ idPrefix, copy, templates }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const id = (name: string) => `${idPrefix}-${name}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (f: Field) => String(data.get(f) ?? '').trim();

    const found: Errors = {};
    for (const f of FIELDS) if (!value(f)) found[f] = copy.errors[f];
    if (value('email') && !EMAIL.test(value('email'))) found.email = copy.errors.email;
    setErrors(found);

    const firstInvalid = FIELDS.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${id(firstInvalid)}`)?.focus();
      return;
    }

    const text = messages(templates).corporate({
      company: value('company'),
      name: value('name'),
      email: value('email'),
      volume: value('volume'),
    });
    track('generate_lead', { origin: 'corporate', destination: 'corporate', pax: value('volume'), location: 'corporate' });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  }

  const clear = (field: Field) => () => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const text = (name: Field, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <TextField id={id(name)} name={name} label={copy.labels[name]} required error={errors[name]} onChange={clear(name)} {...props} />
  );

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} data-hide-cta="" className="grid gap-5">
      {text('company', { type: 'text', autoComplete: 'organization' })}
      {text('name', { type: 'text', autoComplete: 'name' })}
      {text('email', { type: 'email', autoComplete: 'email', inputMode: 'email' })}
      <Select
        id={id('volume')}
        name="volume"
        label={copy.labels.volume}
        placeholder={copy.volumePlaceholder}
        options={copy.volumes}
        error={errors.volume}
        onChange={clear('volume')}
      />
      <button type="submit" className="btn btn-gold btn-lg mt-2">
        {copy.submit} <span className="arrow" aria-hidden="true">→</span>
      </button>
      <p role="status" className="font-mono text-[13px] text-[#f0a48f]">
        {Object.values(errors).some(Boolean) ? copy.errorSummary : ''}
      </p>
      <p className="-mt-3 text-[14px] text-muted">{copy.note}</p>
    </form>
  );
}
