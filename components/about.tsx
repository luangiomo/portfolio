import { SiGithub, SiLinkedin } from "react-icons/si";

function About() {
  return (
    <div className="w-full lg:w-10/12 space-y-6">
      <div className="">
        <div className="p-2 rounded-lg bg-white/10 border border-white/10 float-left w-40 aspect-3/4 mr-3 relative" />
        <div className="flex gap-3 items-center font-mono font-semibold uppercase text-base text-[#BABABA]">
          {/* <span className="cursor-pointer flex gap-1 items-center text-xs px-2.5 py-0.5 border border-[#BABABA] rounded-sm hover:bg-[#f6f6f6] hover:text-[#171717]">
          <MdDownload />
          Curriculo
        </span> */}
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
      <h2 className="leading-tight text-xl text-white uppercase font-mono mb-4">
        Ola, Bom dia!
      </h2>
      <p className="leading-tight font-sans text-white/60 text-sm text-justify">
        Meu nome é <span className="text-white">Luan Giomo</span> e sou um{" "}
        <span className="text-sky-500">Desenvolvedor Front-end</span> com
        experiência em transformar problemas em software através da criação de
        interfaces modernas e responsivas.
        <br />
        <br />
        Iniciei minha trajetória na area de tecnologia em 2016 ainda no ensino
        médio com o curso de{" "}
        <span className="text-sky-500">Tecnico em Informatica</span>. Em 2018,
        comecei minha graduação em{" "}
        <span className="text-sky-500">Ciência da Computação</span>,
        aprofundando meus conhecimentos na área.
        <br />
        <br />
        No ano seguinte, tive minha primeira experiência profissional como{" "}
        <span className="text-sky-500">Desenvolvedor Front-end</span>.
        Atualmente, sigo aprimorando minhas habilidades e contribuindo para o
        desenvolvimento de aplicações eficientes e de alto desempenho.
      </p>
    </div>
  );
}

export default About;
