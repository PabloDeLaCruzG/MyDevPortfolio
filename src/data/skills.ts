import TypeScriptIcon from '../assets/icons/typescript.png';
import ReactIcon from '../assets/icons/react.png';
import JavaIcon from '../assets/icons/java.png';
import SpringIcon from '../assets/icons/springIcon.png';
import PHPIcon from '../assets/icons/php.png';
import JavaScriptIcon from '../assets/icons/jsIcon.png';
import NodeIcon from '../assets/icons/nodeIcon.png';
import AstroIcon from '../assets/icons/astro.png';
import NextIcon from '../assets/icons/next.png';
import SQLIcon from '../assets/icons/sql.png';
import MongoDBIcon from '../assets/icons/mongodb.png';
import GitIcon from '../assets/icons/gitIconW.png';
import OpenProjectIcon from '../assets/icons/openprojectIcon.png';

type SkillsT = {
    name: string;
    src: ImageMetadata;
}

export const skills: SkillsT[] = [
    { name: 'TypeScript', src: TypeScriptIcon },
    { name: 'React', src: ReactIcon },
    { name: 'Java', src: JavaIcon },
    { name: 'Spring', src: SpringIcon },
    { name: 'PHP', src: PHPIcon },
    { name: 'JavaScript', src: JavaScriptIcon },
    { name: 'Node', src: NodeIcon },
    { name: 'Astro', src: AstroIcon },
    { name: 'Next', src: NextIcon },
    { name: 'SQL', src: SQLIcon },
    { name: 'MongoDB', src: MongoDBIcon },
    { name: 'Git', src: GitIcon },
    { name: 'OpenProject', src: OpenProjectIcon }
];
