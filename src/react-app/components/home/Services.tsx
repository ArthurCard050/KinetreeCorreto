import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';
import {
  Building,
  Target,
  ShoppingCart,
  FileText,
  Image,
  Code,
  X,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  fullDescription: string;
  includes: string[];
  idealFor: string[];
  timeline: string;
  price: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onOpenModal: (service: Service) => void;
}

function ServiceCard({ service, index, onOpenModal }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group relative overflow-hidden cursor-pointer"
      {...optimizedVariants.slideUp}
      transition={{ ...optimizedVariants.slideUp.transition, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)"
      }}
      onClick={() => onOpenModal(service)}
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
          {service.icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-white/70 leading-relaxed mb-6">
          {service.description}
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

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  // Block body scroll when modal is open
  useScrollLock(isOpen);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onWheel={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
            style={{
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden'
            }}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop Layout */}
            <div
              className="hidden sm:block relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                willChange: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{service.timeline}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span>{service.price}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6 text-lg">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-3">O que está incluído:</h3>
                      <ul className="space-y-2">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-center text-white/70">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-3">Ideal para:</h3>
                      <p className="text-white/70">{service.idealFor.join(', ')}.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - CTA */}
                <div className="bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-2xl p-6 border border-green-400/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h3>
                  <p className="text-white/70 mb-6">
                    Vamos transformar sua ideia em uma estrutura digital que cresce junto com seu negócio.
                  </p>

                  <div className="space-y-4">
                    <motion.button
                      className="w-full bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>

                    <motion.button
                      className="w-full border border-white/30 hover:border-green-400 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Agendar Reunião
                    </motion.button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-white/60 text-center flex items-center justify-center space-x-2">
                      <Sparkles className="w-4 h-4 text-green-400" />
                      <span>Resposta em até 24 horas úteis</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div
              className="sm:hidden relative w-full h-full bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-full"
              style={{
                willChange: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            >
              {/* Mobile Header */}
              <div className="relative z-10 bg-gradient-to-b from-black/100 to-black/80 border-b border-white/10">
                {/* Top row - Title and close button */}
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold text-white truncate">{service.title}</h2>
                      <div className="flex items-center space-x-3 text-xs text-white/60">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-green-400" />
                          <span>{service.timeline}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3 text-green-400" />
                          <span>{service.price}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0 ml-2"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="flex-1 overflow-y-auto p-4 min-h-0">

                <div className="space-y-6">
                  <p className="text-white/80 leading-relaxed text-sm">
                    {service.fullDescription}
                  </p>

                  <div>
                    <h3 className="text-base font-semibold text-green-400 mb-3">O que está incluído:</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-start text-white/70 text-xs">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-green-400 mb-3">Ideal para:</h3>
                    <p className="text-white/70 text-xs">{service.idealFor.join(', ')}.</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-xl p-4 border border-green-400/20">
                    <h3 className="text-lg font-bold text-white mb-3">Pronto para começar?</h3>
                    <p className="text-white/70 mb-4 text-xs">
                      Vamos transformar sua ideia em uma estrutura digital que cresce junto com seu negócio.
                    </p>

                    <div className="space-y-3">
                      <motion.button
                        className="w-full bg-green-500 hover:bg-green-400 text-black px-4 py-2.5 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>

                      <motion.button
                        className="w-full border border-white/30 hover:border-green-400 text-white px-4 py-2.5 rounded-full font-semibold transition-colors duration-200 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Agendar Reunião
                      </motion.button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs text-white/60 text-center flex items-center justify-center space-x-1">
                        <Sparkles className="w-3 h-3 text-green-400" />
                        <span>Resposta em até 24 horas úteis</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      icon: <Building className="w-8 h-8 text-black" />,
      title: "Site Institucional",
      description: "A base digital completa para empresas que desejam autoridade e credibilidade online.",
      fullDescription: "Estruturamos páginas profissionais que contam a história da sua marca com clareza e confiança. Cada elemento é pensado para transmitir credibilidade e facilitar a conversão de visitantes em clientes.",
      includes: [
        "Design personalizado e responsivo",
        "SEO técnico otimizado",
        "CMS intuitivo para gestão",
        "Integrações com redes sociais",
        "Suporte técnico especializado",
        "Hospedagem e domínio inclusos"
      ],
      idealFor: ["Empresas", "Consultórios", "Agências", "Negócios que precisam de presença sólida"],
      timeline: "2-4 semanas",
      price: "A partir de R$ 3.500"
    },
    {
      icon: <Target className="w-8 h-8 text-black" />,
      title: "Landing Page Estratégica",
      description: "Uma única página, com um único objetivo: converter.",
      fullDescription: "Criamos páginas de alta performance para lançamentos, campanhas e captação de leads. Cada pixel é otimizado para maximizar conversões e gerar resultados mensuráveis.",
      includes: [
        "Copywriting estratégico persuasivo",
        "Design centrado em conversão",
        "Formulários otimizados",
        "Integrações com CRM",
        "Testes A/B incluídos",
        "Analytics e relatórios"
      ],
      idealFor: ["Campanhas de marketing", "Lançamentos de produtos", "Eventos"],
      timeline: "1-2 semanas",
      price: "A partir de R$ 2.500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-black" />,
      title: "E-commerce Profissional",
      description: "Sua loja virtual, pronta para vender todos os dias.",
      fullDescription: "Desenvolvemos experiências de compra fluidas, seguras e com foco total em resultado. Cada detalhe é pensado para maximizar vendas e criar uma jornada de compra excepcional.",
      includes: [
        "Carrinho de compras completo",
        "Pagamento via Pix/cartão",
        "Cálculo de frete automático",
        "Painel de gestão avançado",
        "Sistema de estoque",
        "Relatórios de vendas"
      ],
      idealFor: ["Lojas", "Marcas", "Distribuidores", "Negócios que desejam vender com autonomia"],
      timeline: "4-8 semanas",
      price: "A partir de R$ 8.500"
    },
    {
      icon: <FileText className="w-8 h-8 text-black" />,
      title: "One Page Moderna",
      description: "Um site completo em uma única página — direto, imersivo e visualmente marcante.",
      fullDescription: "Ideal para quem busca impacto sem complexidade. Criamos experiências scrolláveis que contam sua história de forma envolvente e direta.",
      includes: [
        "Design scrollável imersivo",
        "Navegação fluida por seções",
        "Layout responsivo otimizado",
        "Performance ultra-rápida",
        "Animações suaves",
        "Formulário de contato integrado"
      ],
      idealFor: ["Freelancers", "Startups", "Pequenos negócios", "Eventos"],
      timeline: "2-3 semanas",
      price: "A partir de R$ 2.000"
    },
    {
      icon: <Image className="w-8 h-8 text-black" />,
      title: "Portfólio Digital",
      description: "Transforme o seu trabalho em uma experiência visual única.",
      fullDescription: "Criamos portfólios elegantes que valorizam cada projeto e constroem reputação. Cada galeria é pensada para impressionar e converter visitantes em clientes.",
      includes: [
        "Galeria interativa avançada",
        "Filtros por categoria",
        "Área de contato integrada",
        "Design imersivo personalizado",
        "SEO otimizado para portfólio",
        "Sistema de orçamento online"
      ],
      idealFor: ["Designers", "Fotógrafos", "Arquitetos", "Artistas", "Criativos"],
      timeline: "2-3 semanas",
      price: "A partir de R$ 2.500"
    },
    {
      icon: <Code className="w-8 h-8 text-black" />,
      title: "Projeto Personalizado",
      description: "Para ideias que fogem do comum.",
      fullDescription: "Desenvolvemos plataformas e sistemas personalizados, com arquitetura sob medida e performance escalável. Cada linha de código é escrita pensando no seu crescimento futuro.",
      includes: [
        "Análise estratégica completa",
        "UX/UI exclusivo e inovador",
        "Segurança avançada",
        "Painel administrativo customizado",
        "API personalizada",
        "Suporte técnico dedicado"
      ],
      idealFor: ["Empresas com demandas específicas", "Portais corporativos", "SaaS", "Ferramentas internas"],
      timeline: "6-12 semanas",
      price: "A partir de R$ 15.000"
    }
  ];

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
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
          {...optimizedVariants.slideUp}
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
              service={service}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
