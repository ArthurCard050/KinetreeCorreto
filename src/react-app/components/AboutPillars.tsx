import { motion } from 'framer-motion';
import { Users, Zap, Heart, Shield, Target } from 'lucide-react';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group"
      whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)" }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function AboutPillars() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Os princípios que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              sustentam
            </span>{' '}
            tudo o que fazemos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <PillarCard
            icon={<Users className="w-8 h-8 text-black" />}
            title="Parceria Estratégica"
            description="Seu briefing é o ponto de partida, não o limite. Trabalhamos lado a lado com você para entender desafios e encontrar oportunidades reais de crescimento."
          />
          
          <PillarCard
            icon={<Zap className="w-8 h-8 text-black" />}
            title="Excelência Técnica"
            description="Somos obcecados por qualidade. Da performance ao design, da segurança ao SEO, cada detalhe é feito com precisão e propósito."
          />
          
          <PillarCard
            icon={<Heart className="w-8 h-8 text-black" />}
            title="Design Consciente"
            description="A beleza importa, mas a intenção importa mais. Cada cor, forma e transição é criada para gerar impacto e conexão."
          />
          
          <PillarCard
            icon={<Shield className="w-8 h-8 text-black" />}
            title="Transparência Absoluta"
            description="Acreditamos que confiança é construída com clareza. Você acompanha cada etapa, cada entrega e cada decisão."
          />
          
          <PillarCard
            icon={<Target className="w-8 h-8 text-black" />}
            title="Inovação Contínua"
            description="O digital muda todos os dias — e nós também. Buscamos sempre novas soluções, linguagens e ferramentas para manter nossos clientes à frente."
          />
        </div>
      </div>
    </section>
  );
}
