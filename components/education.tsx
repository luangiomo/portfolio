import Image from "next/image";
import Metrocamp from "@/app/assets/education-etec-bento-quirino.png";
import Bentao from "@/app/assets/education-unimetrocamp.png";

export default function Education() {
  // const educationalExperiences = experiences.filter(
  //   (xp) => xp.type === "educational"
  // );
  return (
    <div className="w-full lg:w-10/12 py-6 border-b border-b-white/10">
      <div className="space-y-3">
        <div className="flex gap-3">
          <Image
            className="rounded-lg w-10 h-10"
            src={Metrocamp}
            alt={`logo`}
          />
          <div className="w-full flex justify-between items-center">
            <span>
              <h2 className="leading-tight text-base  text-white uppercase font-mono">
                Ciência da computação
              </h2>
              <p className="leading-tight font-sans text-white/60 text-sm">
                Unimetrocamp
              </p>
            </span>
            <span>
              <p className="leading-tight font-sans text-white text-sm text-end">
                2018 - 2022
              </p>
              <p className="leading-tight font-sans text-white/60 text-sm">
                Campinas, SP
              </p>
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Image className="rounded-lg w-10 h-10" src={Bentao} alt={`logo`} />
          <div className="w-full flex justify-between items-center">
            <span>
              <h2 className="leading-tight text-base  text-white uppercase font-mono">
                TECNICO EM INFORMATICA
              </h2>
              <p className="leading-tight font-sans text-white/60 text-sm">
                ETEC Bento Quirino
              </p>
            </span>
            <span>
              <p className="leading-tight font-sans text-white text-sm text-end">
                2016 - 2017
              </p>
              <p className="leading-tight font-sans text-white/60 text-sm">
                Campinas, SP
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
