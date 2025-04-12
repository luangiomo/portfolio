import { IconType } from "react-icons";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
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
  category: "code" | "framework" | "style" | "ui" | "other";
  icon: IconType;
  link: string;
};

export const skillsData: SkillType[] = [
  {
    name: "JavaScript",
    category: "code",
    color: "#F7DF1E",
    icon: SiJavascript,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    category: "code",
    color: "#3178C6",
    icon: SiTypescript,
    link: "https://typescriptlang.org/",
  },
  {
    name: "HTML5",
    color: "#E34F26",
    category: "code",
    icon: SiHtml5,
    link: "https://getbootstrap.com/",
  },
  {
    name: "CSS3",
    color: "#1573B5",
    category: "code",
    icon: SiCss3,
    link: "https://getbootstrap.com/",
  },
  {
    name: "React",
    color: "#58C4DC",
    category: "framework",
    icon: SiReact,
    link: "https://react.dev/",
  },
  {
    name: "Vue.js",
    color: "#42B883",
    category: "framework",
    icon: SiVuedotjs,
    link: "https://vuejs.org/",
  },
  {
    name: "Angular",
    color: "#F5094B",
    category: "framework",
    icon: SiAngular,
    link: "https://angular.dev/",
  },
  {
    name: "Next.js",
    color: "#FFFFFF",
    category: "framework",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    color: "#00BCFF",
    category: "style",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    name: "SASS",
    color: "#CF649A",
    category: "style",
    icon: SiSass,
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    color: "#712CF9",
    category: "style",
    icon: SiBootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Figma",
    color: "#8950FF",
    category: "ui",
    icon: SiFigma,
    link: "https://www.figma.com/",
  },
  {
    name: "Adobe XD",
    color: "#FF61F7",
    category: "ui",
    icon: SiAdobexd,
    link: "https://www.figma.com/",
  },
  {
    name: "Adobe Illustrator",
    color: "#FF9B00",
    category: "ui",
    icon: SiAdobeillustrator,
    link: "https://www.adobe.com/products/illustrator.html",
  },
  {
    name: "Adobe Photoshop",
    color: "#30A8FF",
    category: "ui",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "MongoDB",
    color: "#00ED64",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Git",
    color: "#F05033",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Jest",
    color: "#99425B",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "GraphQL",
    color: "#E535AB",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "I18next",
    color: "#009788",
    category: "other",
    icon: SiAdobephotoshop,
    link: "https://www.adobe.com/products/photoshop.html",
  },
];
