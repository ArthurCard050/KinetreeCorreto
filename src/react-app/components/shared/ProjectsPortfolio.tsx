import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectModal from '../projects/ProjectsModal';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';
import { useProjects } from '../../hooks/useStrapi';
import { cmsService } from '../../../services/strapi';
import LoadingSpinner from './LoadingSpinner';

interface ProjectsPortfolioProps {
  showAll?: boolean;
  showTitle?: boolean;
  showViewAllButton?: boolean;
  className?: string;
}

export default function ProjectsPortfolio({ 
  showAll = false, 
  showTitle = true, 
  showViewAllButton = false,
  className = ""
}: ProjectsPortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<{ url: string; title: string } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fetch projects from Strapi
  const { projects: allProjects, loading, error } = useProjects({
    featured: showAll ? undefined : true, // Se showAll for true, não aplica filtro de featured
    limit: showAll ? undefined : 4 // Limita a 4 se não for showAll
  });

  // Limita a 4 projetos se showAll for false (fallback adicional)
  const projects = showAll ? allProjects : allProjects.slice(0, 4);

  // Loading state
  if (loading) {
    return (
      <section className={`py-20 bg-gradient-to-b from-green-900 via-black to-gray-900 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`py-20 bg-gradient-to-b from-green-900 via-black to-gray-900 ${className}`}>
        <div className="container mx-auto px-6">
          {showTitle && (
            <motion.div
              className="text-center mb-16"
              {...optimizedVariants.slideUp}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Projetos em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  destaque
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Selecionamos alguns dos nossos trabalhos que representam bem o que acreditamos:
                <br />
                <strong className="text-white">design inteligente, performance e autenticidade.</strong>
              </p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const imageUrl = cmsService.getImageUrl(project.image) || project.image;
              
              return (
                <motion.div
                  key={project.id}
                  className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10"
                  {...optimizedVariants.slideUp}
                  transition={{ ...optimizedVariants.slideUp.transition, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setSelectedProject({ url: project.url, title: project.title })}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback para imagem local se Strapi falhar
                        const target = e.target as HTMLImageElement;
                        target.src = `/case-0${(index % 4) + 1}.webp`;
                      }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="text-sm font-semibold text-green-400 mb-2">
                        {project.category}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                    
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-400">
                          {project.result}
                        </div>
                        
                        <motion.button
                          className="flex items-center space-x-2 text-green-400 font-semibold hover:text-green-300 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span>Ver Detalhes</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Error state */}
          {error && (
            <div className="text-center mt-8">
              <p className="text-white/60">
                {error} - Exibindo dados de exemplo
              </p>
            </div>
          )}

          {showViewAllButton && (
            <motion.div
              className="text-center mt-16"
              {...optimizedVariants.slideUp}
              transition={{ ...optimizedVariants.slideUp.transition, delay: 0.3 }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Todos os Projetos
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        projectUrl={selectedProject?.url || ''}
        projectTitle={selectedProject?.title || ''}
      />
    </>
  );
}