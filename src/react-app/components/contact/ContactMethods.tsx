import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Calendar } from 'lucide-react';

export default function ContactMethods() {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8 text-black" />,
      title: "WhatsApp",
      description: "Atendimento rápido e direto.",
      delay: 0
    },
    {
      icon: <Mail className="w-8 h-8 text-black" />,
      title: "E-mail",
      description: "contato@kinetree.com.br",
      delay: 0.1
    },
    {
      icon: <MapPin className="w-8 h-8 text-black" />,
      title: "Localização",
      description: "São Paulo – SP / Atendimento para todo o Brasil.",
      delay: 0.2
    },
    {
      icon: <Calendar className="w-8 h-8 text-black" />,
      title: "Reunião online",
      description: "Agende um horário e vamos conversar sobre o seu projeto.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Prefere falar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              direto
            </span>{' '}
            com a gente?
          </h2>
          <p className="text-lg text-white/70">
            Você também pode entrar em contato pelos canais abaixo.
            <br />
            Escolha o que for mais prático para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: method.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-white/70 text-sm">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
