import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import FinalCTA from '@/react-app/components/FinalCTA';
import ContactHero from '@/react-app/components/ContactHero';
import ContactForm from '@/react-app/components/ContactForm';
import ContactMethods from '@/react-app/components/ContactMethods';
import FAQ from '@/react-app/components/FAQ';

export default function Contact() {

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <ContactMethods />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

