"use client";

import { navigations } from "@/data/navigation";
import { useEffect, useState } from "react";

export default function Header({
  mode = "vertical",
}: {
  mode: "vertical" | "horizontal";
}) {
  // const [currentSection, setCurrentSection] =
  //   useState<Navigation["name"]>("about");

  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getActiveLink = (link: string): boolean => {
    const target = document.getElementById(link); // Pegando o elemento pelo ID

    console.log(link, target?.offsetTop);
    console.log(link, target?.offsetHeight);
    if (target) {
      if (
        offsetY > target.offsetTop - 72 &&
        offsetY <= target.offsetTop - 72 + (target.offsetHeight + 48)
      )
        return true;
    }
    return false;
  };

  return (
    <header
      className={`${
        mode === "vertical"
          ? "py-0 mb-0 bg-transparent"
          : "z-100 md:hidden py-2 mb-4 bg-black "
      } sticky top-0 text-xl `}
    >
      <nav>
        <ul
          className={`${
            mode === "vertical"
              ? "flex flex-col text-xs"
              : "flex flex-row gap-4 text-xl"
          }`}
        >
          {navigations.map(({ name, icon: Icon, link }) => (
            <li
              key={name}
              className={`${mode === "vertical" ? "pr-6" : ""}
              transition-colors duration-300 flex gap-2 leading-tight font-mono p-2 items-center bg-transparent hover:!text-white rounded-lg cursor-pointer`}
              style={{
                color: getActiveLink(link) ? "#FFFFFF" : "#FFFFFF99",
                backgroundColor: getActiveLink(link)
                  ? "#FFFFFF1A"
                  : "transparent",
              }}
              onClick={() => {
                const element = document.querySelector(`#${link}`);
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <Icon />
              {mode === "vertical" ? name : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
