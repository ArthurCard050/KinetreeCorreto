import { motion } from 'framer-motion';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

export default function ProjectsResults() {
  const results = [
    { value: "+240%", label: "em conversão de leads" },
    { value: "+180%", label: "em retenção de usuários" },
    { value: "+90%", label: "em performance técnica (Core Web Vitals)" },
    { value: "+130%", label: "em tempo médio de permanência" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-green-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Mais do que design,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              entregamos resultados
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Cada projeto é pensado para gerar impacto real — em métricas, percepção e presença digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center group hover:from-white/10 hover:to-white/15 transition-all duration-500"
              {...optimizedVariants.scale}
              transition={{ ...optimizedVariants.scale.transition, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 60px rgba(34, 197, 94, 0.2)" 
              }}
            >
              <motion.div
                className="text-5xl font-bold text-green-400 mb-4"
                {...optimizedVariants.scale}
                transition={{ ...optimizedVariants.scale.transition, delay: index * 0.1 + 0.3 }}
              >
                {result.value}
              </motion.div>
              <div className="text-white/70 leading-relaxed">
                {result.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          {...optimizedVariants.slideUp}
          transition={{ ...optimizedVariants.slideUp.transition, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold text-white max-w-3xl mx-auto">
            <span className="text-green-400">Performance</span> é a base.{' '}
            <span className="text-green-400">Design</span> é o caminho.{' '}
            <span className="text-green-400">Crescimento</span> é o destino.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
