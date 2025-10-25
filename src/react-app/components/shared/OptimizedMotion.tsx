import { motion, MotionProps } from 'framer-motion';
import { useOptimizedAnimation, optimizedVariants } from '../../hooks/useOptimizedAnimation';
import { ReactNode } from 'react';

interface OptimizedMotionProps extends Omit<MotionProps, 'initial' | 'animate' | 'transition'> {
  children: ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  className?: string;
}

export function OptimizedMotion({ 
  children, 
  variant = 'slideUp', 
  delay = 0, 
  className,
  ...props 
}: OptimizedMotionProps) {
  const { ref } = useOptimizedAnimation();
  
  const variantConfig = optimizedVariants[variant];
  
  return (
    <motion.div
      ref={ref}
      className={className}
      {...variantConfig}
      transition={{ ...variantConfig.transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Componentes específicos para casos comuns
export function FadeIn({ children, delay = 0, className, ...props }: Omit<OptimizedMotionProps, 'variant'>) {
  return (
    <OptimizedMotion variant="fadeIn" delay={delay} className={className} {...props}>
      {children}
    </OptimizedMotion>
  );
}

export function SlideUp({ children, delay = 0, className, ...props }: Omit<OptimizedMotionProps, 'variant'>) {
  return (
    <OptimizedMotion variant="slideUp" delay={delay} className={className} {...props}>
      {children}
    </OptimizedMotion>
  );
}

export function SlideLeft({ children, delay = 0, className, ...props }: Omit<OptimizedMotionProps, 'variant'>) {
  return (
    <OptimizedMotion variant="slideLeft" delay={delay} className={className} {...props}>
      {children}
    </OptimizedMotion>
  );
}