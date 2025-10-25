import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-white font-semibold text-lg">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pt-4 pb-6">
          <p className="text-white/70 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ContactFAQ() {
  const faqItems = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "Depende da complexidade do projeto. Em média, sites institucionais levam de 2 a 4 semanas. Projetos maiores, como e-commerces e web apps, podem exigir prazos personalizados."
    },
    {
      question: "Vocês atendem clientes de fora do Brasil?",
      answer: "Sim! Trabalhamos com empresas e profissionais de qualquer lugar do mundo, em português, inglês e espanhol."
    },
    {
      question: "É possível começar com um orçamento reduzido?",
      answer: "Sim. Criamos soluções escaláveis — começamos com o essencial e expandimos junto com o crescimento do seu negócio."
    },
    {
      question: "A Kinetree oferece suporte após a entrega?",
      answer: "Com certeza. Oferecemos planos de manutenção, atualizações e acompanhamento contínuo para garantir a evolução do seu site."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Antes de enviar, talvez a gente já possa responder.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
