import { Navigation } from "@/data/navigation";

export default function Container({
  name,
  link,
  icon: Icon,
  component: Component,
}: Navigation) {
  return (
    <section className="relative w-full scroll-mt-16 md:scroll-mt-12" id={link}>
      {Icon && (
        <span className="absolute rounded-lg size-10 bg-black border border-white/20 items-center justify-center leading-0 hidden md:flex md:-translate-y-3 -left-11 lg:-left-17 top-0 text-white">
          <Icon />
        </span>
      )}
      <p className="w-full font-mono text-xs text-white/60 mb-3 lowercase">
        {"< "}
        {name}
        {" />"}
      </p>
      {Component ? <Component /> : null}
    </section>
  );
}
