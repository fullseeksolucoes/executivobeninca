'use client';

import { useSyncExternalStore } from 'react';

const formatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

const getTime = () => formatter.format(new Date());
/** Fixed server text, so hydration never mismatches. */
const getServerTime = () => '--:--';

/** Current time in Joinville, updated on the client only. */
export function Clock() {
  const time = useSyncExternalStore(subscribe, getTime, getServerTime);
  return (
    <time suppressHydrationWarning className="tabular-nums text-paper">
      {time}
    </time>
  );
}
