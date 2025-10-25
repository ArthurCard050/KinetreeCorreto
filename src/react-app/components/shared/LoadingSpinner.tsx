import { motion } from 'framer-motion';
import { Sparkles, Zap, TreePine } from 'lucide-react';

interface LoadingSpinnerProps {
  variant?: 'default' | 'tree' | 'spark';
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingSpinner({ 
  variant = 'default', 
  size = 'md' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  if (variant === 'tree') {
    return (
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div className={`${sizeClasses[size]} border-4 border-green-400/20 border-t-green-400 rounded-full`} />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -360, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <TreePine className={`${iconSizes[size]} text-green-400`} />
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'spark') {
    return (
      <motion.div className="relative flex items-center justify-center">
        {/* Círculos concêntricos */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`absolute border-2 border-green-400/30 rounded-full`}
            style={{
              width: `${(index + 1) * (size === 'sm' ? 16 : size === 'md' ? 24 : 32)}px`,
              height: `${(index + 1) * (size === 'sm' ? 16 : size === 'md' ? 24 : 32)}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <motion.div
          className="relative z-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Sparkles className={`${iconSizes[size]} text-green-400`} />
        </motion.div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <div className={`${sizeClasses[size]} border-4 border-green-400/20 border-t-green-400 rounded-full`} />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Zap className={`${iconSizes[size]} text-green-400`} />
      </motion.div>
    </motion.div>
  );
}