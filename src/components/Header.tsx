import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  ExternalLink, 
  Menu, 
  X, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'tenysy', label: 'TENYSY', isSpecial: true },
    { id: 'projets', label: 'Projets' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'design-system', label: 'Design System' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top micro-bar */}
      <div className="bg-[#05132c] border-b border-white/5 py-2 px-4 sm:px-8 text-xs text-[#9AA7C7]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Location & hours */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#E2A93B] shrink-0" />
              <span className="truncate">Ange Raphaël, à 20 m de la Saladière, en face de THE BEST, Douala</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#36E2C6] shrink-0" />
              <span>Lundi au vendredi, 08h00 à 17h30</span>
            </div>
          </div>

          {/* Contact email & quick phone */}
          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="mailto:contact@lesangesdudigital.com" 
              className="flex items-center gap-1.5 hover:text-[#E2A93B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#9AA7C7]" />
              <span className="hidden sm:inline">contact@lesangesdudigital.com</span>
            </a>
            <div className="h-3 w-px bg-white/10 hidden sm:block"></div>
            <a 
              href="https://wa.me/237621802405" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-[#36E2C6] font-medium hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>+237 621 80 24 05</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-nav sticky top-0 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo Lockup */}
          <button 
            onClick={() => onSelectTab('accueil')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B2D5E] to-[#0B1530] border border-[#E2A93B]/40 flex items-center justify-center shadow-lg shadow-[#E2A93B]/10 group-hover:border-[#E2A93B] transition-all">
              {/* Heraldic Angel Emblem SVG */}
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#E2A93B]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="15" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="3 3" />
                <path d="M20 10L24 18H16L20 10Z" fill="#E2A93B" fillOpacity="0.2" />
                <path d="M12 24C12 24 16 28 20 28C24 28 28 24 28 24" stroke="#E2A93B" strokeLinecap="round" />
                <path d="M8 18C12 16 16 18 20 20C24 18 28 16 32 18" stroke="#36E2C6" strokeLinecap="round" />
                <circle cx="20" cy="19" r="2.5" fill="#E2A93B" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#36E2C6] rounded-full border-2 border-[#0B1530]"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#F3C969] transition-colors leading-tight">
                Les Anges du Digital
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E2A93B]">
                Excellence Numérique
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#F3C969] bg-white/5 font-semibold' 
                      : 'text-[#C6C6CE] hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.isSpecial && (
                    <span className="w-2 h-2 rounded-full bg-[#36E2C6] animate-pulse"></span>
                  )}
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E2A93B] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#E2A93B] hover:bg-[#F3C969] text-[#0B1530] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#E2A93B]/20 hover:shadow-[#E2A93B]/40 active:scale-[0.98] flex items-center gap-2 whitespace-nowrap"
            >
              <span>Obtenir un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#C6C6CE] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left ${
                  currentTab === link.id
                    ? 'bg-[#E2A93B]/10 text-[#F3C969] font-semibold'
                    : 'text-[#C6C6CE] hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.isSpecial && <span className="w-2 h-2 rounded-full bg-[#36E2C6]"></span>}
                  <span>{link.label}</span>
                </div>
                {link.isSpecial && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#36E2C6]/20 text-[#36E2C6] font-mono">ERP CLOUD</span>
                )}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
