import ProjectsPortfolio from '../shared/ProjectsPortfolio';

export default function Portfolio() {
  return (
    <ProjectsPortfolio 
      showAll={false}
      showTitle={true}
      showViewAllButton={true}
      className="bg-gradient-to-b from-black via-gray-900 to-black"
    />
  );
}
