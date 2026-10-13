import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
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
              DÉTAIL DU SERVICE
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
              Exemples d’accompagnement — à préciser selon votre besoin
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

          <p className="rounded-xl border border-white/5 bg-[#13224A]/40 p-4 text-xs leading-relaxed text-slate-400">
            Le contenu, les délais et les conditions sont précisés après échange et repris dans une proposition dédiée.
          </p>
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
