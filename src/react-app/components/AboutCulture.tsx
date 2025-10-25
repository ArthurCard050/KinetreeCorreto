import { motion } from 'framer-motion';

export default function AboutCulture() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Gente que constrói
            </span>{' '}
            com propósito
          </h2>
          
          <div className="text-left space-y-8">
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
      </div>
    </section>
  );
}
