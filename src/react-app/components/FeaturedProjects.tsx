import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectsModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<{ url: string; title: string } | null>(null);

  const projects = [
    {
      title: "Plataforma E-commerce Premium",
      category: "E-commerce",
      description: "Site completo com experiência imersiva, design modular e alta conversão.",
      focus: "Integração de performance e storytelling visual",
      result: "+240% conversão",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      url: "https://magical-moonbeam-f78b23.netlify.app/"
    },
    {
      title: "Landing Page Estratégica",
      category: "Lançamento de Marca",
      description: "Página única, desenhada para gerar leads qualificados e comunicar propósito com clareza.",
      focus: "Copywriting e jornada de conversão",
      result: "+180% leads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      url: "https://www.stripe.com"
    },
    {
      title: "Portal Institucional",
      category: "Identidade Digital",
      description: "Estrutura robusta, otimizada para SEO e fácil atualização via CMS.",
      focus: "Autoridade e consistência visual",
      result: "+90% performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      url: "https://www.tesla.com"
    },
    {
      title: "Web App Personalizado",
      category: "Ferramenta Sob Medida",
      description: "Ferramenta sob medida que simplifica processos e entrega resultados em tempo real.",
      focus: "Funcionalidade, segurança e design intuitivo",
      result: "+130% eficiência",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      url: "https://www.notion.so"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject({ url: project.url, title: project.title })}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                    
                    <p className="text-white/80 leading-relaxed mb-2">
                      {project.description}
                    </p>
                    
                    <p className="text-sm text-green-400/80 mb-4">
                      Foco: {project.focus}
                    </p>
                    
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
            ))}
          </div>
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
