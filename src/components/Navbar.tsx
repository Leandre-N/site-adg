import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

/**
 * Navbar: Barre de navigation principale
 * Typographie: Bricolage Grotesque (titres) & Figtree (liens)
 * Contrat: Marque à gauche, liens au centre, CTA "Obtenir un devis" à droite
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#hero', active: true },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'TENYSY', href: '#tenysy', isProduct: true },
    { label: 'Projets', href: '#process' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#05132C]/95 backdrop-blur-md border-b border-white/8 transition-all">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: Les Anges du Digital - Excellence Numérique */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <BrandLogo className="h-14 w-14 rounded-xl transition-transform group-hover:scale-105" />

          <div className="flex flex-col">
            <span className="font-['Bricolage_Grotesque'] text-[19px] sm:text-[21px] font-bold text-white tracking-tight leading-tight">
              Les Anges du Digital
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E2A93B] bg-[#E2A93B]/10 px-1.5 py-0.5 rounded border border-[#E2A93B]/25">
                Excellence Numérique
              </span>
            </div>
          </div>
        </a>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#C6C6CE]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                link.active
                  ? 'text-[#F3C969] font-semibold'
                  : 'hover:text-white'
              }`}
            >
              {link.isProduct ? (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#36E2C6]/10 text-[#36E2C6] border border-[#36E2C6]/30 font-semibold text-[13px] hover:bg-[#36E2C6]/20 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36E2C6] animate-pulse" />
                  TENYSY
                </span>
              ) : (
                <>
                  {link.label}
                  {link.active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E2A93B] rounded-full" />
                  )}
                </>
              )}
            </a>
          ))}
        </nav>

        {/* ACTIONS DROITE: CTA + Profil/Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-semibold text-[14px] hover:shadow-[0_4px_20px_rgba(226,169,59,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-md"
          >
            <span>Obtenir un devis</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Badge Avatar Dirigeant / Emblème */}
          <div
            title="Cabinet d'Ingénierie Douala"
            className="w-9 h-9 rounded-full bg-[#13224A] border border-[#E2A93B]/40 flex items-center justify-center text-[12px] font-bold text-[#E2A93B] shadow-inner shrink-0"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0B1530] to-[#253765] flex items-center justify-center border border-white/10">
              <span className="text-[11px] font-bold text-[#F3C969]">AD</span>
            </div>
          </div>

          {/* Toggle Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* TIROIR MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1530] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-medium flex items-center justify-between ${
                  link.active ? 'text-[#E2A93B] font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.isProduct && (
                  <span className="text-xs px-2 py-0.5 rounded bg-[#36E2C6]/15 text-[#36E2C6] border border-[#36E2C6]/30">
                    ERP Cloud
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-semibold text-sm shadow-lg shadow-[#E2A93B]/20"
            >
              <span>Obtenir un devis personnalisé</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
