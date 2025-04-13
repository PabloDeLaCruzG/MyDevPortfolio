import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/Projects";
import type { ProjectT } from "../../data/Projects";
import ProjectModal from "./ProjectModal";
import FolderIcon from '../../assets/icons/folderIcon.png';

export default function ProjectSection () {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectT | null>(null);

  const openModal = (project: ProjectT) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="flex items-center mb-4 mt-10">
        <img
          className="custom-img w-5 h-5 mr-1"
          src={FolderIcon.src}
          alt="Icono de trabajo"
        />
        <h4 className="font-bold text-lg">Projects</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            src={project.src}
            description={project.description}
            languages={project.languages}
            onClick={() => openModal(project)}
            code={project.code}
          />
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          title={selectedProject.title}
          description={selectedProject.description}
          languages={selectedProject.languages}
          src={selectedProject.src}
          code={selectedProject.code}
          url={selectedProject.url}
        />
      )}
    </section>
  );
};

