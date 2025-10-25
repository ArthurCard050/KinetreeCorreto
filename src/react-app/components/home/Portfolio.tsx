import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  delay?: number;
}

function ProjectCard({ title, category, description, image, delay = 0 }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10"
      {...optimizedVariants.slideUp}
      transition={{ ...optimizedVariants.slideUp.transition, delay }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 10, 
            opacity: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-sm font-semibold text-green-400 mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : -10, 
              opacity: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {category}
          </motion.div>
          
          <motion.h3
            className="text-2xl font-bold text-white mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : -10, 
              opacity: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-white/80 leading-relaxed mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : -10, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.button
            className="flex items-center space-x-2 text-green-400 font-semibold hover:text-green-300 transition-colors self-start"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.9, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ x: 5 }}
          >
            <span>Ver Projeto</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "EcoTech Solutions",
      category: "E-commerce Sustentável",
      description: "Plataforma completa para produtos eco-friendly com sistema de recompensas por sustentabilidade.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "FinanceFlow",
      category: "Fintech",
      description: "Dashboard inteligente para gestão financeira empresarial com IA preditiva e análise em tempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "WellnessHub",
      category: "Saúde & Bem-estar",
      description: "Aplicação para acompanhamento de saúde mental com profissionais certificados e IA de suporte.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
    },
    {
      title: "CreativeSpace",
      category: "Design & Arte",
      description: "Marketplace premium para artistas digitais com sistema de licenciamento e proteção de direitos autorais.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
    },
    {
      title: "SmartCity Platform",
      category: "Tecnologia Urbana",
      description: "Sistema integrado para gestão inteligente de cidades com IoT, sustentabilidade e participação cidadã.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "EduFuture",
      category: "Educação Online",
      description: "Plataforma de ensino adaptativo com realidade virtual e acompanhamento personalizado por IA.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Nosso{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Portfólio
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Casos de sucesso que transformaram negócios e criaram impacto real no mercado digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center"
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
      </div>
    </section>
  );
}
