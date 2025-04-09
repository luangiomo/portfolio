import Fitec from "@/app/assets/company-fitec.png";
import Image from "next/image";

export default function Experience() {
  // const professionalExperiences = experiences.filter(
  //   (xp) => xp.type === "professional"
  // );
  return (
    <div className="w-full lg:w-10/12 space-y-6 py-6 border-b border-b-white/10">
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="rounded-lg w-10 h-10 bg-black border border-white/20 flex items-center justify-center leading-0">
            {"</>"}
          </div>
          <div className="w-full flex justify-between items-center">
            <span>
              <h2 className="leading-tight text-base  text-white uppercase font-mono">
                Desenvolvedor Front-end
              </h2>
              <p className="leading-tight font-sans text-white/60 text-sm">
                Freelancer
              </p>
            </span>
            <span className="text-end">
              <p className="leading-tight font-sans text-white text-sm">
                Jan 2025 - Atualmente
              </p>
              <p className="leading-tight font-sans text-white/60 text-sm">
                (Remoto) | Campinas, SP
              </p>
            </span>
          </div>
        </div>
        {/* <button className="h-fit bg-white/10 border border-white/20 py-2 px-3 rounded-full font-sans text-xs text-white mt-2">
          <span className="relative flex gap-1 text-base">
            {mainSkills.map((skill) => (
              <div key={skill.name}>
                <Link href="#" style={{ color: skill.color }}>
                  <skill.icon />
                </Link>
              </div>
            ))}
          </span>
        </button> */}
        <div className="flex gap-3">
          <Image className="rounded-lg w-10 h-10" src={Fitec} alt={`logo`} />
          <div className="w-full flex justify-between items-center">
            <span>
              <h2 className="leading-tight text-base  text-white uppercase font-mono">
                Desenvolvedor Front-end
              </h2>
              <p className="leading-tight font-sans text-white/60 text-sm">
                FITec
              </p>
            </span>
            <span>
              <p className="leading-tight font-sans text-white text-sm text-end">
                Jul 2020 - Jul 2023
              </p>
              <p className="leading-tight font-sans text-white/60 text-sm">
                (Remoto) | Campinas, SP
              </p>
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Image className="rounded-lg w-10 h-10" src={Fitec} alt={`logo`} />
          <div className="w-full flex justify-between items-center">
            <span>
              <h2 className="leading-tight text-base  text-white uppercase font-mono">
                Estagiário
              </h2>
              <p className="leading-tight font-sans text-white/60 text-sm">
                FITec
              </p>
            </span>
            <span>
              <p className="leading-tight font-sans text-white text-sm text-end">
                Dez 2019 - Jul 2020
              </p>
              <p className="leading-tight font-sans text-white/60 text-sm">
                (Presencial) | Campinas, SP
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
