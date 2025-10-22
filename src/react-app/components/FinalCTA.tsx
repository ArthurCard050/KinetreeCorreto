import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-green-900/20" />
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle reflection effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-900/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-green-400/10 border border-green-400/20 rounded-full px-6 py-3 mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Transformação Digital</span>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Seu futuro digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                começa agora
              </span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Deixe-nos construir as raízes do seu crescimento online.
              <br />
              <span className="text-green-400 font-semibold">
                Estruturas vivas que evoluem com seu negócio.
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Subtle glow animation */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <span className="relative z-10 flex items-center space-x-2">
                <span>Solicitar Proposta Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.div
              className="text-white/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              ✨ Resposta em até 2 horas úteis
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Consulta Gratuita", subtitle: "Análise completa do seu projeto" },
              { title: "Proposta Personalizada", subtitle: "Estratégia sob medida para seus objetivos" },
              { title: "Resultados Garantidos", subtitle: "Crescimento real e mensurável" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
