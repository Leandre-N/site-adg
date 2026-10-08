import React, { useState } from 'react';
import { ArrowLeft, Search, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData.ts';

interface BlogScreenProps {
  onBackToHome: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogScreen: React.FC<BlogScreenProps> = ({ onBackToHome, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'erp' | 'security' | 'strategy'>('all');
  const [search, setSearch] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchCat = selectedCategory === 'all' || post.categoryType === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(search.toLowerCase());
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
            VEILLE TECHNOLOGIQUE & STRATÉGIE
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Analyses et retours d'expérience du digital en Afrique
          </h1>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0E1B38] border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Toutes les publications' },
              { id: 'erp', label: 'ERP & Logiciels SaaS' },
              { id: 'security', label: 'Cybersécurité' },
              { id: 'strategy', label: 'Stratégie Numérique' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
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
              placeholder="Rechercher un article..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#050E23] border border-white/15 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#E2A93B]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#0E1B38] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#36E2C6]/40 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold font-mono bg-white/5 text-[#36E2C6]">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>

                <h3 
                  onClick={() => onSelectPost(post)}
                  className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#F3C969] transition-colors cursor-pointer leading-snug"
                >
                  {post.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#9AA7C7] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{post.author}</span>
                <button
                  onClick={() => onSelectPost(post)}
                  className="text-xs font-bold text-[#36E2C6] hover:underline inline-flex items-center gap-1"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
