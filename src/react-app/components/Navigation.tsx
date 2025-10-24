import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/react-app/components/Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.8)']
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4">
          <motion.nav
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mx-auto max-w-4xl"
            style={{ backgroundColor }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <motion.a
                  href="/sobre"
                  className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  Sobre
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-200" />
                </motion.a>
                {['Serviços', 'Projetos', 'Contato'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors duration-200 relative group"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-200" />
                  </motion.a>
                ))}
              </div>
              
              {/* Desktop CTA Button */}
              <motion.button
                className="hidden md:block bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-full font-semibold transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleMobileMenu}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <motion.a
              href="/sobre"
              className="text-white text-2xl font-semibold hover:text-green-400 transition-colors duration-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0 * 0.1 }}
              onClick={toggleMobileMenu}
            >
              Sobre
            </motion.a>
            {['Serviços', 'Projetos', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl font-semibold hover:text-green-400 transition-colors duration-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: (index + 1) * 0.1 }}
                onClick={toggleMobileMenu}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              onClick={toggleMobileMenu}
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}