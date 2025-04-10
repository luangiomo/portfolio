"use client";
import { SkillType, skillsData } from "@/data/skills";
import { useState } from "react";

//SVG Paths
import FirstPath from "@/app/assets/paths/first-path.svg";
import FourthPath from "@/app/assets/paths/fourth-path.svg";
import SecondPath from "@/app/assets/paths/second-path.svg";
import ThirdPath from "@/app/assets/paths/third-path.svg";

export default function SkillsContainer() {
  const [currentSkill, setCurrentSkill] = useState<SkillType | undefined>(
    undefined
  );

  const skills = skillsData;
  const primarySkills = skills.slice(0, 5);
  const secondarySkills = skills.slice(5);
  const currentColor = currentSkill?.color;

  //   <button className="bg-white/10 border border-white/20 p-3 rounded-2xl font-sans text-xs text-white">
  //   <div className="w-30 h-30 bg-white/30 rounded-lg" />
  // </button>

  return (
    <div className="w-full relative scale-90 md:scale-100">
      <code className="transition-colors duration-300 relative z-30 w-126 p-3 bg-white/10 border border-white/20 rounded-2xl flex gap-2 items-center text-white/60">
        <div className="flex gap-2 font-mono text-xs text-white/40">
          <div className="flex flex-col">
            {[...Array(5)].map((_, index) => (
              <span key={index + 1}>{index + 1}</span>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <span>{"{"}</span>
            <span>{"}"}</span>
          </div>
        </div>
        <div
          className="font-mono text-xs transition-colors duration-300"
          style={{ color: currentColor ? "#FFFFFF33" : "inherit" }}
        >
          {`"skills": [ `}
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              onMouseEnter={() => setCurrentSkill(skill)}
              onMouseLeave={() => setCurrentSkill(undefined)}
              className="cursor-pointer"
            >
              <span
                style={{
                  color:
                    currentSkill?.name === skill.name
                      ? currentColor
                      : "inherit",
                }}
              >
                {`"${skill.name}"`}
              </span>
              <span>{index + 1 !== skills.length && ", "}</span>
            </span>
          ))}
          {" ]"}
        </div>
      </code>
      <div className="transition-colors duration-300 stroke-1 stroke-white/20">
        <FirstPath
          className="absolute right-80 z-20 pulse-animation electricity-effect ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <FirstPath className="absolute right-80 z-10" />
        <SecondPath
          className="absolute right-80 z-20 pulse-animation electricity-effect-2  duration-300 ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <SecondPath className="absolute right-80 z-10" />
        <ThirdPath
          className="absolute right-58 z-20 pulse-animation electricity-effect-3  duration-100 ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <ThirdPath className="absolute right-58 z-10" />
        <FourthPath
          className="absolute right-20.5 top-20 z-20 pulse-animation electricity-effect-4  duration-250 ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <FourthPath className="absolute right-20.5 top-20 z-10" />
      </div>
      <div className="justify-self-end relative mt-7 transition-colors duration-300 w-80 px-2 py-2 z-30 border border-white/20 rounded-2xl bg-linear-to-b from-white/10 to-white/0">
        <div className="flex">
          {primarySkills.map((skill, index) => (
            <div
              className="px-1 py-1 w-full cursor-pointer"
              key={index}
              onMouseEnter={() => setCurrentSkill(skill)}
              onMouseLeave={() => setCurrentSkill(undefined)}
            >
              <span
                className="flex justify-center items-center text-white/60 text-xl transition-colors duration-300 w-full aspect-square bg-white/10 rounded-xl"
                style={{
                  color:
                    currentSkill?.name === skill.name
                      ? currentColor
                      : `${currentColor ? "#FFFFFF33" : skill.color}`,
                  border: `1px solid ${
                    currentSkill?.name === skill.name
                      ? currentColor
                      : "#FFFFFF0d"
                  }`,
                  boxShadow:
                    currentSkill?.name === skill.name
                      ? `${
                          currentColor + "40"
                        } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`
                      : "",
                }}
              >
                <skill.icon />
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          {secondarySkills.map((skill, index) => (
            <div
              className="px-1 py-1 w-full cursor-pointer"
              key={index}
              onMouseEnter={() => setCurrentSkill(skill)}
              onMouseLeave={() => setCurrentSkill(undefined)}
            >
              <span
                className="flex justify-center items-center text-white/60 text-lg transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
                style={{
                  color:
                    currentSkill?.name === skill.name
                      ? currentColor
                      : `${currentColor ? "#FFFFFF33" : skill.color}`,
                  border: `1px solid ${
                    currentSkill?.name === skill.name
                      ? currentColor
                      : "#FFFFFF0d"
                  }`,
                  boxShadow:
                    currentSkill?.name === skill.name
                      ? `${
                          currentColor + "40"
                        } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`
                      : "",
                }}
              >
                <skill.icon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
