'use client';

import { useEffect, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Added on mount, so the no-JS state stays the final, static one. */
  armedClass?: string;
  /** Added the first time the element enters the viewport. */
  onClass?: string;
}

export function InView({ className, armedClass, onClass = 'is-on', children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (armedClass) el.classList.add(armedClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add(onClass);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armedClass, onClass]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
