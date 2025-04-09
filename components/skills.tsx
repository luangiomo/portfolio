import {
  SiAwslambda,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import SkillsContainer from "./skills/skills";

export default function Skills() {
  return (
    <div className="w-full lg:w-10/12 space-y-6 py-6 border-b border-b-white/10">
      <p className="leading-tight font-sans text-[#BABABA] text-sm">
        Estas são algumas das tecnologias que tenho utilizado e aprimorado ao
        longo dos anos:
      </p>
      <SkillsContainer />
      <p className="leading-tight font-sans text-[#BABABA] text-sm">
        Tambem tenho conhecimento em outras ferramentas como:
      </p>
      <div className="w-fit relative mt-7 transition-colors duration-300 p-1 z-30 border border-white/20 rounded-lg bg-linear-to-b from-white/10 to-white/0">
        <div className="flex">
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiAwslambda />
            </span>
          </div>
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiPostgresql />
            </span>
          </div>
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiJest />
            </span>
          </div>
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiMongodb />
            </span>
          </div>
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiI18Next />
            </span>
          </div>
          <div className="p-0.5 size-10 cursor-pointer">
            <span
              className="flex justify-center items-center text-white/60 text-base transition-colors duration-300 w-full aspect-square bg-white/10 rounded-lg"
              style={{
                color: `#FFFFFF33`,
                border: `1px solid #FFFFFF0d`,
                boxShadow: `${
                  "#FFFFFF33" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`,
              }}
            >
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
