import { projects } from "../../../../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      <h1>Project</h1>
      <p>Here you can find the project details.</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}
