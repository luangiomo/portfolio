import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-140">
      <div className="w-fit">
        <div className="flex justify-between mb-6">
          <div className="flex gap-3 self-end">
            <button className="bg-white/10 border border-white/20 py-2 px-3 rounded-full font-sans text-xs text-white">
              Campinas, SP
            </button>
            <button className="bg-white/10 border border-white/20 py-2 px-3 rounded-full font-sans text-xs text-white">
              <span className="flex gap-2 text-base">
                <Link
                  href="https://github.com/luangiomo"
                  target="_blank"
                  className="hover:text-white/60"
                >
                  <SiGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/luangiomo"
                  target="_blank"
                  className="hover:text-white/60"
                >
                  <SiLinkedin />
                </Link>
              </span>
            </button>
          </div>
          <button className="bg-white/10 border border-white/20 p-3 rounded-lg font-sans text-xs text-white">
            <div className="w-30 h-30 bg-white/10 rounded-lg" />
          </button>
        </div>
        <p className="text-white/60 font-mono font-semibold uppercase text-2xl text-center">
          {"Olá, sou"}{" "}
          <span className="font-normal text-5xl/tight text-[#F6F6F6] font-custom">
            Luan Giomo
          </span>{" "}
          {"e trabalho"}
          <br />
          {"como desenvolvedor front-end."}
        </p>
        <div className="flex gap-3 mt-10 justify-center">
          <button className="bg-white py-2 px-3 rounded-full font-sans text-base text-black font-semibold">
            Vamos conversar
          </button>
          <button className="bg-white/10 border border-white/20 py-2 px-3 rounded-full font-sans text-base text-white">
            Abrir currículo
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col gap-6">

      </div> */}
    </div>
  );
}
