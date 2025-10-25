import { Navigation, Footer, FinalCTA } from '@/react-app/components/shared';
import { Testimonials } from '@/react-app/components/home';
import { 
  ProjectsHero, 
  FeaturedProjects, 
  ProjectTypes, 
  ProjectsResults 
} from '@/react-app/components/projects';

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