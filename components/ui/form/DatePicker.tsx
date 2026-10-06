'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarIcon } from './icons';
import type { FieldVariant } from './types';

export interface DatePickerLabels {
  /** Accessible name of the calendar popup. */
  dialog: string;
  prevMonth: string;
  nextMonth: string;
}

interface Props {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  placeholder: string;
  /** BCP 47 locale for month and weekday names (pt-BR, en). */
  locale: string;
  labels: DatePickerLabels;
  /** Days before today cannot be picked. */
  disablePast?: boolean;
  variant?: FieldVariant;
  error?: string;
  onChange?: (iso: string) => void;
  className?: string;
}

/* Dates are handled as local "YYYY-MM-DD" strings, never as UTC instants. */
const pad = (n: number) => String(n).padStart(2, '0');
const toIso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromIso = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const addDays = (iso: string, n: number) => {
  const d = fromIso(iso);
  d.setDate(d.getDate() + n);
  return toIso(d);
};
const addMonths = (iso: string, n: number) => {
  const d = fromIso(iso);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return toIso(d);
};
const monthKey = (iso: string) => iso.slice(0, 7);

/**
 * Date field with its own calendar popup (WAI-ARIA date picker combobox): arrows move by day/week, PageUp/
 * PageDown by month, Home/End to the start/end of the week, Enter picks, Esc
 * closes. The value goes to the form as YYYY-MM-DD through a hidden input.
 */
