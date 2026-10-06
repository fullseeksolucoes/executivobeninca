interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'type'> {
  id: string;
  name: string;
  label: string;
}

/** Square checkbox with a gold check. The native input stays for keyboard and screen readers. */
export function Checkbox({ id, name, label, value = '1', ...input }: Props) {
  return (
    <label htmlFor={id} className="fx-check">
      <input id={id} name={name} type="checkbox" value={value} className="sr-only" {...input} />
      <span className="fx-check-box" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8.5l3.2 3L13 4.5" />
        </svg>
      </span>
      {label}
    </label>
  );
}
