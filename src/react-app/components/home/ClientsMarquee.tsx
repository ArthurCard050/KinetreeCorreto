import { motion } from 'framer-motion';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

interface ClientLogoProps {
  name: string;
}

function ClientLogo({ name }: ClientLogoProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/20">
      <div className="text-2xl font-bold grayscale group-hover:grayscale-0 transition-all duration-300">
        <span className="bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-green-300 group-hover:to-green-500 bg-clip-text text-transparent">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  const clients = [
    'TechStore',
    'HealthCare Pro',
    'EduFlow',
    'FoodHub',
    'RealEstate Plus',
    'FitnessPro',
    'StyleHub',
    'FinanceFlow',
    'TravelMax',
    'AutoPro'
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-green-500/5 to-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <motion.div
          className="text-center"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Parceiros de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Sucesso
            </span>
          </h2>
          <p className="text-lg text-white/60">
            Empresas que confiam na Kinetree para transformar seus negócios
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`first-${index}`}
                className="mx-8 flex items-center justify-center"
              >
                <ClientLogo name={client} />
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            aria-hidden="true"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`second-${index}`}
                className="mx-8 flex items-center justify-center"
              >
                <ClientLogo name={client} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}