export type ProjectT = {
  id?: number;
  title: string;
  src: {
    src1: string;
    src2?: string;
    src3?: string;
    src4?: string;
    src5?: string;
  }[];
  description: string;
  languages: {
    alt: string;
    src: string;
  }[];
  code?: string;
};

export const projects: ProjectT[] = [
  {
    id: 1,
    title: "Coachify Fitness",
    src: [
      {
        src1: "/src/assets/images/imagesProjectC/image.png",
        src2: "/src/assets/images/imagesProjectC/image (1).png",
        src3: "/src/assets/images/imagesProjectC/image (2).png",
        src4: "/src/assets/images/imagesProjectC/image (3).png",
        src5: "/src/assets/images/imagesProjectC/image (4).png",
      }
    ],
    description:
      "Coachify is a web application that allows trainers to manage their clients and schedules. I developed this project using Java and Spring Boot, and I built the frontend with React. The project was focused on creating a consistent backend, as it was my final project for my degree in Cross-Platform Application Development. The frontend was optional, but I decided to do it because I was passionate about React. The project received the highest score, and to this day, I enjoy dedicating time to it because it helps me grow my knowledge in React and Java.",
    languages: [
      {
        alt: "java",
        src: "/src/assets/icons/java.png",
      },
      {
        alt: "spring",
        src: "/src/assets/icons/springIcon.png",
      },
      {
        alt: "react",
        src: "/src/assets/icons/react.png",
      },
      {
        alt: "js",
        src: "/src/assets/icons/jsIcon.png",
      },
      {
        alt: "sql",
        src: "/src/assets/icons/sql.png",
      },
    ],
    code: "https://github.com/PabloDeLaCruzG/CoachifyBackEnd"
  },
  {
    id: 2,
    title: "SBS Presencia",
    src: [
      {
        src1: "/src/assets/images/imagesProjectC/dashboard-sbs-presencia.png",
      }
    ],
    description:
      "This application is a product of SBS Software SL, part of the Fernando A. Moll Group. The application already had a working version, and we proposed migrating it to the web and adding new features. Scriptcase was chosen as a rapid development tool, along with SQL for the database. This tool uses PHP, JavaScript, HTML, and CSS. It’s an interesting tool because it helps with tasks that could be more time-consuming but also allows the freedom to develop custom solutions using these languages. The application is an employee management system for companies, allowing them to manage attendance, schedules, costs, and absences.",
    languages: [
      {
        alt: "php",
        src: "/src/assets/icons/php.png",
      },
      {
        alt: "js",
        src: "/src/assets/icons/jsIcon.png",
      },
      {
        alt: "sql",
        src: "/src/assets/icons/sql.png",
      },
    ]
  },
  {
    id: 3,
    title: "My Developer Portfolio",
    src: [
      {
        src1: "/src/assets/images/imagesProjectC/dashboard-sbs-presencia.png",
      }
    ],
    description:
      "My full-stack developer portfolio is a website where I showcase my professional journey in development, my skills, academic background, and the most important projects I have developed. I decided to build this website using Astro, React, and TypeScript. I chose Astro because it’s very suitable for creating static sites and is also quite easy to learn. With React, I created some components that simplified state management, and I used TypeScript as a base to improve code quality.",
    languages: [
      {
        alt: "astro",
        src: "/src/assets/icons/astro.png",
      },
      {
        alt: "sql",
        src: "/src/assets/icons/react.png",
      },
      {
        alt: "js",
        src: "/src/assets/icons/typescript.png",
      }
    ]
  },
];
