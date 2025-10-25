import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pronto para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              crescer
            </span>{' '}
            com a gente?
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed">
            <span className="text-green-400 font-semibold">
              Cada marca tem um ritmo. A Kinetree existe para amplificar o seu.
            </span>
          </p>

          <motion.button
            className="group bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
