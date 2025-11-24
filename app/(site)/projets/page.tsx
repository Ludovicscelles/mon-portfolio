import { projects } from "../../../data/Projects";
import ProjectCard from "../components/ProjectCard";


export default function Project() {
  return (
    <div>
      <h1 className="title blue-text text-2xl md:text-6xl font-bold text-center mt-5 md:mt-30 mb-5 md:mb-20">
        Mes Projets
      </h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2 className="title blue-text text-2xl md:text-4xl font-semibold text-center mt-5 md:mt-30 mb-10 md:mb-10">
            {project.name}
          </h2>
          <div
            className="mb-10 md:ml-10 md:mr-10
              "
          >
            <ProjectCard key={project.id} project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}
