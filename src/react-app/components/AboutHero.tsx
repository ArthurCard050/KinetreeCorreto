import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Somos mais do que uma agência digital.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Somos a estrutura viva
            </span>{' '}
            do seu crescimento.
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            A Kinetree nasceu da fusão entre movimento e estrutura.
            <br />
            Unimos design, tecnologia e propósito para construir marcas que evoluem com o tempo — de forma sólida, fluida e humana.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-green-400/10 border border-green-400/20 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">
              Nosso trabalho é transformar o digital em um organismo vivo, que cresce, se adapta e gera resultados.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
