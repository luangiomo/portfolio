import { MdLocationOn, MdMail, MdPerson } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-full lg:w-10/12  py-6 border-b border-b-white/10">
      <div className="flex flex-col justify-between gap-3">
        <h2 className="leading-tight font-mono font-semibold uppercase text-lg text-white tracking-tight whitespace-nowrap mb-3">
          Vamos conversar!
        </h2>
        {/* <p className="leading-tight font-sans text-white/60 text-sm pr-8 hidden sm:block">
          Atualmente trabalho como{" "}
          <span className="text-sky-500">Desenvolvedor Front-end</span>.
          Sinta-se a vontade para entrar em contado e contar um pouco mais sobre
          os seus projetos.
        </p> */}
        <div className="space-y-3">
          <p className="flex gap-2 items-center leading-tight font-sans text-white/60 text-sm">
            <MdPerson />
            Luan Giomo
          </p>
          <p className="flex gap-2 items-center leading-tight font-sans text-white/60 text-sm">
            <MdMail />
            luangiomo@gmail.com
          </p>
          <p className="flex gap-2 items-center leading-tight font-sans text-white/60 text-sm">
            <MdLocationOn />
            Campinas, SP, Brasil
          </p>
        </div>
        <p className="flex gap-2 items-center leading-tight font-sans text-white/60 text-sm mt-8">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
          </span>
          Disponivel para novas propostas!
        </p>
      </div>
      {/* <form className="flex flex-col items-end gap-2">
          <div className="w-full space-y-2 leading-tight font-sans text-white/60 text-sm">
            <label htmlFor="name" className="block">
              Nome:
            </label>
            <input
              placeholder="Digite seu nome"
              id="name"
              className="w-full border border-white/20 bg-white/10 rounded-lg outline-0 px-3 py-1"
              type="text"
            />
          </div>
          <div className="w-full space-y-2 leading-tight font-sans text-white/60 text-sm">
            <label htmlFor="mail" className="block">
              Email:
            </label>
            <input
              placeholder="Digite seu email"
              id="mail"
              className="w-full border border-white/20 bg-white/10 rounded-lg outline-0 px-3 py-1"
              type="text"
            />
          </div>
          <div className="w-full space-y-2 leading-tight font-sans text-white/60 text-sm">
            <label htmlFor="message" className="block">
              Mensagem:
            </label>
            <textarea
              placeholder="Digite sua mensagem"
              id="message"
              className="w-full border border-white/20 bg-white/10 rounded-lg outline-0 px-3 py-1 resize-none"
              rows={4}
              maxLength={100}
            />
          </div>
          <button className="transition-colors duration-300 cursor-pointer hover:text-black hover:bg-white flex gap-1 py-2 px-4 w-fit bg-white/20 rounded-full text-white font-sans text-sm mt-4">
            Enviar mensagem!
          </button>
        </form> */}
    </div>
  );
}
