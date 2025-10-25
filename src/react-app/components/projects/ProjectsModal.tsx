import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Globe, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectUrl: string;
  projectTitle: string;
}

export default function ProjectModal({ isOpen, onClose, projectUrl, projectTitle }: ProjectModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Block body scroll when modal is open
  useScrollLock(isOpen);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };
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
            <div
              className="relative w-full h-full bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-full"
              onWheel={(e) => {
                // Allow scroll only if it's coming from the iframe area
                const target = e.target as HTMLElement;
                if (!target.closest('iframe')) {
                  e.preventDefault();
                }
              }}
            >
              {/* Header */}
              <div className="relative z-10 bg-gradient-to-b from-black/100 to-black/80 border-b border-white/10">
                {/* Desktop Header */}
                <div className="hidden sm:flex items-center justify-between p-4 md:p-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                      <Globe className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">{projectTitle}</h3>
                      <p className="text-white/60 text-xs md:text-sm">Visualização do projeto</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={handleReload}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: -180 }}
                      whileTap={{ scale: 0.9 }}
                      title="Recarregar projeto"
                    >
                      <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.button>

                    <motion.a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-full text-xs md:text-sm font-semibold transition-colors flex items-center space-x-1.5 md:space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden md:inline">Abrir em nova aba</span>
                      <span className="md:hidden">Abrir</span>
                    </motion.a>

                    <motion.button
                      onClick={onClose}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Mobile Header */}
                <div className="sm:hidden">
                  {/* Top row - Title and close button */}
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white font-semibold text-sm truncate">{projectTitle}</h3>
                        <p className="text-white/60 text-xs">Visualização do projeto</p>
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

                  {/* Bottom row - Action buttons */}
                  <div className="flex items-center justify-center space-x-3 px-3 pb-3">
                    <motion.button
                      onClick={handleReload}
                      className="flex-1 max-w-[120px] h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors text-xs font-medium space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Recarregar</span>
                    </motion.button>

                    <motion.a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 max-w-[120px] h-9 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-full font-medium transition-colors flex items-center justify-center text-xs space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Abrir</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* iframe Container */}
              <div
                className="relative flex-1 bg-white min-h-0"
                style={{ touchAction: 'auto' }}
              >
                <motion.iframe
                  key={iframeKey}
                  src={projectUrl}
                  className="w-full h-full"
                  title={projectTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  style={{ border: 'none' }}
                  onLoad={handleIframeLoad}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoading ? 0 : 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />

                {/* Loading indicator */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-green-400/30 border-t-green-400 rounded-full mb-3 sm:mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.p
                        className="text-gray-600 text-xs sm:text-sm font-medium text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Carregando projeto...
                      </motion.p>
                      <motion.p
                        className="text-gray-500 text-xs text-center mt-2 sm:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Pode levar alguns segundos
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
