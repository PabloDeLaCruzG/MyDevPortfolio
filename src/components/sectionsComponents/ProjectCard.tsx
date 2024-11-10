import type { ProjectT } from "../../data/Projects";

type ProjectCardProps = ProjectT & {
  onClick: () => void;
};

export default function ProjectCard ({ src, description, languages, onClick }: ProjectCardProps) {
  return (
    <div
      className="flex flex-col max-w-lg p-2 cursor-pointer rounded-lg bg-slate-800 shadow-md overflow-hidden hover:scale-105 transform transition-transform duration-300 relative group"
      onClick={onClick}
    >
      <div className="relative">
        <img className="h-48 w-full object-cover rounded-lg" src={src[0].src1} alt="Proyecto" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
          <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ver más detalles
          </span>
        </div>
      </div>
      <div className="flex flex-row py-2">
        {languages?.map((language, index) => (
          <img
            key={index}
            className="w-6 h-6 mx-1"
            src={language.src}
            alt={language.alt}
          />
        ))}
      </div>
      <p className="text-xs text-pretty flex-grow text-white line-clamp-3">{description}</p>
    </div>
  );
};

