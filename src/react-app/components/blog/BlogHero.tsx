import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Sparkles } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-green-900 pt-32 pb-20 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight px-2"
          >
            Insights sobre{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent break-words">
              Desenvolvimento Web
            </span>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto px-2"
          >
            Artigos, tutoriais e dicas sobre desenvolvimento web, design e tecnologia
            para ajudar você a criar experiências digitais incríveis.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-2"
          >
            <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="font-semibold">Artigos práticos</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="font-semibold">Tendências do mercado</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
              <span className="font-semibold">Dicas exclusivas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
