type IconName = 'whatsapp' | 'phone' | 'signal' | 'globe' | 'menu' | 'close' | 'instagram' | 'mail' | 'pin';

const paths: Record<IconName, React.ReactNode> = {
  whatsapp: (
    <>
      <path d="M4.5 19.5l1.2-3.9A8 8 0 1 1 8.6 18.4z" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.3 0 .5-.2.7l-.4.5c.6 1.1 1.5 2 2.6 2.6l.5-.4c.2-.2.4-.3.7-.2l1.5.6c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.6.3-1.6.5-3.2-.4a8.4 8.4 0 0 1-3.4-3.4c-.9-1.6-.7-2.6-.4-3.2z" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.6l1.4 4-1.9 1.3a11 11 0 0 0 6.5 6.5l1.3-1.9 4 1.4v2.6c0 1-.8 1.8-1.8 1.8A15.4 15.4 0 0 1 4.8 5.3c0-1 .8-1.8 1.8-1.8z" />
  ),
  signal: (
    <>
      <path d="M12 19.5h.01" />
      <path d="M8.5 15.8a5 5 0 0 1 7 0" />
      <path d="M5.3 12.6a9.5 9.5 0 0 1 13.4 0" />
      <path d="M2.2 9.4a14 14 0 0 1 19.6 0" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5s1.1-6.1 3.4-8.5z" />
    </>
  ),
  menu: (
    <>
      <path d="M3 7h18" />
      <path d="M3 12h18" />
      <path d="M3 17h18" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.3" />
    </>
  ),
};

export function Icon({ name, size = 20, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
