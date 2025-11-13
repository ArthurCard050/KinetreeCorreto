import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import type { BlogPostMetadata } from '@/react-app/types/blog';

interface PostNavigationProps {
  previousPost?: BlogPostMetadata;
  nextPost?: BlogPostMetadata;
}

export default function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  return (
    <div className="border-t border-gray-200 pt-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Post Anterior */}
        <div className="md:col-span-1">
          {previousPost ? (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Post Anterior</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl opacity-50">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Post Anterior</span>
              </div>
              <p className="text-gray-400">Nenhum post anterior</p>
            </div>
          )}
        </div>

        {/* Ver Todos */}
        <div className="md:col-span-1 flex items-center justify-center">
          <Link
            to="/blog"
            className="flex flex-col items-center gap-2 px-8 py-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl hover:shadow-lg transition-all group"
          >
            <Grid className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-green-700">Ver Todos os Posts</span>
          </Link>
        </div>

        {/* Próximo Post */}
        <div className="md:col-span-1">
          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-gray-600 mb-2">
                <span>Próximo Post</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl opacity-50 text-right">
              <div className="flex items-center justify-end gap-2 text-sm text-gray-400 mb-2">
                <span>Próximo Post</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-gray-400">Nenhum próximo post</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
