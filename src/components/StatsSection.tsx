import React from 'react';

/**
 * StatsSection: Compteurs de performance et réalisations
 * Disposition en 4 colonnes régulières sur fond sombre avec typographie Bricolage Grotesque
 */
export const StatsSection: React.FC = () => {
  const metrics = [
    {
      value: '91',
      label: 'Clients satisfaits',
      sublabel: 'Accompagnés avec rigueur',
    },
    {
      value: '+99',
      label: 'Projets terminés',
      sublabel: 'Livrables en production',
    },
    {
      value: '03',
      label: 'Experts qualifiés',
      sublabel: 'Ingénierie & architecture',
    },
    {
      value: '+10',
      label: 'Articles de blog',
      sublabel: "Partages d'expertise",
    },
  ];

  return (
    <section className="bg-[#05132C] text-white py-14 px-4 sm:px-8 border-t border-b border-white/10">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((item, index) => (
            <div
              key={index}
              className={`text-center ${index > 0 ? 'pt-6 md:pt-0' : ''}`}
            >
              <div className="font-['Bricolage_Grotesque'] text-[40px] sm:text-[48px] lg:text-[54px] font-[800] text-white tracking-tight leading-none tabular-nums">
                {item.value}
              </div>
              <div className="text-[15px] sm:text-[16px] font-semibold text-[#F3F5FA] mt-2">
                {item.label}
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#9AA7C7] mt-0.5 font-normal">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
