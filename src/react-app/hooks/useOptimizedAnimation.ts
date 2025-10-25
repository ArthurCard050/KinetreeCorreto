import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';

interface UseOptimizedAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useOptimizedAnimation = (options: UseOptimizedAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-50px 0px'
  } = options;

  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  // Configurações otimizadas para mobile
  const animationConfig = {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
    animate: inView ? (shouldReduceMotion ? {} : { opacity: 1, y: 0 }) : {},
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      once: true
    },
    viewport: { 
      once: true,
      margin: rootMargin,
      amount: threshold
    }
  };

  return {
    ref,
    inView,
    animationConfig,
    shouldReduceMotion
  };
};

// Variantes otimizadas para diferentes tipos de animação
export const optimizedVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  
  slideRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};