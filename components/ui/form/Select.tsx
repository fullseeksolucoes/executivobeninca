'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Chevron } from './icons';
import type { FieldOption, FieldVariant } from './types';

interface Props {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  options: FieldOption[];
  defaultValue?: string;
  placeholder?: string;
  /** Option highlighted when the list opens with nothing chosen yet (e.g. 08:00). */
  initialActiveValue?: string;
  variant?: FieldVariant;
  error?: string;
  onChange?: (value: string) => void;
  /** Classes for the wrapper (width, layout). */
  className?: string;
}

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Custom select following the WAI-ARIA "select-only combobox" pattern:
 * arrows, Home/End, PageUp/PageDown, Enter/Space, Esc, Tab and type-ahead.
 * The value goes to the form through a hidden input.
 */
export function Select({
  id,
  name,
  label,
  hideLabel,
  options,
  defaultValue = '',
  placeholder = '',
  initialActiveValue,
  variant = 'box',
  error,
  onChange,
  className = '',
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const [chosen, setChosen] = useState(defaultValue !== '');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const comboRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: '', timer: 0 });

  const labelId = `${id}-label`;
  const listId = `${id}-listbox`;
  const errorId = `${id}-error`;
  const optionId = (i: number) => `${id}-opt-${i}`;
  const last = options.length - 1;
  const selectedIndex = chosen ? options.findIndex((o) => o.value === value) : -1;
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  function openList(index?: number) {
    const fallback = options.findIndex((o) => o.value === initialActiveValue);
    setActive(index ?? (selectedIndex >= 0 ? selectedIndex : Math.max(0, fallback)));
    setOpen(true);
  }

  function commit(index: number) {
    const option = options[index];
    if (!option) return;
    setValue(option.value);
    setChosen(true);
    setOpen(false);
    onChange?.(option.value);
  }

  function typeAhead(char: string) {
    window.clearTimeout(typed.current.timer);
    typed.current.text += normalize(char);
    typed.current.timer = window.setTimeout(() => (typed.current.text = ''), 600);
    const start = open ? active : selectedIndex;
    const order = [...options.keys()].map((k) => (k + start + 1) % options.length);
    const match = order.find((i) => normalize(options[i].label).startsWith(typed.current.text));
    if (match !== undefined) openList(match);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const { key } = e;
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' ', 'Home', 'End'].includes(key)) {
        e.preventDefault();
        openList(key === 'Home' ? 0 : key === 'End' ? last : undefined);
      } else if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        typeAhead(key);
      }
      return;
    }
    const move = (to: number) => {
      e.preventDefault();
      setActive(Math.max(0, Math.min(last, to)));
    };
    switch (key) {
      case 'ArrowDown':
        return move(active + 1);
      case 'ArrowUp':
        return e.altKey ? (e.preventDefault(), commit(active)) : move(active - 1);
      case 'Home':
        return move(0);
      case 'End':
        return move(last);
      case 'PageDown':
        return move(active + 10);
      case 'PageUp':
        return move(active - 10);
      case 'Enter':
      case ' ':
        e.preventDefault();
        return commit(active);
      case 'Escape':
        e.preventDefault();
        return setOpen(false);
      case 'Tab':
        return commit(active);
      default:
        if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) typeAhead(key);
    }
  }

  // Keep the highlighted option visible while moving through the list.
  useEffect(() => {
    if (!open || active < 0) return;
    listRef.current?.querySelector(`#${CSS.escape(optionId(active))}`)?.scrollIntoView({ block: 'nearest' });
    // optionId only depends on id
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, active]);

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const line = variant === 'line';

  return (
    <div ref={rootRef} className={`fx ${line ? 'quote-field' : ''} ${className}`}>
      <span id={labelId} className={hideLabel ? 'sr-only' : 'field-label'} onClick={() => comboRef.current?.focus()}>
        {label}
      </span>
      <div
        ref={comboRef}
        id={id}
        role="combobox"
        tabIndex={0}
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={open && active >= 0 ? optionId(active) : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        onBlur={() => setOpen(false)}
        className={`fx-trigger ${line ? 'quote-input' : 'field-input'}`}
      >
        <span className={`fx-value ${selected ? '' : 'fx-placeholder'}`}>{selected?.label ?? placeholder}</span>
        <Chevron />
      </div>

      <ul ref={listRef} id={listId} role="listbox" aria-labelledby={labelId} tabIndex={-1} hidden={!open} data-lenis-prevent="" className="fx-pop fx-list">
        {options.map((option, i) => (
          <li
            key={option.value || `empty-${i}`}
            id={optionId(i)}
            role="option"
            aria-selected={i === selectedIndex}
            data-active={i === active ? '' : undefined}
            className="fx-option"
            // Keep focus on the combobox so blur does not close the list first.
            onPointerDown={(e) => e.preventDefault()}
            onPointerMove={() => active !== i && setActive(i)}
            onClick={() => commit(i)}
          >
            {option.label}
            <Check className="fx-option-check" />
          </li>
        ))}
      </ul>

      <input type="hidden" name={name} value={chosen ? value : ''} />
      <span id={errorId} className={line ? 'quote-error' : 'field-error'} aria-live="polite">
        {error}
      </span>
    </div>
  );
}
