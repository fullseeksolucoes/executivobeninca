'use client';

import { useEffect, useRef } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Added on mount, so the no-JS state stays the final, static one. */
  armedClass?: string;
  /** Added the first time the element enters the viewport. */
  onClass?: string;
  /** Toggled while the element is out of the viewport. */
  pausedClass?: string;
}

export function InView({ className, armedClass, onClass = 'is-on', pausedClass, children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (armedClass) el.classList.add(armedClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add(onClass);
        if (pausedClass) el.classList.toggle(pausedClass, !entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armedClass, onClass, pausedClass]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
