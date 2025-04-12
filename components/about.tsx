// import { SiGithub, SiLinkedin } from "react-icons/si";
"use client";

import ProfilePictureSecondary from "@/app/assets/about-profile-picture-secondary.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function About() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="w-full lg:w-10/12 space-y-6">
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className=" overflow-hidden transition-transform duration-300 p-2 rounded-lg bg-white/10 border border-white/10 w-8/12 sm:w-4/12 aspect-square hover:rotate-4 cursor-pointer"
      >
        <Image
          className="rounded-lg bg-blend-multiply bg-white/40 brightness-110"
          src={ProfilePictureSecondary}
          alt="my photo"
          style={{
            border: `1px solid ${active ? "#00a6f4" : "#FFFFFF0d"}`,
            backgroundColor: active ? "#FFFFFF1a" : "#FFFFFF0d",
            boxShadow: active
              ? `${
                  "#00a6f4" + "40"
                } 0px 30px 60px -12px inset, #FFFFFF0d 0px 18px 36px -18px inset`
              : "",
          }}
        />
      </div>
      <h2 className="leading-tight text-lg text-white uppercase font-mono mb-4">
        E aí, tudo bem? Eu sou o Luan..
      </h2>
      <p className="font-sans text-white/60 text-sm leading-relaxed text-justify">
        Atuo como <span className="text-sky-500">Desenvolvedor Front-end</span>{" "}
        especializado em criar interfaces modernas e responsivas. Iniciei na
        tecnologia em 2016 com um curso técnico e, em 2018, ingressei na{" "}
        <span className="text-sky-500">Ciência da Computação</span>. Em 2019,
        comecei minha carreira profissional e sigo aprimorando minhas
        habilidades como desenvolvedor.
      </p>
      <div className="flex gap-3 items-center font-mono font-semibold uppercase text-base text-[#BABABA]">
        <Link href={"/curriculo-luan-giomo.pdf"} target="_blank">
          <button className="cursor-pointer flex gap-1 items-center text-xs px-2.5 py-0.5 border border-[#BABABA] rounded-sm hover:bg-[#f6f6f6] hover:text-[#171717]">
            <MdOpenInNew />
            Curriculo
          </button>
        </Link>
        <a
          className="cursor-pointer hover:text-[#0A66C2]"
          href="https://www.linkedin.com/in/luangiomo/"
          target="_blank"
        >
          <SiLinkedin />
        </a>
        <a
          className="cursor-pointer hover:text-white"
          href="https://github.com/luangiomo"
          target="_blank"
        >
          <SiGithub />
        </a>
      </div>
    </div>
  );
}
