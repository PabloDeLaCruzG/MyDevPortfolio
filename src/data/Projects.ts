import ImageProjectC from "../assets/images/imagesProjectC/image.png";
import ImageProjectC1 from "../assets/images/imagesProjectC/image (1).png";
import ImageProjectC2 from "../assets/images/imagesProjectC/image (2).png";
import ImageProjectC3 from "../assets/images/imagesProjectC/image (3).png";
import ImageProjectC4 from "../assets/images/imagesProjectC/image (4).png";
import ImageProjectS1 from "../assets/images/dashboard-sbs-presencia.png";
import HomeFAI from "../assets/images/HomeFAI.png";
import LandingFAI from "../assets/images/LandingFAI.png";

import JavaIcon from "../assets/icons/java.png";
import SpringIcon from "../assets/icons/springIcon.png";
import ReactIcon from "../assets/icons/react.png";
import JavaScriptIcon from "../assets/icons/jsIcon.png";
import SQLIcon from "../assets/icons/sql.png";
import PHPIcon from "../assets/icons/php.png";
import NextIcon from "../assets/icons/next.png";
import TypeScriptIcon from "../assets/icons/typescript.png";
import NodeIcon from "../assets/icons/nodeIcon.png";
import MongoIcon from "../assets/icons/mongodb.png";

export type ProjectT = {
  id?: number;
  title: string;
  src: {
    src1: ImageMetadata;
    src2?: ImageMetadata;
    src3?: ImageMetadata;
    src4?: ImageMetadata;
    src5?: ImageMetadata;
  }[];
  description: string;
  languages: {
    alt: string;
    src: ImageMetadata;
  }[];
  code?: string;
  url?: string;
};

export const projects: ProjectT[] = [
  {
    id: 1,
    title: "FoodWai",
    src: [
      {
        src1: LandingFAI,
        src2: HomeFAI,
      },
    ],
    description:
      "This is a personal project, that project born from many time I don't know what cooks me. Also I was learning Next.js and I wanted to try OpenAI API,. This project is a Recipe generator with OpenAI API, and it's a simple but complete project that I can use to learn how to use OpenAI API, and practise my knowledge with Next.js, I also use Node.js with Express.js to do the backend, and MongoDB with mongoose to do the database. I also used Tailwind CSS to make the frontend look good, I used React to create the components, and I used Next.js to create the pages. This project was my first project with Next.js, so I learned a lot from it, also I learned how to use OpenAI API and how to use MongoDB with mongoose.",
    languages: [
      {
        alt: "next icon",
        src: NextIcon,
      },
      {
        alt: "typescript",
        src: TypeScriptIcon,
      },
      {
        alt: "node",
        src: NodeIcon,
      },
      {
        alt: "mongo",
        src: MongoIcon,
      },
    ],
    code: "https://github.com/PabloDeLaCruzG/Foodwai",
    url: "https://foodwai.onrender.com",
  },
  {
    id: 2,
    title: "Coachify Fitness",
    src: [
      {
        src1: ImageProjectC,
        src2: ImageProjectC1,
        src3: ImageProjectC2,
        src4: ImageProjectC3,
        src5: ImageProjectC4,
      },
    ],
    description:
      "Coachify is a web application that allows trainers to manage their clients and schedules. I developed this project using Java and Spring Boot, and I built the frontend with React. The project was focused on creating a consistent backend, as it was my final project for my degree in Cross-Platform Application Development. The frontend was optional, but I decided to do it because I was passionate about React. The project received the highest score, and to this day, I enjoy dedicating time to it because it helps me grow my knowledge in React and Java.",
    languages: [
      {
        alt: "java",
        src: JavaIcon,
      },
      {
        alt: "spring",
        src: SpringIcon,
      },
      {
        alt: "react",
        src: ReactIcon,
      },
      {
        alt: "js",
        src: JavaScriptIcon,
      },
      {
        alt: "sql",
        src: SQLIcon,
      },
    ],
    code: "https://github.com/PabloDeLaCruzG/CoachifyBackEnd",
  },
  {
    id: 3,
    title: "SBS Presencia",
    src: [
      {
        src1: ImageProjectS1,
      },
    ],
    description:
      "This application is a product of SBS Software SL, part of the Fernando A. Moll Group. The application already had a working version, and we proposed migrating it to the web and adding new features. Scriptcase was chosen as a rapid development tool, along with SQL for the database. This tool uses PHP, JavaScript, HTML, and CSS. It’s an interesting tool because it helps with tasks that could be more time-consuming but also allows the freedom to develop custom solutions using these languages. The application is an employee management system for companies, allowing them to manage attendance, schedules, costs, and absences.",
    languages: [
      {
        alt: "php",
        src: PHPIcon,
      },
      {
        alt: "js",
        src: JavaScriptIcon,
      },
      {
        alt: "sql",
        src: SQLIcon,
      },
    ],
  },
];
