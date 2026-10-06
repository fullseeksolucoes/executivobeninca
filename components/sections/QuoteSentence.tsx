'use client';

import { useRef, useState } from 'react';
import { track, type WhatsappLocation } from '@/lib/analytics';
import type { Dictionary } from '@/lib/content/pt';
import { messages, waLink } from '@/lib/whatsapp';

type Field = 'origin' | 'destination' | 'date';
type Errors = Partial<Record<Field, string>>;

interface Props {
  /** Prefix for stable field ids. */
  idPrefix: string;
  copy: Dictionary['quoteForm'];
  templates: Dictionary['whatsapp'];
  location: WhatsappLocation;
}

function toDayMonth(iso: string) {
  const [, m, d] = iso.split('-');
  return `${d}/${m}`;
}

function todayIso() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function QuoteSentence({ idPrefix, copy, templates, location }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const id = (name: string) => `${idPrefix}-${name}`;

  function validate(data: FormData): Errors {
    const next: Errors = {};
    if (!String(data.get('origin') ?? '').trim()) next.origin = copy.errors.origin;
    if (!String(data.get('destination') ?? '').trim()) next.destination = copy.errors.destination;
    const date = String(data.get('date') ?? '');
    if (!date) next.date = copy.errors.date;
    else if (date < todayIso()) next.date = copy.errors.datePast;
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);

    const firstInvalid = (['origin', 'destination', 'date'] as Field[]).find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${id(firstInvalid)}`)?.focus();
      return;
    }

    const origin = String(data.get('origin'));
    const destination = String(data.get('destination')).trim();
    const pax = String(data.get('pax'));
    const text = messages(templates).quote({
      origin,
      destination,
      date: toDayMonth(String(data.get('date'))),
      time: String(data.get('time') ?? ''),
      timeFallback: copy.timeFallback,
      pax,
      flight: String(data.get('flight') ?? '').trim() || copy.flightFallback,
      starlink: data.get('starlink') ? copy.yes : copy.no,
      english: data.get('english') ? copy.yes : copy.no,
    });

    track('generate_lead', { origin, destination, pax, location });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  }

  const fieldProps = (name: Field) => ({
    id: id(name),
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': id(`${name}-error`),
  });

  const error = (name: Field) => (
    <span id={id(`${name}-error`)} className="quote-error" aria-live="polite">
      {errors[name]}
    </span>
  );

  const toggle = (name: 'starlink' | 'english') => (
    <label className="toggle" htmlFor={id(name)}>
      <input id={id(name)} name={name} type="checkbox" value="1" />
      <span className="toggle-track" aria-hidden="true" />
      {copy.labels[name]}
    </label>
  );

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} data-hide-cta="" aria-describedby={id('note')}>
      <div className="quote-sentence">
        <span className="quote-seg">
          <span className="quote-seg-text">{copy.textStart}</span>
          <span className="quote-field qf-origin">
            <label htmlFor={id('origin')} className="sr-only">
              {copy.labels.origin}
            </label>
            <select {...fieldProps('origin')} defaultValue="" className="quote-input" autoComplete="off">
              <option value="" disabled>
                {copy.originPlaceholder}
              </option>
              {copy.origins.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {error('origin')}
          </span>
        </span>

        <span className="quote-seg">
          <span className="quote-seg-text">{copy.textTo}</span>
          <span className="quote-field qf-destination">
            <label htmlFor={id('destination')} className="sr-only">
              {copy.labels.destination}
            </label>
            <input
              {...fieldProps('destination')}
              type="text"
              placeholder={copy.placeholders.destination}
              autoComplete="off"
              enterKeyHint="next"
              className="quote-input"
            />
            {error('destination')}
          </span>
        </span>

        <span className="quote-seg">
          <span className="quote-seg-text">{copy.textDate}</span>
          <span className="quote-field qf-date">
            <label htmlFor={id('date')} className="sr-only">
              {copy.labels.date}
            </label>
            <input {...fieldProps('date')} type="date" inputMode="numeric" autoComplete="off" className="quote-input" />
            {error('date')}
          </span>
        </span>

        <span className="quote-seg">
          <span className="quote-seg-text">{copy.textTime}</span>
          <span className="quote-field qf-time">
            <label htmlFor={id('time')} className="sr-only">
              {copy.labels.time}
            </label>
            <input id={id('time')} name="time" type="time" inputMode="numeric" autoComplete="off" className="quote-input" />
          </span>
        </span>

        <span className="quote-seg">
          <span className="quote-seg-text">{copy.textPax}</span>
          <span className="quote-field qf-pax">
            <label htmlFor={id('pax')} className="sr-only">
              {copy.labels.pax}
            </label>
            <select id={id('pax')} name="pax" defaultValue={copy.paxOptions[0]} className="quote-input">
              {copy.paxOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </span>
          <span aria-hidden="true" className="hidden min-[900px]:inline">
            {copy.textEnd}
          </span>
        </span>
      </div>

      <div className="mt-10 grid gap-6 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end lg:gap-8">
        <div className="max-w-xs">
          <label htmlFor={id('flight')} className="field-label">
            {copy.labels.flight}
          </label>
          <input
            id={id('flight')}
            name="flight"
            type="text"
            placeholder={copy.placeholders.flight}
            autoComplete="off"
            autoCapitalize="characters"
            className="field-input"
          />
        </div>
        <div className="grid gap-1">
          {toggle('starlink')}
          {toggle('english')}
        </div>
        <button type="submit" className="btn btn-gold btn-lg w-full lg:w-auto">
          {copy.submit} <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <p role="status" className="mt-4 font-mono text-[13px] text-[#f0a48f]">
        {Object.keys(errors).length ? copy.errorSummary : ''}
      </p>
      <p id={id('note')} className="mt-2 text-[15px] text-muted">
        {copy.note}
      </p>
    </form>
  );
}
