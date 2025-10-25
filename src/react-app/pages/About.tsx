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