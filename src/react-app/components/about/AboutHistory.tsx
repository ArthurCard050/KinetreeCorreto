// import { motion } from 'framer-motion';

export default function AboutHistory() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">
            Crescemos com a mesma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              lógica das árvores
            </span>
          </h2>
          
          <div className="text-left space-y-8">
            <p className="text-xl text-white/80 leading-relaxed">
              Começamos pequenos, com um propósito claro: criar sites que não apenas funcionam, mas que crescem junto com os negócios.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Com o tempo, nos tornamos uma estrutura mais ampla — um estúdio completo de experiências digitais, onde design e performance convivem em harmonia.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Hoje, nossos projetos estão presentes em diversos segmentos e cidades, impulsionando marcas, startups e criadores que acreditam no poder do digital como raiz do crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
