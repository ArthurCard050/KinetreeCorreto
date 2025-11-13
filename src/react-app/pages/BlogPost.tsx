import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import { Navigation, Footer } from '@/react-app/components/shared';
import { useBlogPost, useBlogPosts } from '@/react-app/hooks/useBlog';
import ShareButtons from '@/react-app/components/blog/ShareButtons';
import PostNavigation from '@/react-app/components/blog/PostNavigation';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPost(slug || '');
  const { posts } = useBlogPosts();

  // Scroll para o topo quando mudar de post
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Encontrar posts anterior e próximo
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            <p className="mt-4 text-gray-600">Carregando artigo...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-600 text-black px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para o Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero do Post */}
      <article className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">

          {/* Header do Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Categoria */}
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-black px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta informações */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min de leitura</span>
              </div>
            </div>

            {/* Resumo */}
            <p className="text-xl text-gray-700 leading-relaxed">{post.excerpt}</p>
          </motion.div>

          {/* Imagem de Capa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Layout com Sidebar de Compartilhamento */}
          <div className="relative flex gap-8 lg:gap-16 justify-center">
            {/* Botões de Compartilhamento - Esquerda (Desktop) */}
            <div className="hidden lg:block">
              <ShareButtons title={post.title} url={window.location.href} />
            </div>

            {/* Conteúdo Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl w-full"
            >
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-gray-900 prose-h2:leading-snug
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gray-800 prose-h3:leading-snug
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:my-3 prose-li:leading-relaxed prose-li:text-lg
                prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-green-50/50
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-code:text-green-600 prose-code:bg-green-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-6
                prose-hr:border-gray-200 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm border border-green-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Botões de Compartilhamento Mobile */}
            <div className="lg:hidden mt-8 flex justify-center gap-3">
              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all"
                aria-label="Compartilhar no Facebook"
              >
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-sky-500 hover:bg-sky-50 transition-all"
                aria-label="Compartilhar no Twitter"
              >
                <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </button>
              <button
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-blue-700 hover:bg-blue-50 transition-all"
                aria-label="Compartilhar no LinkedIn"
              >
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </button>
              <button
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-green-600 hover:bg-green-50 transition-all"
                aria-label="Compartilhar no WhatsApp"
              >
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </button>
            </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl text-center border border-green-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gostou deste artigo?
            </h3>
            <p className="text-gray-700 mb-6">
              Vamos transformar suas ideias em realidade digital!
            </p>
            <Link
              to="/contato"
              className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Fale Conosco
            </Link>
          </motion.div>

          {/* Navegação entre Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <PostNavigation previousPost={previousPost} nextPost={nextPost} />
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
