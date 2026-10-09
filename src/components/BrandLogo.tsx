import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'h-12 w-12' }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-black/20 ${className}`}
  >
    <img
      src="/assets/les-anges-du-digital-logo.jpg"
      alt="Logo Les Anges du Digital"
      className="h-full w-full object-contain"
    />
  </span>
);
