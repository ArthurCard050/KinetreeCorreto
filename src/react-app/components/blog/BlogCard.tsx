import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPostMetadata } from '@/react-app/types/blog';

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
      {/* Imagem de Capa */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/9]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {post.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-600 text-black px-3 py-1 rounded-full text-sm font-medium">
            ⭐ Destaque
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
          {post.category}
        </div>
      </Link>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Meta informações */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        {/* Título */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Resumo */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-green-600 font-medium text-sm group-hover:gap-2 transition-all"
          >
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
