import React, { useEffect, useRef } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
}

export const CountUp: React.FC<CountUpProps> = ({ value, duration = 1100 }) => {
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = valueRef.current;
    const parts = value.match(/^(\D*)(\d+)(.*)$/);
    if (!element || !parts) return;

    const [, prefix, digits, suffix] = parts;
    const target = Number(digits);
    const format = (number: number) => `${prefix}${String(number).padStart(digits.length, '0')}${suffix}`;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(element);

        const startedAt = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          element.textContent = format(Math.round(target * easedProgress));

          if (progress < 1) {
            frameId = window.requestAnimationFrame(animate);
          }
        };

        frameId = window.requestAnimationFrame(animate);
      },
      { threshold: 0.65 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [duration, value]);

  return <span ref={valueRef} aria-hidden="true">{value}</span>;
};
