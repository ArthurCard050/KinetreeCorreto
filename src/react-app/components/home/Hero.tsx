import { motion } from 'framer-motion';
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { ListChecks, Share2Icon } from "lucide-react";
import { cn } from '@/lib/utils';
import AnimatedBeamMultipleOutputDemo from '@/react-app/components/ui/animated-beam-demo';
import AnimatedListDemo from '@/react-app/components/ui/animated-list-demo';
import { BentoCard, BentoGrid } from '@/react-app/components/ui/bento-grid';
import { Marquee } from '@/react-app/components/ui/marquee';

const files = [
  {
    name: "E-commerce Premium",
    body: "Plataforma completa com checkout otimizado, aumentando conversões em 45% nos primeiros 3 meses.",
  },
  {
    name: "Portal Corporativo",
    body: "Sistema de gestão integrado com dashboard analytics e automações que reduziram processos manuais em 60%.",
  },
  {
    name: "Landing Page SaaS",
    body: "Design estratégico focado em conversão, gerando 200+ leads qualificados mensalmente.",
  },
  {
    name: "App Mobile Fitness",
    body: "Aplicativo híbrido com gamificação e integração de wearables, 4.8★ nas lojas.",
  },
  {
    name: "Marketplace B2B",
    body: "Plataforma de negociação com sistema de leilões, conectando 500+ empresas do setor.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Projetos Entregues",
    description: "Portfólio de projetos que transformaram negócios.",
    href: "/projetos",
    cta: "Ver portfólio",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white/10 bg-white/5 hover:bg-white/10",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white/70">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: ListChecks,
    name: "Processo Organizado",
    description: "Metodologia clara com etapas bem definidas.",
    href: "/sobre",
    cta: "Conheça o processo",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Ecossistema Integrado",
    description: "Conectamos todas as ferramentas do seu negócio.",
    href: "/#servicos",
    cta: "Ver serviços",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] w-full border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Cronograma Transparente",
    description: "Planejamento claro com prazos e entregas definidas.",
    className: "col-span-3 lg:col-span-1",
    href: "/contato",
    cta: "Solicitar orçamento",
    background: (
      <div className="absolute top-10 right-0 origin-top scale-75 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm p-4 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-white/80 text-xs mb-3">
            <span className="font-semibold">Dezembro 2025</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/60 mb-2">
            <div>D</div>
            <div>S</div>
            <div>T</div>
            <div>Q</div>
            <div>Q</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {[...Array(35)].map((_, i) => {
              const day = i - 2;
              const isCurrentDay = day === 10;
              const hasEvent = [5, 10, 15, 20, 25].includes(day);
              return (
                <div
                  key={i}
                  className={cn(
                    "aspect-square flex items-center justify-center rounded",
                    day > 0 && day <= 30 ? "text-white/70" : "text-white/20",
                    isCurrentDay && "bg-green-500 text-white font-bold",
                    hasEvent && !isCurrentDay && "bg-green-500/20 text-green-400"
                  )}
                >
                  {day > 0 && day <= 30 ? day : ""}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
];

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

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-24 lg:py-28 min-h-screen flex items-center">
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BentoGrid>
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
