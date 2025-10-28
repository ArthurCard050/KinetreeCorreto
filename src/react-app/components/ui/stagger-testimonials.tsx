"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';
import { useTestimonials } from '../../hooks/useStrapi';
import { cmsService, Testimonial } from '../../../services/strapi';
import LoadingSpinner from '../shared/LoadingSpinner';

const SQRT_5000 = Math.sqrt(5000);

// Testimonials will be loaded from CMS

interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-green-500 text-black border-green-500"
          : "z-0 bg-gray-800/90 text-white border-white/20 hover:border-green-400/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `translate(-50%, -50%) translateX(${(cardSize / 1.4) * position}px) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255, 255, 255, 0.1)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/20"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={cmsService.getImageUrl(testimonial.avatar)}
        alt={testimonial.name}
        className="mb-4 h-14 w-12 bg-gray-600 object-cover object-top rounded"
        style={{
          boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.3)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-black" : "text-white"
      )}>
        "{testimonial.content}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-black/80" : "text-white/70"
      )}>
        - {testimonial.name}, {testimonial.role} da {testimonial.company}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Fetch testimonials from CMS
  const { testimonials: cmsTestimonials, loading, error } = useTestimonials({
    featured: true,
    limit: 12 // Limit to 12 testimonials for performance
  });

  // Use testimonials directly from CMS
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([]);

  useEffect(() => {
    if (cmsTestimonials.length > 0) {
      setTestimonialsList(cmsTestimonials);
    }
  }, [cmsTestimonials]);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push(item);
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift(item);
      }
    }
    setTestimonialsList(newList);
  };

  // Auto-play infinito
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleMove(1);
    }, 4000); // Move a cada 4 segundos

    return () => clearInterval(interval);
  }, [testimonialsList, isAutoPlaying]);

  // Pausa o auto-play quando o usuário interage
  const handleManualMove = (steps: number) => {
    setIsAutoPlaying(false);
    handleMove(steps);

    // Retoma o auto-play após 8 segundos de inatividade
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-green-900 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-[600px]">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </section>
    );
  }

  // Don't render if no testimonials
  if (testimonialsList.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-green-900 relative">
      {/* Título centralizado */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            O que nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Histórias reais de transformação digital que geraram resultados extraordinários.
          </p>
        </motion.div>

        {/* Error state */}
        {error && (
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm">
              {error} - Carregando dados locais
            </p>
          </div>
        )}
      </div>

      {/* Carrossel que se estende até as extremidades */}
      <div className="relative w-full">
        <div
          className="relative w-full overflow-hidden bg-transparent"
          style={{ height: 600 }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;

            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                handleMove={handleManualMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}

          {/* Controles centralizados */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-30">
            <button
              onClick={() => handleManualMove(-1)}
              className={cn(
                "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full relative",
                "bg-white/10 border-2 border-white/20 hover:bg-green-500 hover:text-black hover:border-green-500",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-white"
              )}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft />
            </button>

            {/* Indicador de auto-play */}
            <div className="flex items-center justify-center">
              <div className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-white/30"
              )} />
            </div>

            <button
              onClick={() => handleManualMove(1)}
              className={cn(
                "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full relative",
                "bg-white/10 border-2 border-white/20 hover:bg-green-500 hover:text-black hover:border-green-500",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-white"
              )}
              aria-label="Próximo depoimento"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};