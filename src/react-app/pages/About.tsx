import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Heart, Shield, Zap, Target } from 'lucide-react';
import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

function PillarCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-green-900">
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
                Nosso trabalho é transformar o digital em um organismo vivo, que cresce, se adapta e gera resultados reais.
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Manifesto Section */}
      <Section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
              A essência está no{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                equilíbrio
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-6">Tree</div>
              <h3 className="text-2xl font-bold text-white mb-4">representa as raízes</h3>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Estratégia, estrutura e base sólida.
                <br />
                É a confiança de que tudo o que construímos precisa resistir ao tempo.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-6">Kinetic</div>
              <h3 className="text-2xl font-bold text-white mb-4">representa o movimento</h3>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Inovação, energia e adaptação constante.
                <br />
                É o impulso que faz marcas florescerem no ambiente digital.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-xl text-white/90 leading-relaxed">
              A Kinetree existe para unir esses dois mundos: <strong className="text-green-400">o estável e o dinâmico</strong>.
              <br />
              Somos o elo entre o que é firme e o que se move.
              <br />
              <strong className="text-green-400">Entre o hoje e o futuro.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* Nossa História */}
      <Section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
              Crescemos com a mesma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                lógica das árvores
              </span>
            </h2>
            
            <div className="text-left space-y-8">
              <p className="text-xl text-white/80 leading-relaxed">
                Começamos pequenos, com um propósito claro: criar sites que não apenas funcionam, mas que crescem junto com os negócios.
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Com o tempo, nos tornamos uma estrutura mais ampla — um estúdio completo de experiências digitais, onde design e performance convivem em harmonia.
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Hoje, nossos projetos estão presentes em diversos segmentos e cidades, impulsionando marcas, startups e criadores que acreditam no poder do digital como raiz do crescimento.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Filosofia de Criação */}
      <Section className="py-20 bg-gradient-to-b from-black via-gray-900 to-green-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Design que move.
              </span>{' '}
              Código que estrutura.
            </h2>
            
            <div className="text-left space-y-8">
              <p className="text-xl text-white/80 leading-relaxed">
                <strong className="text-green-400">Cada projeto nasce de uma conversa.</strong>
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Antes de qualquer linha de código, mergulhamos fundo na essência de cada marca para entender sua história, seus objetivos e suas possibilidades.
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                A partir daí, criamos interfaces que inspiram, experiências que conectam e tecnologias que impulsionam.
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Porque, para nós, <strong className="text-green-400">um site não é um produto — é uma estrutura viva, estratégica e em constante evolução.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Nossos Pilares */}
      <Section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
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
      </Section>

      {/* Nossa Cultura */}
      <Section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Gente que constrói
              </span>{' '}
              com propósito
            </h2>
            
            <div className="text-left space-y-8">
              <p className="text-xl text-white/80 leading-relaxed">
                A Kinetree é formada por designers, desenvolvedores, estrategistas e criadores que acreditam no mesmo ideal: <strong className="text-green-400">crescer com propósito, sem perder a essência.</strong>
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Trabalhamos em rede, com autonomia, empatia e curiosidade.
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Porque acreditamos que o melhor design nasce de um time que compartilha a mesma energia e o mesmo sonho: <strong className="text-green-400">criar coisas que realmente importam.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 bg-gradient-to-br from-black via-gray-900 to-green-900">
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
      </Section>

      <Footer />
    </div>
  );
}
