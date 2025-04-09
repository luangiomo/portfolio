import { ProjectType } from "@/data/projects";
import Link from "next/link";
import Device from "./device";

export default function Project({
  color,
  description,
  link,
  name,
  shortlink,
  skills,
}: ProjectType) {
  return (
    <div className="flex flex-col">
      <Link href={link} target="_blank">
        <Device link={shortlink} color={color} />
      </Link>
      <div className="flex flex-col gap-4 p-4 w-full bg-[#1c1c1c] border border-[#353535] rounded-b-lg flex-1">
        <span className="space-y-2">
          <h2 className="leading-tight font-mono font-semibold uppercase text-xl text-white tracking-tight whitespace-nowrap">
            {name}
          </h2>
          <p className="leading-tight font-sans text-[#BABABA] text-sm">
            {description}
          </p>
        </span>

        <div className="flex gap-1 flex-wrap pr-16 font-sans">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-sm bg-[#181818] text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
        {/* <div className="flex gap-2 justify-end mt-auto">
          <button className="px-4 py-2 rounded-sm bg-[#181818] text-[#f6f6f6] text-lg">
            <SiGithub />
          </button>
          <button className="px-4 py-2 rounded-sm bg-[#181818] text-[#f6f6f6] text-sm">
            Saiba mais
          </button>
        </div> */}
      </div>
    </div>
  );
}
