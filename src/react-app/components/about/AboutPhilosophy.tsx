import { motion } from 'framer-motion';

export default function AboutPhilosophy() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-green-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Design que move.
            </span>{' '}
            Código que estrutura.
          </h2>
          
          <div className="text-left space-y-8">
            <p className="text-xl text-white/80 leading-relaxed">
              <strong className="text-green-400">Cada projeto nasce de uma conversa.</strong>
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Antes de qualquer linha de código, mergulhamos fundo na essência de cada marca para entender sua história, seus objetivos e suas possibilidades.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              A partir daí, criamos interfaces que inspiram, experiências que conectam e tecnologias que impulsionam.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Porque, para nós, <strong className="text-green-400">um site não é um produto — é uma estrutura viva, estratégica e em constante evolução.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
