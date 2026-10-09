import React, { useLayoutEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Scroll-triggered reveal that leaves content visible when motion is reduced or unsupported. */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const revealOnFocus = () => {
    if (elementRef.current) {
      elementRef.current.dataset.revealState = 'visible';
    }
  };

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.dataset.revealState = 'visible';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealState = 'visible';
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );

    element.dataset.revealState = 'hidden';
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`motion-reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      onFocusCapture={revealOnFocus}
    >
      {children}
    </div>
  );
};
