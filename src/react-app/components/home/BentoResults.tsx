import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  animationType: 'progress' | 'stars' | 'chart' | 'energy';
  delay?: number;
}

function BentoCard({ title, subtitle, description, animationType, delay = 0 }: BentoCardProps) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)" 
      }}
    >
      {/* Background energy effect */}
      {animationType === 'energy' && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 animate-pulse" />
        </div>
      )}
      
      <div className="relative z-10">
        <motion.div
          className="text-4xl font-bold text-green-400 mb-3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {subtitle}
        </motion.div>
        
        <motion.h3
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-white/70 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Animation elements */}
        {animationType === 'progress' && (
          <div className="w-full bg-white/20 rounded-full h-3">
            <motion.div
              className="h-3 bg-gradient-to-r from-green-500 to-green-300 rounded-full"
              initial={{ width: 0 }}
              animate={animated ? { width: '90%' } : {}}
              transition={{ duration: 1.5, delay: delay + 0.6 }}
            />
          </div>
        )}

        {animationType === 'stars' && (
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 180 }}
                animate={animated ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.4, delay: delay + 0.6 + i * 0.1 }}
              >
                <svg className="w-8 h-8 text-green-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.955L10 0l3.436 5.955L20 6.91l-5.245 4.635L15.878 18z"/>
                </svg>
              </motion.div>
            ))}
          </div>
        )}

        {animationType === 'chart' && (
          <div className="flex items-end space-x-2 h-16">
            {[30, 50, 70, 90, 85, 95].map((height, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-green-500 to-green-300 rounded-t flex-1"
                initial={{ height: 0 }}
                animate={animated ? { height: `${height}%` } : {}}
                transition={{ duration: 0.8, delay: delay + 0.6 + i * 0.1 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function BentoResults() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Resultados que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Importam
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Design que move. Código que estrutura. Performance que converte.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <BentoCard
            title="Performance"
            subtitle="LCP < 2.5s"
            description="Sites otimizados que carregam instantaneamente e mantêm seus usuários engajados desde o primeiro clique."
            animationType="progress"
            delay={0}
          />
          
          <BentoCard
            title="Design Premium"
            subtitle="Experiência que converte"
            description="Interface moderna e intuitiva que transmite confiança e guia naturalmente seus visitantes à conversão."
            animationType="stars"
            delay={0.2}
          />
          
          <BentoCard
            title="Conversão"
            subtitle="+240% em 6 meses"
            description="Crescimento real e mensurável nos resultados dos nossos clientes através de estratégias comprovadas."
            animationType="chart"
            delay={0.4}
          />
          
          <BentoCard
            title="Autoridade Digital"
            subtitle="Sites que geram confiança"
            description="Presença online que posiciona sua marca como líder no mercado e gera resultado real."
            animationType="energy"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
