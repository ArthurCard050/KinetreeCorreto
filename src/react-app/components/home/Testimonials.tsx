import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Marina Silva",
    role: "CEO",
    company: "EcoTech Solutions",
    content: "A Kinetree transformou completamente nossa presença digital. Em 6 meses, nossas vendas online cresceram 240% e nossa taxa de conversão triplicou. O trabalho deles vai muito além do design - é estratégia pura.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5
  },
  {
    name: "Carlos Mendoza",
    role: "Diretor de Marketing",
    company: "FinanceFlow",
    content: "Performance incrível! Nosso site carrega em menos de 2 segundos e isso fez toda a diferença. A experiência do usuário é impecável e os resultados em SEO superaram todas as expectativas.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 5
  },
  {
    name: "Ana Rodriguez",
    role: "Fundadora",
    company: "WellnessHub",
    content: "O design é simplesmente espetacular. Cada detalhe foi pensado para converter e engajar nossos usuários. O suporte é excepcional e sempre disponível quando precisamos.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "CTO",
    company: "SmartCity Platform",
    content: "Tecnologia de ponta com execução perfeita. A arquitetura do sistema é robusta, segura e escalável. Definitivamente os melhores no que fazem.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 5
  }
];

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Quote className="w-8 h-8 text-green-400 mb-6" />
      
      <p className="text-white/90 leading-relaxed mb-6 text-lg">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-green-400/50"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-green-400 text-sm">{testimonial.role} • {testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex items-center mt-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
        ))}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-green-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            O que nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              clientes dizem
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-green-400 fill-current" />
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-white/70">— Baseado em +120 avaliações reais</span>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid md:grid-cols-2 gap-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentIndex}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonials}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    Math.floor(currentIndex / 2) === index
                      ? 'bg-green-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentIndex(index * 2)}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonials}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
