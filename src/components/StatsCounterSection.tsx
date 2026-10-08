import React from 'react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const StatsCounterSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#05132c] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 md:pt-0' : ''}`}
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="font-display text-sm sm:text-base font-bold text-[#E2A93B] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#9AA7C7]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
