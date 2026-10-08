import React from 'react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const MethodologySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F3F5FA] text-[#0B1530] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#986E18]">
              MÉTHODOLOGIE EN 4 PHASES
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1530] tracking-tight leading-tight mb-4">
            Notre processus de travail
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#475569] leading-relaxed">
            Une méthode rigoureuse orientée résultats et respect strict des délais pour garantir une exécution sans friction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.methodology.map((step) => {
            const isTeal = step.color === 'teal';

            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Top Number Badge and Phase */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-9 h-9 rounded-lg font-display font-black text-sm flex items-center justify-center shadow-sm ${
                        isTeal 
                          ? 'bg-[#36E2C6] text-[#0B1530]' 
                          : 'bg-[#E2A93B] text-[#0B1530]'
                      }`}
                    >
                      {step.step}
                    </div>

                    <span
                      className={`text-[10px] font-bold tracking-wider uppercase font-mono ${
                        isTeal ? 'text-[#007A69]' : 'text-[#986E18]'
                      }`}
                    >
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0B1530] mb-3 group-hover:text-[#986E18] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom decorative subtle indicator line */}
                <div
                  className={`mt-6 h-1 w-10 rounded-full transition-all group-hover:w-full ${
                    isTeal ? 'bg-[#36E2C6]' : 'bg-[#E2A93B]'
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
