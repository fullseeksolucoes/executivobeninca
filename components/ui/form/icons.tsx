export function Chevron() {
  return (
    <svg className="fx-chevron" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" focusable="false">
      <path d="M1 1.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg className="fx-chevron fx-cal-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true" focusable="false">
      <rect x="1.5" y="2.5" width="13" height="12" rx="1" />
      <path d="M1.5 6.5h13M5 1v3M11 1v3" strokeLinecap="round" />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" focusable="false">
      <path d="M3 8.5l3.2 3L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
