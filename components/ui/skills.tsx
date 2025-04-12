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
  const allCategories = Array.from(
    new Set(skillsData.map((skill) => skill.category))
  );

  const primarySkills = skills
    .sort((a, b) => {
      // Ordena a categoria "framework" antes de "code"
      if (a.category === "framework" && b.category !== "framework") return -1;
      if (a.category !== "framework" && b.category === "framework") return 1;
      return 0;
    })
    .filter(
      (skill) => skill.category === "framework" || skill.category === "code"
    )
    .slice(0, 5);
  const secondarySkills = skills
    .filter(
      (skill) =>
        skill.category === "code" ||
        skill.category === "framework" ||
        skill.category === "style"
    )
    .slice(5);
  const currentColor = currentSkill?.color;

  return (
    <div className="w-full relative md:scale-100">
      <code className="transition-colors duration-300 relative z-30 w-full sm:w-10/12 p-3 bg-white/10 border border-white/20 rounded-lg flex gap-2 items-center text-white/60">
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
        <p
          className="leading-relaxed font-mono text-xs transition-colors duration-300"
          style={{ color: currentColor ? "#FFFFFF33" : "inherit" }}
        >
          {allCategories.map((category) => (
            <span key={category}>
              <span
                style={{
                  color:
                    currentSkill?.category === category ? "white" : "inherit",
                }}
              >
                {category}:
              </span>
              {` [ `}
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <span
                    key={skill.name}
                    onMouseEnter={() => setCurrentSkill(skill)}
                    onMouseLeave={() => setCurrentSkill(undefined)}
                    className="cursor-pointer whitespace-pre-wrap"
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
                    <span>
                      {index + 1 !==
                        skills.filter((skill) => skill.category === category)
                          .length && ", "}
                    </span>
                  </span>
                ))}
              {" ]"}
              <br />
            </span>
          ))}
        </p>
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
          className="absolute right-68 z-20 pulse-animation electricity-effect-3 duration-100 ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <ThirdPath className="absolute right-68 z-10" />
        <FourthPath
          className="absolute right-38 z-20 pulse-animation electricity-effect-4  duration-250 ease-in-out"
          style={{
            stroke: currentColor ?? "#FFFFFF33",
            strokeWidth: 1,
          }}
        />
        <FourthPath className="absolute right-38 z-10" />
      </div>
      <div className="justify-self-end relative mt-7 transition-colors duration-300 w-80 px-2 py-2 z-30 border border-white/20 rounded-lg bg-linear-to-b from-white/10 to-white/0">
        <div className="flex">
          {primarySkills.map((skill, index) => (
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
