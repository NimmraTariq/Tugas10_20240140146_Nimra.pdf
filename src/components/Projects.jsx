import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
