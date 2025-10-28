import { motion } from 'framer-motion';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

export default function AboutCulture() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Text Section - Smaller Container */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Gente que constrói
            </span>{' '}
            com propósito
          </h2>

          <div className="text-left space-y-8 mb-16">
            <p className="text-xl text-white/80 leading-relaxed">
              A Kinetree é formada por designers, desenvolvedores, estrategistas e criadores que acreditam no mesmo ideal: <strong className="text-green-400">crescer com propósito, sem perder a essência.</strong>
            </p>

            <p className="text-xl text-white/80 leading-relaxed">
              Trabalhamos em rede, com autonomia, empatia e curiosidade.
            </p>

            <p className="text-xl text-white/80 leading-relaxed">
              Porque acreditamos que o melhor design nasce de um time que compartilha a mesma energia e o mesmo sonho: <strong className="text-green-400">criar coisas que realmente importam.</strong>
            </p>
          </div>
        </div>

        {/* Team Cards - Larger Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            {/* Card 1 - Designer */}
            <motion.div
              className="group relative cursor-pointer"
              {...optimizedVariants.slideUp}
              transition={{ ...optimizedVariants.slideUp.transition, delay: 0.1 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-green-400/20 hover:border-green-400/60 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-green-400/25">
                {/* Full Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  {/* Image */}
                  <img
                    src="/Arthur.webp"
                    alt="Arthur - Kinetree"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />

                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

                  {/* Floating badge - always visible */}
                  <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-green-400/25 border border-green-400/40 rounded-full px-4 py-2 group-hover:bg-green-400/35 transition-all duration-300">
                    <span className="text-green-200 text-sm font-medium">Desenvolvimento</span>
                  </div>

                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Arthur
                      </h3>
                      <p className="text-green-400 font-semibold mb-3 text-lg">Front-end Developer</p>
                      <p className="text-white/90 leading-relaxed">
                        Transforma designs em interfaces fluidas e intuitivas, criando experiências digitais que encantam e engajam os usuários.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Developer */}
            <motion.div
              className="group relative cursor-pointer"
              {...optimizedVariants.slideUp}
              transition={{ ...optimizedVariants.slideUp.transition, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-green-400/20 hover:border-green-400/60 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-green-400/25">
                {/* Full Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  {/* Image */}
                  <img
                    src="/mylena2.webp"
                    alt="Mylena - Kinetree"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />

                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

                  {/* Floating badge - always visible */}
                  <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-green-400/25 border border-green-400/40 rounded-full px-4 py-2 group-hover:bg-green-400/35 transition-all duration-300">
                    <span className="text-green-200 text-sm font-medium">Negócios</span>
                  </div>

                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Mylena
                      </h3>
                      <p className="text-green-400 font-semibold mb-3 text-lg">Gerente Comercial</p>
                      <p className="text-white/90 leading-relaxed">
                        Cria pontes entre desafios de negócio e soluções digitais, cultivando parcerias estratégicas que impulsionam o crescimento mútuo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Strategist */}
            <motion.div
              className="group relative cursor-pointer"
              {...optimizedVariants.slideUp}
              transition={{ ...optimizedVariants.slideUp.transition, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-green-400/20 hover:border-green-400/60 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-green-400/25">
                {/* Full Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  {/* Image */}
                  <img
                    src="/Jonas.webp"
                    alt="Jonas - Kinetree"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />

                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

                  {/* Floating badge - always visible */}
                  <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-green-400/25 border border-green-400/40 rounded-full px-4 py-2 group-hover:bg-green-400/35 transition-all duration-300">
                    <span className="text-green-200 text-sm font-medium">Infraestrutura</span>
                  </div>

                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Jonas
                      </h3>
                      <p className="text-green-400 font-semibold mb-3 text-lg">Back-end Developer</p>
                      <p className="text-white/90 leading-relaxed">
                        Desenvolve a lógica e a estrutura que sustentam nossas aplicações, garantindo performance, segurança e escalabilidade em cada projeto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
