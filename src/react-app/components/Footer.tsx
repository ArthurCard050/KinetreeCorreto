import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from '@/react-app/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Sobre",
      links: [
        { name: "Nossa História", href: "#" },
        { name: "Equipe", href: "#" },
        { name: "Carreira", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "#" },
        { name: "Design Estratégico", href: "#" },
        { name: "Performance", href: "#" },
        { name: "Consultoria", href: "#" }
      ]
    },
    {
      title: "Contato",
      links: [
        { name: "contato@kinetree.com", href: "mailto:contato@kinetree.com", icon: Mail },
        { name: "+55 (11) 99999-9999", href: "tel:+5511999999999", icon: Phone },
        { name: "São Paulo, SP", href: "#", icon: MapPin },
        { name: "Solicitar Orçamento", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/kinetree", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/kinetree", name: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/kinetree", name: "Twitter" },
    { icon: Github, href: "https://github.com/kinetree", name: "GitHub" }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Logo />
            <p className="text-white/70 leading-relaxed mb-6">
              Construímos estruturas vivas para o seu crescimento digital. Design que move, código que estrutura.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      <span className="group-hover:underline">{link.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            <motion.span
              className="cursor-pointer hover:text-green-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} Kinetree. Todos os direitos reservados.
            </motion.span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-white/60 hover:text-green-400 transition-colors duration-300"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
