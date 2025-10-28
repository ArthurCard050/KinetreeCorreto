import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, Send, Clock, Shield } from 'lucide-react';
import { optimizedVariants } from '../../hooks/useOptimizedAnimation';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzIfwxAlb5PusZjFMJxd2I05wInQ8v7kQpO53F6bivnJ8iwj9ZaiMOxmvQr-661ALgB/exec';

      console.log('🚀 Enviando dados via formulário oculto...');

      // Criar formulário oculto para contornar CORS
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_APPS_SCRIPT_URL;
      form.target = 'hidden_iframe';
      form.style.display = 'none';

      // Criar campos ocultos
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company || 'Não informado' },
        { name: 'projectType', value: formData.projectType },
        { name: 'budget', value: formData.budget },
        { name: 'message', value: formData.message },
        { name: 'timestamp', value: new Date().toLocaleString('pt-BR') }
      ];

      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });

      // Criar iframe oculto se não existir
      let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden_iframe';
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Adicionar formulário ao DOM e enviar
      document.body.appendChild(form);
      form.submit();

      console.log('✅ Formulário enviado!');

      // Remover formulário após envio
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 1000);

      // Mostrar sucesso (assumimos que funcionou)
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        });
      }, 5000);

    } catch (error) {
      console.error('❌ Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...optimizedVariants.slideUp}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Conte um pouco sobre o seu projeto.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12"
            {...optimizedVariants.slideUp}
            transition={{ ...optimizedVariants.slideUp.transition, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Mensagem enviada com sucesso!</h3>
                <p className="text-white/70">Responderemos em até 24 horas úteis.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Nome completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-green-400 focus:outline-none transition-colors duration-200"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-green-400 focus:outline-none transition-colors duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Nome da empresa / marca</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-green-400 focus:outline-none transition-colors duration-200"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Tipo de projeto</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors duration-200"
                    >
                      <option value="" className="bg-gray-800">Selecione o tipo</option>
                      <option value="site-institucional" className="bg-gray-800">Site institucional</option>
                      <option value="e-commerce" className="bg-gray-800">E-commerce</option>
                      <option value="landing-page" className="bg-gray-800">Landing page</option>
                      <option value="web-app" className="bg-gray-800">Web app</option>
                      <option value="outro" className="bg-gray-800">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Orçamento estimado</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors duration-200"
                    >
                      <option value="" className="bg-gray-800">Selecione o orçamento</option>
                      <option value="ate-5mil" className="bg-gray-800">Até R$5 mil</option>
                      <option value="ate-15mil" className="bg-gray-800">Até R$15 mil</option>
                      <option value="ate-30mil" className="bg-gray-800">Até R$30 mil</option>
                      <option value="acima-30mil" className="bg-gray-800">Acima de R$30 mil</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-green-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Conte-nos o que você quer construir."
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-400 disabled:bg-green-500/50 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-white/60 text-sm mt-4 flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Todas as informações são confidenciais.</span>
                    <Clock className="w-4 h-4 ml-4" />
                    <span>Responderemos em até 24 horas úteis.</span>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
