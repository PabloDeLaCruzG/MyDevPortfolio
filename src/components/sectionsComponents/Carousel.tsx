import { useState } from "react";
import type { ProjectT } from "../../data/Projects";

type CarouselProps = {
  src: ProjectT["src"];
};

export default function Carousel({ src }: CarouselProps) {
  const imageUrls = src.flatMap((project) => Object.values(project));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="indicators-carousel" className="relative overflow-hidden rounded-lg h-52 lg:h-64 w-full">
      
        {imageUrls.map((imageSrc, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentIndex ? "block" : "hidden"}`}
          >
            <img
              src={imageSrc.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Project image ${index + 1}`}
            />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-300"}`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Prev botton: Visible if there are more than one image */}
        {imageUrls.length > 1 && (
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrevClick}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
        )}

        {/* Next button: Visible if there are more than one image */}
        {imageUrls.length > 1 && (
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNextClick}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        )}
      
    </div>
  );
}
