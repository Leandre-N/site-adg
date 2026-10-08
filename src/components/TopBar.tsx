import React from 'react';
import { MapPin, Clock, Mail, Globe, MessageCircle } from 'lucide-react';

/**
 * TopBar: Bandeau supérieur utilitaire avec coordonnées physiques et horaires
 * Conforme à la charte Spiritual-Tech Luxe de Douala
 */
export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#030B1A] text-[#9AA7C7] text-[12px] border-b border-white/5 py-2 px-4 sm:px-8">
      <div className="max-w-[1380px] mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Coordonnées physiques & Horaires d'ouverture */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#E2A93B] shrink-0" />
            <span>Ange Raphaël, à 20 m de la Saladière, en face de THE BEST, Douala</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#E2A93B] shrink-0" />
            <span>Lundi au vendredi, 08h00 à 17h30</span>
          </div>
        </div>

        {/* Contact direct et liens */}
        <div className="flex items-center gap-4 ml-auto">
          <a
            href="mailto:contact@lesangesdudigital.com"
            className="flex items-center gap-1.5 hover:text-[#E2A93B] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium">contact@lesangesdudigital.com</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/10 text-slate-400">
            <a
              href="#contact"
              aria-label="Portail global"
              className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/237621802405"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp direct"
              className="p-1 hover:text-[#36E2C6] hover:bg-white/5 rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
