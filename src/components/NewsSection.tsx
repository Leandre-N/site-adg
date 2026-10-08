import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ArticleItem } from '../types';

/**
 * NewsSection: Blog & Veille technologique
 * 2 cartes éditoriales avec métadonnées délimitées et liens d'action
 */
export const NewsSection: React.FC = () => {
  const articles: ArticleItem[] = [
    {
      id: 'erp-afrique',
      category: 'ERP & SAAS',
      date: '14 Octobre 2024',
      readTime: 'Lecture 4 min',
      title: "Déploiement de TENYSY dans les PME d'Afrique Centrale",
      excerpt:
        "Comment la convergence d'une solution de gestion sans friction libère le potentiel des structures camerounaises face aux défis de connectivité et de réconciliation bancaire.",
      author: "Par l'Équipe TENYSY",
      accentColor: 'teal',
    },
    {
      id: 'cloud-security-douala',
      category: 'CYBERSÉCURITÉ',
      date: '28 Septembre 2024',
      readTime: 'Lecture 5 min',
      title: "Sécurisation des architectures cloud d'entreprise à Douala",
      excerpt:
        "Analyse exhaustive des vecteurs d'attaques locaux et mise en place de stratégies de sauvegarde redondantes sur sites distants pour garantir une reprise d'activité en temps record.",
      author: 'Par Sylvain TEUTSING',
      accentColor: 'gold',
    },
  ];

  return (
    <section id="actualites" className="bg-[#FFFFFF] text-[#0B1530] py-20 lg:py-28 px-4 sm:px-8 border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto">
        
        {/* En-tête avec titre et lien "Toutes les publications" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#B58017]">
              PERSPECTIVES &amp; VEILLE TECHNOLOGIQUE
            </span>
            <h2 className="font-['Bricolage_Grotesque'] text-[32px] sm:text-[42px] font-[800] text-[#0B1530] mt-2 tracking-tight">
              Dernières actualités
            </h2>
          </div>

          <a
            href="#actualites"
            className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#B58017] hover:text-[#8D610B] transition-colors"
          >
            <span>Toutes les publications</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grille 2 cartes articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => {
            const isTeal = article.accentColor === 'teal';

            return (
              <article
                key={article.id}
                className="bg-[#FFFFFF] rounded-2xl p-8 border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative group"
              >
                {/* Ligne d'accent supérieure */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 rounded-t-full ${
                    isTeal ? 'bg-[#36E2C6]' : 'bg-[#E2A93B]'
                  }`}
                />

                <div>
                  {/* Métadonnées : Catégorie, Date, Durée de lecture */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isTeal
                          ? 'bg-[#E6FAF6] text-[#0AA88F] border border-[#36E2C6]/30'
                          : 'bg-[#FFF8EB] text-[#B58017] border border-[#E2A93B]/30'
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[12px] text-slate-500 font-medium">
                      {article.date}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-[12px] text-slate-500">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Titre de l'article */}
                  <h3 className="font-['Bricolage_Grotesque'] text-[22px] sm:text-[24px] font-bold text-[#0B1530] mb-3 leading-tight group-hover:text-[#13224A] transition-colors">
                    {article.title}
                  </h3>

                  {/* Extrait */}
                  <p className="text-[15px] text-[#56627F] leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer article : Auteur & Lien de lecture */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-[13px]">
                  <span className="text-slate-600 font-medium">
                    {article.author}
                  </span>

                  <span
                    className={`font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                      isTeal ? 'text-[#0AA88F]' : 'text-[#B58017]'
                    }`}
                  >
                    <span>Lire plus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
