import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export default function BentoResults() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      number: '240',
      suffix: '%',
      label: 'Aumento em Conversão',
      sublabel: 'Média em 21 dias'
    },
    { 
      number: '2.5',
      suffix: 's',
      label: 'Tempo de Carregamento',
      sublabel: 'Performance garantida'
    },
    { 
      number: '98',
      suffix: '%',
      label: 'Score de Performance',
      sublabel: 'Core Web Vitals'
    },
    { 
      number: '100',
      suffix: '+',
      label: 'Projetos Entregues',
      sublabel: 'Clientes satisfeitos'
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Static Glass Morphism Panels - sem animação */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-auto">
        {/* Top Left Panel */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Top Right Panel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] translate-x-1/3 -translate-y-1/3">
          <div className="w-full h-full bg-gradient-to-bl from-green-400/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Bottom Left Panel */}
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] -translate-x-1/3 translate-y-1/3">
          <div className="w-full h-full bg-gradient-to-tr from-green-600/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Bottom Right Panel */}
        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] translate-x-1/2 translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]">
          <div className="w-full h-full bg-green-500/5 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Resultados que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Transformam
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              {/* Vertical line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent" />
              
              <div className="pl-8">
                {/* Number */}
                <div className="mb-4 overflow-hidden">
                  <motion.div
                    className="flex items-start"
                    initial={{ y: 100 }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    <span className="text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                      {stat.number}
                    </span>
                    <span className="text-4xl lg:text-5xl font-bold text-green-400 mt-2">
                      {stat.suffix}
                    </span>
                  </motion.div>
                </div>

                {/* Label */}
                <motion.h3
                  className="text-xl lg:text-2xl font-semibold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {stat.label}
                </motion.h3>

                {/* Sublabel */}
                <motion.p
                  className="text-white/50 text-sm"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  {stat.sublabel}
                </motion.p>

                {/* Hover line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-green-400 to-transparent mt-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Cada número representa horas de trabalho dedicado, estratégias testadas e 
            <span className="text-green-400"> resultados reais</span> que impulsionam negócios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
