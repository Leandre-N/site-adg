import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData.ts';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAll: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, onViewAll }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F3F5FA] text-[#0B1530] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#986E18]">
                PERSPECTIVES & VEILLE TECHNOLOGIQUE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1530] tracking-tight">
              Dernières actualités
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E2A93B] hover:text-[#986E18] transition-colors group self-start md:self-auto"
          >
            <span>Toutes les publications</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2 Featured Article Cards (Matching Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(0, 2).map((post) => {
            const isErp = post.categoryType === 'erp';

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-7 sm:p-9 shadow-md border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Badge & Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider font-mono ${
                        isErp 
                          ? 'bg-[#36E2C6]/15 text-[#007A69]' 
                          : 'bg-[#E2A93B]/20 text-[#986E18]'
                      }`}
                    >
                      {post.category}
                    </span>

                    <span className="text-xs text-slate-400">
                      {post.date}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onSelectPost(post)}
                    className="font-display text-xl sm:text-2xl font-bold text-[#0B1530] mb-3 group-hover:text-[#986E18] transition-colors cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-sm text-[#475569] leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer with Author and "Lire plus →" */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    Par {post.author}
                  </span>

                  <button
                    onClick={() => onSelectPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007A69] hover:text-[#0B1530] transition-colors group/btn"
                  >
                    <span>Lire plus</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
