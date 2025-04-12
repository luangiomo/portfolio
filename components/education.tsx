import { experiences } from "@/data/experiences";
import Image from "next/image";

export default function Education() {
  const educationalExperiences = experiences.filter(
    (xp) => xp.type === "educational"
  );
  return (
    <div className="w-full lg:w-10/12 py-6 border-b border-b-white/10">
      <div className="space-y-3">
        {educationalExperiences.map(
          ({ placeName, role, icon, location, startIn, endIn }) => (
            <div className="flex gap-3" key={`${placeName + role}`}>
              <Image className="rounded-lg w-10 h-10" src={icon} alt={`logo`} />
              <div className="w-full flex justify-between items-center">
                <span>
                  <h2 className="leading-tight text-lg  text-white uppercase font-mono">
                    {role}
                  </h2>
                  <p className="leading-tight font-sans text-white/60 text-sm">
                    {placeName}
                  </p>
                </span>
                <span>
                  <p className="leading-tight font-sans text-white text-sm text-end">
                    {`${startIn.year}`}
                    {" - "}
                    {endIn ? `${endIn.year}` : "Atualmente"}
                  </p>
                  <p className="leading-tight font-sans text-white/60 text-sm">
                    {`${location.city}, ${location.shortState}`}
                  </p>
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
