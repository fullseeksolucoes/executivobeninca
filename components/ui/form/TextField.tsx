import type { FieldVariant } from './types';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'className'> {
  id: string;
  name: string;
  label: string;
  /** Keep the label for screen readers only (fields inside the quote sentence). */
  hideLabel?: boolean;
  variant?: FieldVariant;
  error?: string;
  /** Classes for the wrapper (width, layout). */
  className?: string;
}

/** Text, email or phone field in the site's style. */
export function TextField({ id, name, label, hideLabel, variant = 'box', error, className = '', ...input }: Props) {
  const errorId = `${id}-error`;
  return (
    <div className={`fx ${variant === 'line' ? 'quote-field' : ''} ${className}`}>
      <label htmlFor={id} className={hideLabel ? 'sr-only' : 'field-label'}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={variant === 'line' ? 'quote-input' : 'field-input'}
        {...input}
      />
      <span id={errorId} className={variant === 'line' ? 'quote-error' : 'field-error'} aria-live="polite">
        {error}
      </span>
    </div>
  );
}
