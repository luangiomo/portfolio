import { IconType } from "react-icons";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAngular,
  SiBootstrap,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type SkillType = {
  name: string;
  color: string;
  icon: IconType;
  link: string;
};

export const skillsData: SkillType[] = [
  {
    name: "Next.js",
    color: "#FFFFFF",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    color: "#58C4DC",
    icon: SiReact,
    link: "https://react.dev/",
  },
  {
    name: "Vue.js",
    color: "#42B883",
    icon: SiVuedotjs,
    link: "https://vuejs.org/",
  },
  {
    name: "Angular",
    color: "#F5094B",
    icon: SiAngular,
    link: "https://angular.dev/",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: SiTypescript,
    link: "https://typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    color: "#00BCFF",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "SASS",
    color: "#CF649A",
    icon: SiSass,
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    color: "#712CF9",
    icon: SiBootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Figma",
    color: "#8950FF",
    icon: SiFigma,
    link: "https://www.figma.com/",
  },
  {
    name: "Adobe Illustrator",
    color: "#FF9B00",
    icon: SiAdobeillustrator,
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "Adobe Photoshop",
    color: "#30A8FF",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
];
