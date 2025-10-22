import { motion } from 'framer-motion';
import { Code, Palette, Zap, Shield, TrendingUp, HeadphonesIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)" 
      }}
    >
      {/* Organic background lines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,20 50,50 T100,50"
            stroke="url(#greenGradient)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/70 leading-relaxed mb-6">
          {description}
        </p>

        <motion.button
          className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-300 flex items-center group-hover:translate-x-2 transition-transform duration-300"
          whileHover={{ x: 5 }}
        >
          Saiba Mais →
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-black" />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações modernas construídas com as tecnologias mais avançadas para performance máxima e experiência superior."
    },
    {
      icon: <Palette className="w-8 h-8 text-black" />,
      title: "Design Estratégico",
      description: "Interface pensada para converter, com foco na jornada do usuário e otimização contínua baseada em dados reais."
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Otimização de Performance",
      description: "Sites ultrarrápidos que carregam em menos de 2.5s, garantindo a melhor experiência e melhores posições no Google."
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Segurança Avançada",
      description: "Proteção completa contra ameaças digitais com monitoramento 24/7 e atualizações de segurança automáticas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: "Estratégia de Conversão",
      description: "Análise comportamental e otimização contínua para maximizar seus resultados e ROI de marketing digital."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-black" />,
      title: "Suporte Dedicado",
      description: "Acompanhamento próximo e suporte técnico especializado para garantir o sucesso contínuo do seu projeto."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
      {/* Background organic lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <path
            d="M0,400 Q250,100 500,400 T1000,400"
            stroke="url(#serviceGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,500 Q300,200 600,500 T1200,500"
            stroke="url(#serviceGradient)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
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
            Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital em uma máquina de resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
