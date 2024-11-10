import type { ProjectT } from "../../data/Projects";
import Carousel from "./Carousel";

type CarouselModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: ProjectT["title"];
  description: ProjectT["description"];
  languages: ProjectT["languages"];
  src: ProjectT["src"];
  code: ProjectT["code"];
};

export default function CarouselModal({
  isOpen,
  onClose,
  title,
  description,
  languages,
  src,
  code,
}: CarouselModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative p-3 lg:w-full lg:max-w-lg md:max-w-screen-md mx-3 max-h-[90vh] bg-white rounded-lg shadow dark:bg-gray-700 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center"
            onClick={onClose}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>
        </div>
        
        {/* Contenido del Modal */}
        <div className="p-3 space-y-4">
          {/* Carousel */}
          <div>
            <Carousel src={src} />
          </div>

          {/* Iconos de Lenguajes */}
          <div className="flex flex-wrap justify-center md:justify-start py-2 space-x-2">
            {languages?.map((language, index) => (
              <img
                key={index}
                className="w-5 h-5 md:w-6 md:h-6 mx-1 custom-img"
                src={language.src}
                alt={language.alt}
              />
            ))}
          </div>

          {/* Descripción */}
          <div>
            <p className="text-xs md:text-sm text-pretty mb-3">{description}</p>
          </div>

          {/* Botón de Código */}
          {code && (
            <div className="flex justify-center md:justify-start">
              <a href={code} target="_blank" rel="noreferrer">
                <button className="flex flex-row items-center bg-sec-color text-white p-2 rounded-lg shadow-md hover:bg-sec-color-dark transition-transform transform hover:scale-105">
                  <img
                    style={{
                      filter: "brightness(0) saturate(100%) invert(100%)",
                    }}
                    className="w-4 h-4 md:w-5 md:h-5 mr-1"
                    src="/src/assets/icons/githubIcon.png"
                    alt="Icono de código"
                  />
                  <p className="text-sm">Ver Código</p>
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
