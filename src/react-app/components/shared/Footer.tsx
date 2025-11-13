import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterLink {
  name: string;
  href: string;
  icon?: LucideIcon;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.location.href = '/#servicos';
    }
  };

  const handleTeamClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Verifica se já está na página "sobre"
    if (window.location.pathname === '/sobre') {
      // Se já está na página, apenas faz scroll para a seção
      const teamSection = document.getElementById('equipe');
      if (teamSection) {
        teamSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Se está em outra página, navega para sobre e depois faz scroll
      window.location.href = '/sobre#equipe';
    }
  };

  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: "Sobre",
      links: [
        { name: "Nossa História", href: "/sobre" },
        { name: "Equipe", href: "/sobre#equipe", onClick: handleTeamClick },
        { name: "Carreira", href: "/contato" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "#servicos", onClick: handleServicesClick },
        { name: "Design Estratégico", href: "#servicos", onClick: handleServicesClick },
        { name: "Performance", href: "#servicos", onClick: handleServicesClick },
        { name: "Consultoria", href: "#servicos", onClick: handleServicesClick }
      ]
    },
    {
      title: "Contato",
      links: [
        { name: "contato@kinetree.site", href: "mailto:contato@kinetree.site", icon: Mail },
        { name: "+55 (61) 99949-9035", href: "tel:+5561999499035", icon: Phone },
        { name: "Brasília, DF", href: "#", icon: MapPin },
        { name: "Solicitar Orçamento", href: "https://wa.me/5561999499035?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/kinetree", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/kinetree", name: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/kinetree", name: "Twitter" }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Logo />
            <p className="text-white/70 leading-relaxed mb-6">
              Construímos estruturas vivas para o seu crescimento digital. Design que move, código que estrutura.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/70 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      <span className="group-hover:underline">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            <span className="cursor-pointer hover:text-green-400 transition-colors duration-300">
              © {currentYear} Kinetree. Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link
              to="/politica-de-privacidade"
              className="text-white/60 hover:text-green-400 transition-colors duration-300"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-uso"
              className="text-white/60 hover:text-green-400 transition-colors duration-300"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
