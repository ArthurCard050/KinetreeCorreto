import ProjectsPortfolio from '../shared/ProjectsPortfolio';

export default function FeaturedProjects() {
  return (
    <ProjectsPortfolio 
      showAll={true}
      showTitle={true}
      showViewAllButton={false}
    />
  );
}
