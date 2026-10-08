import React from 'react';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';
import { BlogPost } from '../data/blogData.ts';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0B1530] border border-[#36E2C6]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-white">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#101E3D] to-[#0B1530]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider font-mono bg-[#36E2C6]/15 text-[#36E2C6]">
              {post.category}
            </span>
            <span className="text-xs text-[#9AA7C7]">{post.date}</span>
            <span className="text-white/20">·</span>
            <span className="text-xs text-[#9AA7C7]">{post.readTime}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-[#d8e2ff]">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {post.title}
          </h2>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#13224A]/70 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-[#E2A93B]/20 text-[#F3C969] flex items-center justify-center font-bold text-sm">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author}</div>
              <div className="text-xs text-[#9AA7C7]">{post.authorRole} · Les Anges du Digital Douala</div>
            </div>
          </div>

          <p className="text-base text-[#F3C969] font-medium leading-relaxed italic border-l-2 border-[#E2A93B] pl-4">
            "{post.excerpt}"
          </p>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/10 bg-[#07132B] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Publication officielle certifiée
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/15 text-xs font-semibold"
          >
            Fermer la lecture
          </button>
        </div>

      </div>
    </div>
  );
};