export function DatePicker({
  id,
  name,
  label,
  hideLabel,
  placeholder,
  locale,
  labels,
  disablePast = true,
  variant = 'box',
  error,
  onChange,
  className = '',
}: Props) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [focusDay, setFocusDay] = useState('');
  const [today, setToday] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLTableElement>(null);
  const moveFocus = useRef(false);

  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const dialogId = `${id}-dialog`;
  const titleId = `${id}-title`;
  const line = variant === 'line';

  const isDisabled = (iso: string) => disablePast && iso < today;

  function openCalendar() {
    const now = toIso(new Date());
    setToday(now);
    setFocusDay(value || now);
    moveFocus.current = true;
    setOpen(true);
  }

  function close(returnFocus: boolean) {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }

  function pick(iso: string) {
    if (isDisabled(iso)) return;
    setValue(iso);
    onChange?.(iso);
    close(true);
  }

  function goTo(iso: string) {
    moveFocus.current = true;
    setFocusDay(iso);
  }

  function onGridKeyDown(e: React.KeyboardEvent) {
    const weekday = fromIso(focusDay).getDay();
    const map: Record<string, () => string> = {
      ArrowLeft: () => addDays(focusDay, -1),
      ArrowRight: () => addDays(focusDay, 1),
      ArrowUp: () => addDays(focusDay, -7),
      ArrowDown: () => addDays(focusDay, 7),
      Home: () => addDays(focusDay, -weekday),
      End: () => addDays(focusDay, 6 - weekday),
      PageUp: () => addMonths(focusDay, e.shiftKey ? -12 : -1),
      PageDown: () => addMonths(focusDay, e.shiftKey ? 12 : 1),
    };
    if (map[e.key]) {
      e.preventDefault();
      goTo(map[e.key]());
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(focusDay);
    }
  }

  // Move keyboard focus to the active day after it changes.
  useEffect(() => {
    if (!open || !moveFocus.current) return;
    moveFocus.current = false;
    gridRef.current?.querySelector<HTMLButtonElement>(`[data-date="${focusDay}"]`)?.focus();
  }, [open, focusDay]);

  // Close on outside click and on Esc.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const display = value
    ? new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'short', year: 'numeric' }).format(fromIso(value))
    : placeholder;

  return (
    <div
      ref={rootRef}
      className={`fx ${line ? 'quote-field' : ''} ${className}`}
      onBlur={(e) => {
        // Tabbing out closes it; clicks outside are handled by pointerdown.
        if (open && e.relatedTarget && !rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <span id={labelId} className={hideLabel ? 'sr-only' : 'field-label'}>
        {label}
      </span>
      <div
        ref={triggerRef}
        id={id}
        role="combobox"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-labelledby={labelId}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        onClick={() => (open ? close(false) : openCalendar())}
        onKeyDown={(e) => {
          if (!open && ['Enter', ' ', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
            openCalendar();
          }
        }}
        className={`fx-trigger ${line ? 'quote-input' : 'field-input'}`}
      >
        <span className={`fx-value ${value ? '' : 'fx-placeholder'}`}>
          {display}
        </span>
        <CalendarIcon />
      </div>

      {open ? (
        <Calendar
          dialogId={dialogId}
          titleId={titleId}
          locale={locale}
          labels={labels}
          focusDay={focusDay}
          value={value}
          today={today}
          isDisabled={isDisabled}
          gridRef={gridRef}
          onKeyDown={onGridKeyDown}
          onPick={pick}
          onMonth={(n) => goTo(addMonths(focusDay, n))}
          disablePrev={disablePast && monthKey(focusDay) <= monthKey(today)}
        />
      ) : (
        <div id={dialogId} hidden />
      )}

      <input type="hidden" name={name} value={value} />
      <span id={errorId} className={line ? 'quote-error' : 'field-error'} aria-live="polite">
        {error}
      </span>
    </div>
  );
}

interface CalendarProps {
  dialogId: string;
  titleId: string;
  locale: string;
  labels: DatePickerLabels;
  focusDay: string;
  value: string;
  today: string;
  isDisabled: (iso: string) => boolean;
  gridRef: React.RefObject<HTMLTableElement | null>;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onPick: (iso: string) => void;
  onMonth: (delta: number) => void;
  disablePrev: boolean;
}

function Calendar({ dialogId, titleId, locale, labels, focusDay, value, today, isDisabled, gridRef, onKeyDown, onPick, onMonth, disablePrev }: CalendarProps) {
  const focus = fromIso(focusDay);
  const year = focus.getFullYear();
  const month = focus.getMonth();
  const title = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(focus);
  const longDay = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const shortWeekday = new Intl.DateTimeFormat(locale, { weekday: 'short' });
  const longWeekday = new Intl.DateTimeFormat(locale, { weekday: 'long' });

  // Weeks start on Sunday (Brazil and US).
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (string | null)[] = [
    ...Array<null>(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => toIso(new Date(year, month, i + 1))),
  ];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));
  const weekdays = Array.from({ length: 7 }, (_, i) => new Date(2023, 0, 1 + i)); // 2023-01-01 is a Sunday

  return (
    <div id={dialogId} role="dialog" aria-modal="false" aria-label={labels.dialog} className="fx-pop fx-cal" data-lenis-prevent="">
      <div className="fx-cal-head">
        <button type="button" className="fx-cal-nav" aria-label={labels.prevMonth} disabled={disablePrev} onClick={() => onMonth(-1)}>
          ←
        </button>
        <p id={titleId} className="fx-cal-title" aria-live="polite">
          {title}
        </p>
        <button type="button" className="fx-cal-nav" aria-label={labels.nextMonth} onClick={() => onMonth(1)}>
          →
        </button>
      </div>
      <table ref={gridRef} className="fx-cal-grid" role="grid" aria-labelledby={titleId} onKeyDown={onKeyDown}>
        <thead>
          <tr>
            {weekdays.map((d) => (
              <th key={d.getDay()} scope="col" abbr={longWeekday.format(d)}>
                {shortWeekday.format(d).replace('.', '').slice(0, 3)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, w) => (
            <tr key={w}>
              {week.map((iso, d) =>
                iso ? (
                  <td key={iso} role="gridcell" aria-selected={iso === value}>
                    <button
                      type="button"
                      className="fx-day"
                      data-date={iso}
                      data-today={iso === today ? '' : undefined}
                      tabIndex={iso === focusDay ? 0 : -1}
                      aria-pressed={iso === value}
                      aria-disabled={isDisabled(iso) || undefined}
                      aria-label={longDay.format(fromIso(iso))}
                      onClick={() => onPick(iso)}
                    >
                      {Number(iso.slice(8))}
                    </button>
                  </td>
                ) : (
                  <td key={`empty-${w}-${d}`} />
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
