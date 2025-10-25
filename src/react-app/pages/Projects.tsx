import Navigation from '@/react-app/components/Navigation';
import Footer from '@/react-app/components/Footer';
import FinalCTA from '@/react-app/components/FinalCTA';
import Testimonials from '@/react-app/components/Testimonials';
import ProjectsHero from '@/react-app/components/ProjectsHero';
import FeaturedProjects from '@/react-app/components/FeaturedProjects';
import ProjectTypes from '@/react-app/components/ProjectTypes';
import ProjectsResults from '@/react-app/components/ProjectsResults';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectTypes />
      <ProjectsResults />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}