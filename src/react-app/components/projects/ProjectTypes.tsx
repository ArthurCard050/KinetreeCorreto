import { motion } from 'framer-motion';
import { Globe, Target, ShoppingBag, Palette, Code } from 'lucide-react';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

export default function ProjectTypes() {
  const types = [
    {
      icon: <Globe className="w-8 h-8 text-black" />,
      title: "Institucionais",
      description: "Presença digital sólida e profissional"
    },
    {
      icon: <Target className="w-8 h-8 text-black" />,
      title: "Landing Pages",
      description: "Conversão e impacto direto"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-black" />,
      title: "E-commerces",
      description: "Performance e experiência de compra"
    },
    {
      icon: <Palette className="w-8 h-8 text-black" />,
      title: "Portfólios",
      description: "Visuais criativos que valorizam talentos e marcas"
    },
    {
      icon: <Code className="w-8 h-8 text-black" />,
      title: "Web Apps",
      description: "Soluções sob medida, com tecnologia e propósito"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Do institucional ao imersivo:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              a Kinetree cria
            </span>{' '}
            o que sua marca precisa para evoluir
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            Nossos projetos variam em escala, complexidade e propósito, mas todos compartilham o mesmo DNA:
            <br />
            <strong className="text-white">crescimento sustentável, design consciente e performance real.</strong>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group"
              {...optimizedVariants.slideUp}
              transition={{ ...optimizedVariants.slideUp.transition, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)" 
              }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {type.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {type.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
