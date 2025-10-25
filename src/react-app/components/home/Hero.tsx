import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  animationType: 'progress' | 'stars' | 'chart';
}

function MetricCard({ title, value, description, animationType }: MetricCardProps) {
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
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)" }}
    >
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      <div className="text-green-400 font-semibold mb-2">{title}</div>
      <div className="text-white/70 text-sm">{description}</div>
      
      {animationType === 'progress' && (
        <div className="mt-4 w-full bg-white/20 rounded-full h-2">
          <motion.div
            className="h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
            initial={{ width: 0 }}
            animate={animated ? { width: '85%' } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      )}
      
      {animationType === 'stars' && (
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: 180 }}
              animate={animated ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            >
              <svg className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.955L10 0l3.436 5.955L20 6.91l-5.245 4.635L15.878 18z"/>
              </svg>
            </motion.div>
          ))}
        </div>
      )}
      
      {animationType === 'chart' && (
        <div className="flex items-end space-x-1 mt-4 h-8">
          {[40, 60, 80, 100, 85].map((height, i) => (
            <motion.div
              key={i}
              className="bg-green-400 rounded-t flex-1"
              initial={{ height: 0 }}
              animate={animated ? { height: `${height}%` } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Não criamos sites.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Construímos estruturas vivas
              </span>{' '}
              para o seu crescimento digital.
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Projetamos o amanhã da sua marca com design estratégico e performance que converte.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.button
                className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
              
              <motion.button
                className="border-2 border-white/30 hover:border-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#4ade80'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explorar Projetos
              </motion.button>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <MetricCard
              title="Performance"
              value="LCP < 2.5s"
              description="Performance é a nova estética"
              animationType="progress"
            />
            <MetricCard
              title="Design Premium"
              value="Experiência que converte"
              description="Sites que geram confiança"
              animationType="stars"
            />
            <MetricCard
              title="Conversão"
              value="+240% em 6 meses"
              description="Resultado real comprovado"
              animationType="chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
