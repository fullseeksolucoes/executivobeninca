'use client';

import { useRef, useState } from 'react';
import { Checkbox } from '@/components/ui/form/Checkbox';
import { DatePicker } from '@/components/ui/form/DatePicker';
import { Select } from '@/components/ui/form/Select';
import { TextField } from '@/components/ui/form/TextField';
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

/** Every 30 minutes, 00:00 to 23:30. */
const TIMES = Array.from({ length: 48 }, (_, i) => `${String(Math.floor(i / 2)).padStart(2, '0')}:${i % 2 ? '30' : '00'}`);

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
  const clear = (field: Field) => () => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

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

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} data-hide-cta="" aria-describedby={id('note')}>
      <div className="quote-sentence">
        <div className="quote-seg">
          <span className="quote-seg-text">{copy.textStart}</span>
          <Select
            id={id('origin')}
            name="origin"
            label={copy.labels.origin}
            hideLabel
            variant="line"
            className="qf-origin"
            placeholder={copy.originPlaceholder}
            options={copy.origins.map((o) => ({ value: o, label: o }))}
            error={errors.origin}
            onChange={clear('origin')}
          />
        </div>

        <div className="quote-seg">
          <span className="quote-seg-text">{copy.textTo}</span>
          <TextField
            id={id('destination')}
            name="destination"
            label={copy.labels.destination}
            hideLabel
            variant="line"
            className="qf-destination"
            placeholder={copy.placeholders.destination}
            autoComplete="off"
            enterKeyHint="next"
            error={errors.destination}
            onChange={clear('destination')}
          />
        </div>

        <div className="quote-seg">
          <span className="quote-seg-text">{copy.textDate}</span>
          <DatePicker
            id={id('date')}
            name="date"
            label={copy.labels.date}
            hideLabel
            variant="line"
            className="qf-date"
            placeholder={copy.placeholders.date}
            locale={copy.intlLocale}
            labels={copy.calendar}
            error={errors.date}
            onChange={clear('date')}
          />
        </div>

        <div className="quote-seg">
          <span className="quote-seg-text">{copy.textTime}</span>
          <Select
            id={id('time')}
            name="time"
            label={copy.labels.time}
            hideLabel
            variant="line"
            className="qf-time"
            placeholder={copy.placeholders.time}
            initialActiveValue="08:00"
            options={[{ value: '', label: copy.timeAny }, ...TIMES.map((t) => ({ value: t, label: t }))]}
          />
        </div>

        <div className="quote-seg">
          <span className="quote-seg-text">{copy.textPax}</span>
          <Select
            id={id('pax')}
            name="pax"
            label={copy.labels.pax}
            hideLabel
            variant="line"
            className="qf-pax"
            defaultValue={copy.paxOptions[0]}
            options={copy.paxOptions.map((o) => ({ value: o, label: o }))}
          />
          <span aria-hidden="true" className="hidden min-[900px]:inline">
            {copy.textEnd}
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end lg:gap-8">
        <TextField
          id={id('flight')}
          name="flight"
          label={copy.labels.flight}
          className="max-w-xs"
          placeholder={copy.placeholders.flight}
          autoComplete="off"
          autoCapitalize="characters"
        />
        <div className="grid gap-1">
          <Checkbox id={id('starlink')} name="starlink" label={copy.labels.starlink} />
          <Checkbox id={id('english')} name="english" label={copy.labels.english} />
        </div>
        <button type="submit" className="btn btn-gold btn-lg w-full lg:w-auto">
          {copy.submit} <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <p role="status" className="mt-4 font-mono text-[13px] text-[#f0a48f]">
        {Object.values(errors).some(Boolean) ? copy.errorSummary : ''}
      </p>
      <p id={id('note')} className="mt-2 text-[15px] text-muted">
        {copy.note}
      </p>
    </form>
  );
}
