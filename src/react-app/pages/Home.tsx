import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import BentoResults from '@/react-app/components/BentoResults';
import Services from '@/react-app/components/Services';
import Differentials from '@/react-app/components/Differentials';
import Portfolio from '@/react-app/components/Portfolio';
import Testimonials from '@/react-app/components/Testimonials';
import ClientsMarquee from '@/react-app/components/ClientsMarquee';
import FinalCTA from '@/react-app/components/FinalCTA';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <BentoResults />
      <Services />
      <Differentials />
      <Portfolio />
      <Testimonials />
      <ClientsMarquee />
      <FinalCTA />
      <Footer />
    </div>
  );
}
