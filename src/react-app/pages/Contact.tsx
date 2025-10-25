import { Navigation, Footer, FinalCTA } from '@/react-app/components/shared';
import { FAQ } from '@/react-app/components/home';
import { 
  ContactHero, 
  ContactForm, 
  ContactMethods 
} from '@/react-app/components/contact';

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

