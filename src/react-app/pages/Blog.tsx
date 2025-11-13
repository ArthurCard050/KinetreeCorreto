import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Navigation, Footer } from '@/react-app/components/shared';
import BlogHero from '@/react-app/components/blog/BlogHero';
import BlogCard from '@/react-app/components/blog/BlogCard';
import { useBlogPosts } from '@/react-app/hooks/useBlog';

const categories = [
  'Todos',
  'Desenvolvimento Web',
  'Design',
  'Marketing Digital',
  'Tecnologia',
  'Dicas',
  'Tutoriais',
  'Casos de Sucesso',
];

export default function BlogPage() {
  const { posts, loading, error } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar posts
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && post.published;
  });

  // Separar posts em destaque
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <BlogHero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Filtros e Busca */}
          <div className="mb-12">
            {/* Busca */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Categorias */}
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-green-400 to-green-600 text-black shadow-lg shadow-green-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">Carregando artigos...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Em breve, novos artigos!
                </h3>
                <p className="text-gray-600">
                  Estamos preparando conteúdos incríveis para você. Volte em breve!
                </p>
              </div>
            </div>
          )}

          {/* Posts em Destaque */}
          {!loading && featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                ⭐ Artigos em Destaque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Posts Regulares */}
          {!loading && regularPosts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Todos os Artigos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {!loading &&
            !error &&
            posts.length > 0 &&
            filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  Nenhum artigo encontrado com os filtros selecionados.
                </p>
              </div>
            )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
