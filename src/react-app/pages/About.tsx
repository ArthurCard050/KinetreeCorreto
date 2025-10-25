import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import EssenceBento from '@/react-app/components/EssenceBento';
import AboutHero from '@/react-app/components/AboutHero';
import AboutHistory from '@/react-app/components/AboutHistory';
import AboutPhilosophy from '@/react-app/components/AboutPhilosophy';
import AboutPillars from '@/react-app/components/AboutPillars';
import AboutCulture from '@/react-app/components/AboutCulture';
import AboutCTA from '@/react-app/components/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
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