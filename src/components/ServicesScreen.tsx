import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Search, Filter, ShieldCheck, Sparkles, Clock, Globe } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/servicesData.ts';

interface ServicesScreenProps {
  onBackToHome: () => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: (serviceId?: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ 
  onBackToHome, 
  onSelectService,
  onOpenQuote 
}) => {
  const [selectedCat, setSelectedCat] = useState<'all' | 'dev' | 'infra' | 'marketing' | 'consulting'>('all');
  const [search, setSearch] = useState('');

  const filtered = SERVICES.filter(s => {
    const matchCat = selectedCat === 'all' || s.category === selectedCat;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || 
                        s.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#07132B] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation & Header */}
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9AA7C7] hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </button>

          <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2A93B] block mb-2 font-mono">
            CATALOGUE COMPLET DES MÉTIERS
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            11 Expertises d'ingénierie et de transformation digitale
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#9AA7C7] max-w-3xl mt-3 leading-relaxed">
            De la création de portails critiques à la sécurisation d'infrastructures physiques et cloud à Douala.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0E1B38] border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Tous les 11 métiers' },
              { id: 'dev', label: 'Développement Web/Mobile' },
              { id: 'infra', label: 'Infrastructures & Cloud' },
              { id: 'marketing', label: 'Branding & Social' },
              { id: 'consulting', label: 'Conseil & Audit' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCat === cat.id
                    ? 'bg-[#E2A93B] text-[#0B1530]'
                    : 'text-[#9AA7C7] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une expertise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#050E23] border border-white/15 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#E2A93B]"
            />
          </div>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="bg-[#0E1B38] rounded-2xl p-7 border border-white/10 hover:border-[#E2A93B]/40 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-[#36E2C6] uppercase">
                    {service.category}
                  </span>
                  {service.isPhare && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2A93B] text-[#0B1530]">
                      PHARE
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-[#F3C969] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-bold uppercase text-white/80 font-mono">Livrables clés :</div>
                  {service.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#E2A93B] shrink-0 mt-0.5" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#E2A93B] hover:underline"
                >
                  Voir fiche complète
                </button>

                <button
                  onClick={() => onOpenQuote(service.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#1B2D5E] hover:bg-[#E2A93B] hover:text-[#0B1530] text-xs font-semibold text-white transition-colors"
                >
                  Devis
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
