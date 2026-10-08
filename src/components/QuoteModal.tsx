import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Building2, User, Phone, Mail, FileText } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

/**
 * QuoteModal: Modal officiel "Obtenir un devis"
 * Respecte rigoureusement la politique "Zero Pricing Discipline : Strict"
 * et le style des formulaires Spiritual-Tech Luxe (fond #0B1530, contour doré au focus).
 */
export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    service: preselectedService || 'Création de Sites Web & Portails',
    projectScope: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Création de Sites Web & Portails',
    'Solution ERP TENYSY',
    'Applications Mobiles (iOS / Android)',
    'Hébergement Web & Infrastructure NVMe',
    'Maintenance de Site Web & Sécurité',
    'Création Visuelle & Branding',
    'Community Management & Notoriété',
    'Consulting & Stratégie Digitale',
    'Gestion de Projet Digital',
    'Formation & Conseil Pratique',
    'Réseau Informatique & Câblage',
    'Support & Infogérance avec SLA',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Bonjour Les Anges du Digital,\n\nJe sollicite un devis pour mon projet :\n- Nom : ${formData.fullName}\n- Entreprise : ${formData.company}\n- Service : ${formData.service}\n- Téléphone : ${formData.phone}\n- Détails : ${formData.projectScope || 'Non spécifié'}`
    );
    window.open(`https://wa.me/237621802405?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010D26]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0E1B34] border border-[#E2A93B]/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)] text-white overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Lueur supérieure dorée */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E2A93B] via-[#F3C969] to-[#36E2C6]" />

        {/* Bouton fermeture */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E2A93B] bg-[#E2A93B]/10 px-3 py-1 rounded-full border border-[#E2A93B]/25">
                ÉTUDE SUR-MESURE &amp; COTATION
              </span>
              <h3 className="font-['Bricolage_Grotesque'] text-[24px] sm:text-[28px] font-bold text-white mt-2 leading-tight">
                Obtenir un devis personnalisé
              </h3>
              <p className="text-[13.5px] text-[#A6B4D6] mt-1.5 leading-relaxed">
                Nos ingénieurs basés à Douala analysent vos besoins techniques sous 24h ouvrées.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nom complet */}
                <div>
                  <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                    Nom &amp; Prénom *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Sylvain Nguemo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl pl-10 pr-4 py-3 text-[14px] text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Entreprise */}
                <div>
                  <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                    Nom de l'entreprise *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Groupe Commercial SARL"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl pl-10 pr-4 py-3 text-[14px] text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Téléphone / WhatsApp */}
                <div>
                  <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                    Téléphone (WhatsApp de préférence) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+237 6XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl pl-10 pr-4 py-3 text-[14px] text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email professionnel */}
                <div>
                  <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                    Email professionnel *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="direction@entreprise.cm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl pl-10 pr-4 py-3 text-[14px] text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sélection du service */}
              <div>
                <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                  Prestation ou solution concernée *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all cursor-pointer"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-[#0B1530] text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description succincte */}
              <div>
                <label className="block text-[12px] font-medium text-[#D8E2FF] mb-1.5">
                  Description succincte de votre projet &amp; objectifs
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Précisez votre activité, vos effectifs ou vos besoins d'automatisation spécifiques..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full bg-[#0B1530] border border-white/15 focus:border-[#E2A93B] focus:ring-2 focus:ring-[#E2A93B]/20 rounded-xl pl-10 pr-4 py-3 text-[14px] text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Boutons d'envoi */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E2A93B] to-[#F3C969] text-[#0B1530] font-bold text-[14px] shadow-[0_4px_20px_rgba(226,169,59,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre ma demande d'étude</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#13224A] hover:bg-[#1B2D5E] text-[#36E2C6] font-semibold text-[13px] border border-[#36E2C6]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Transmettre via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#36E2C6]/20 border border-[#36E2C6]/50 flex items-center justify-center text-[#36E2C6]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-['Bricolage_Grotesque'] text-[24px] font-bold text-white">
              Demande enregistrée avec succès !
            </h3>

            <p className="text-[14px] text-[#A6B4D6] max-w-md mx-auto leading-relaxed">
              Merci <strong className="text-white">{formData.fullName}</strong>. Votre demande relative à <strong className="text-[#F3C969]">{formData.service}</strong> a bien été transmise à notre bureau d'études à Douala.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#071329] font-bold text-sm shadow cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir la conversation WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
