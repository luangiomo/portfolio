import { StaticImageData } from "next/image";
import { SkillType } from "./skills";
import LogoEasyAlmanax from "@/app/assets/project-easy-almanax-logo.png";
import LogoBuildGuess from "@/app/assets/project-build-guess-logo.png";

export type ProjectType = {
  name: string;
  description: string;
  shortlink: string;
  link: string;
  icon: StaticImageData;
  presentation: string;
  skills: SkillType["name"][];
  color: string;
};

export const projects: ProjectType[] = [
  {
    name: "Easy Almanax",
    description:
      "Ferramenta para jogadores de Dofus acompanharem oferendas e bônus do Almanax, ajudando a economizar tempo e dinheiro no jogo.",
    shortlink: "easyalmanax.com/pt",
    link: "https://easyalmanax.com/pt",
    skills: [
      "Next.js",
      "React",
      "Context API",
      "Tanstack Query",
      "Tailwind CSS",
      "I18n",
    ],
    color: "#E21649",
    icon: LogoEasyAlmanax,
    presentation: "project-easy-almanax-video.mp4",
  },
  {
    name: "Build Guess",
    shortlink: "buildguess.com/pt",
    link: "https://guess-lol-item.vercel.app/",
    description:
      "Quiz interativo onde jogadores de League of Legends tentam adivinhar o item final com base na receita, testando seu conhecimento de forma divertida.",
    skills: ["Vue.js", "Pinia", "Tailwind CSS", "I18n"],
    color: "#1447E6",
    icon: LogoBuildGuess,
    presentation: "project-build-guess-video.mp4",
  },
];
