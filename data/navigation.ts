import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Contact from "@/components/contact";
import { IconType } from "react-icons";
import {
  MdApartment,
  MdCode,
  MdInfo,
  MdLightbulb,
  MdMail,
  MdSchool,
} from "react-icons/md";
import Projects from "@/components/projects";

export type Navigation = {
  name: string;
  link: string;
  icon: IconType;
  component?: React.FC;
};

export const navigations: Navigation[] = [
  {
    name: "Sobre",
    link: "about",
    icon: MdInfo,
    component: About,
  },
  {
    name: "Habilidades",
    link: "skills",
    icon: MdCode,
    component: Skills,
  },
  {
    name: "Experiência",
    link: "xp",
    icon: MdApartment,
    component: Experience,
  },
  {
    name: "Formação",
    link: "education",
    icon: MdSchool,
    component: Education,
  },
  {
    name: "Projetos",
    link: "projets",
    icon: MdLightbulb,
    component: Projects,
  },
  {
    name: "Contato",
    link: "contact",
    icon: MdMail,
    component: Contact,
  },
];
