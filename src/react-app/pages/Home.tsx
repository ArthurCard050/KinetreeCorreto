import { Navigation, Footer, FinalCTA } from '@/react-app/components/shared';
import { 
  Hero, 
  BentoResults, 
  Services, 
  Differentials, 
  Portfolio, 
  Testimonials, 
  ClientsMarquee 
} from '@/react-app/components/home';

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
