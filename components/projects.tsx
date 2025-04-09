import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Device from "./project/device";

export default function Projects() {
  return (
    <>
      {projects.map(
        ({
          name,
          description,
          link,
          color,
          shortlink,
          skills,
          icon,
          presentation,
        }) => (
          <div
            key={name}
            className="w-full lg:w-10/12 space-y-3 py-6 border-b border-b-white/10"
          >
            <div className="flex items-center gap-3">
              {icon ? (
                <span className="border border-white/20 rounded-lg w-10 h-10 bottom-0 overflow-hidden bg-white/10 flex justify-center items-center">
                  <Image className="w-6 h-auto" src={icon} alt={`Logo`} />
                </span>
              ) : null}
              <h2 className="leading-tight font-mono font-semibold uppercase text-base  text-white tracking-tight whitespace-nowrap">
                {name}
              </h2>
            </div>
            <p className="leading-tight font-sans text-white/60 text-sm">
              <span className="text-white">Proposito: </span>
              {description}
            </p>
            <p className="leading-tight font-sans text-white/60 text-sm mb-8">
              <span className="text-white">Tecnologias: </span>
              {skills.map((skill) => (
                <span key={skill}>{skill} | </span>
              ))}
            </p>
            <Link href={link} target="_blank">
              <Device
                color={color}
                shortlink={shortlink}
                presentation={presentation}
              />
            </Link>
          </div>
        )
      )}
    </>
  );
}
