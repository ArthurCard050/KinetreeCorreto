import { useEffect } from 'react';
import { Navigation, Footer } from '@/react-app/components/shared';
import { EssenceBento } from '@/react-app/components/home';
import { 
  AboutHero, 
  AboutHistory, 
  AboutPhilosophy, 
  AboutPillars, 
  AboutCulture, 
  AboutCTA 
} from '@/react-app/components/about';

export default function About() {
  useEffect(() => {
    // Verifica se há um hash na URL (ex: #equipe)
    const hash = window.location.hash;
    if (hash) {
      // Aguarda um pouco para a página carregar completamente
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Se não há hash, faz scroll para o topo
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutHero />
      <EssenceBento />
      <AboutHistory />
      <AboutPhilosophy />
      <AboutPillars />
      <AboutCulture />
      <AboutCTA />
      <Footer />
    </div>
  );
}