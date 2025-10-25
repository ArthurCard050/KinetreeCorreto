import { motion } from 'framer-motion';
import { Zap, Shield, Target, TrendingUp, Heart } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

function TargetAnimation() {
  const dotLottieRef = React.useRef<any>(null);

  return (
    <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16 flex-shrink-0">
      <DotLottieReact
        src="/aviao.json"
        loop
        autoplay
        dotLottieRefCallback={(dotLottie) => {
          dotLottieRef.current = dotLottie;
        }}
        style={{
          width: '100%',
          height: '100%',
          transform: 'scale(3.5)',
          transformOrigin: 'center'
        }}
      />
    </div>
  );
}

function DifferentialItem({ icon, title, delay = 0 }: DifferentialProps) {
  return (
    <motion.div
      className="flex items-center space-x-4 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 10 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}

export default function Differentials() {
  const differentials = [
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Velocidade e Performance"
    },
    {
      icon: <Shield className="w-6 h-6 text-black" />,
      title: "Segurança Avançada"
    },
    {
      icon: <Target className="w-6 h-6 text-black" />,
      title: "Design Estratégico"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      title: "Conversão Real"
    },
    {
      icon: <Heart className="w-6 h-6 text-black" />,
      title: "Suporte Próximo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated energy lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Por que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Kinetree?
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Combinamos tecnologia de ponta com estratégia focada em resultados para criar experiências digitais extraordinárias.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  {differentials.slice(0, 3).map((item, index) => (
                    <DifferentialItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
                <div className="space-y-6">
                  {differentials.slice(3).map((item, index) => (
                    <DifferentialItem
                      key={index + 3}
                      icon={item.icon}
                      title={item.title}
                      delay={(index + 3) * 0.2}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                className="text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-green-400/10 to-green-600/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 lg:p-8">
                  <motion.div
                    className="flex items-center space-x-4 lg:space-x-6 mb-4"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white flex-1">
                      "Sites que geram resultado de verdade."
                    </p>
                    {/* Lottie Animation */}
                    <div className="flex-shrink-0">
                      <TargetAnimation />
                    </div>
                  </motion.div>
                  <p className="text-green-400 font-medium">
                    Nossa missão é transformar sua presença digital em uma estrutura viva que cresce junto com seu negócio.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Side */}
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/3d2.webp"
                    alt="Desenvolvimento web profissional - Kinetree"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0" />
                </motion.div>

                {/* Background Glow */}
                <div className="absolute inset-20 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-100 blur-3xl -z-10 scale-110" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
