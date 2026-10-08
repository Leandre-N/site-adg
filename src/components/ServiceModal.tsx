import React from 'react';
import { X, Check, ArrowRight, Clock, Layers, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../data/servicesData.ts';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ 
  service, 
  onClose, 
  onRequestQuote 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B1530] border border-[#E2A93B]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#101E3D] to-[#0B1530]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2A93B] block mb-1">
              FICHE TECHNIQUE PRESTATION
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {service.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-[#9AA7C7]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Présentation
            </h4>
            <p className="leading-relaxed text-slate-300">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E2A93B] mb-3">
              Livrables & Engagements Contractuels
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#13224A]/60 border border-white/5">
                  <Check className="w-4 h-4 text-[#E2A93B] shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Execution Delay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#13224A]/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase font-mono mb-2">
                Technologies Employées
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-xs text-[#36E2C6] font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#13224A]/40 border border-white/5">
              <div className="text-[11px] text-slate-400 uppercase font-mono mb-2">
                Délai Moyen d'Exécution
              </div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E2A93B]" />
                <span>{service.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-white/10 bg-[#07132B] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-400 hover:text-white"
          >
            Fermer
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.id);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-bold text-xs transition-all shadow-lg flex items-center gap-2"
          >
            <span>Obtenir un devis pour cette prestation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
