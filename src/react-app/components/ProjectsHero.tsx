import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900 min-h-screen flex items-center">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-400/10 border border-green-400/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Nosso Portfólio</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cada projeto é uma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              semente
            </span>{' '}
            que se transforma em crescimento digital
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A Kinetree cria estruturas únicas — sites, plataformas e experiências digitais que unem design, estratégia e tecnologia para gerar resultados reais.
            <br />
            <strong className="text-green-400">
              Cada projeto nasce com um propósito e cresce com o tempo, assim como as marcas que o inspiram.
            </strong>
          </motion.p>

          <motion.p
            className="text-lg text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore nossos projetos e veja como transformamos ideias em estruturas vivas que movem negócios.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
