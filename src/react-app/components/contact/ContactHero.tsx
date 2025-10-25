import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900 pt-32 pb-20 md:pt-40 md:pb-32">
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Vamos construir o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              futuro digital
            </span>{' '}
            da sua marca.
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Kinetree é o ponto de partida para transformar ideias em estruturas reais de crescimento.
            <br />
            <strong className="text-green-400">Se você quer performance, design e propósito no mesmo projeto — fale com a gente.</strong>
          </motion.p>

          <motion.p
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Preencha o formulário abaixo ou escolha o canal que preferir.
            <br />
            <strong className="text-white">Estamos prontos para dar o primeiro passo com você.</strong>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
