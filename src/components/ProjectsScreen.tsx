import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { CASE_STUDIES, TRUSTED_PARTNERS, ProjectCaseStudy } from '../data/portfolioData.ts';

interface ProjectsScreenProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onBackToHome, onOpenQuote }) => {
  const [selectedCase, setSelectedCase] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="min-h-screen bg-[#07132B] text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="mb-12">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9AA7C7] hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2A93B] block mb-2 font-mono">
                RÉALISATIONS & ÉTUDES DE CAS
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Projets livrés avec rigueur en Afrique Centrale
              </h1>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-bold text-xs transition-all shadow-lg self-start md:self-auto"
            >
              Lancer votre projet
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#0E1B38] rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-[#E2A93B]/40 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#36E2C6]"></span>
                    <span className="font-display text-sm font-bold text-white">{cs.clientName}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-[#9AA7C7]">{cs.location}</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 text-[#E2A93B]">
                    {cs.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#F3C969] transition-colors leading-snug">
                  {cs.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#081226] border border-white/5 mb-6">
                  {cs.impactMetrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-display text-lg font-bold text-[#36E2C6] tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Services */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCase(cs)}
                  className="text-xs font-semibold text-[#E2A93B] hover:text-[#F3C969] inline-flex items-center gap-1"
                >
                  <span>Détails</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Trusted Partners Bar */}
        <div className="p-8 rounded-2xl bg-[#0A1633] border border-white/10 text-center">
          <h3 className="font-display text-lg font-bold text-white mb-2">
            Réseau de Confiance Partenaire
          </h3>
          <p className="text-xs text-[#9AA7C7] mb-6">
            Une méthodologie éprouvée au service des leaders de la sous-région CEMAC
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRUSTED_PARTNERS.map((p, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#112042] border border-white/5 text-xs text-slate-300 font-medium"
              >
                {p.name} <span className="text-slate-500 text-[10px]">({p.sector})</span>
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0B1530] border border-[#E2A93B]/40 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] text-[#E2A93B] font-mono uppercase font-bold">Étude Détaillée</span>
                <h3 className="font-display text-xl font-bold text-white">{selectedCase.clientName}</h3>
              </div>
              <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedCase.summary}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase text-[#36E2C6]">Services déployés</h4>
              {selectedCase.servicesDelivered.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36E2C6]" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Fermer
              </button>
              <button
                onClick={() => { setSelectedCase(null); onOpenQuote(); }}
                className="px-5 py-2 rounded-xl bg-[#E2A93B] text-[#0B1530] font-bold text-xs"
              >
                Demander un projet similaire
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
