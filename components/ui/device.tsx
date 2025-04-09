"use client";

import { ProjectType } from "@/data/projects";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

type DeviceType = Pick<ProjectType, "shortlink" | "color" | "presentation">;

export default function Device({ shortlink, color, presentation }: DeviceType) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-full md:2-8/12 aspect-video transition-all duration-300 cursor-pointer relative px-2 pb-2 hover:px-3 bg-white/10 border border-white/20 rounded-lg overflow-hidden before:bottom-0 before:left-0 before:absolute before:w-full before:h-10/12 before:bg-linear-to-b before:from-black/0 before:to-black"
      style={{
        borderColor: isActive ? color : "transparent",
        boxShadow: isActive
          ? `${
              color + "40"
            } 0px 30px 60px -12px inset, #353535 0px 18px 36px -18px inset `
          : "",
      }}
    >
      <div className="flex gap-3 items-center my-2">
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="size-1.5 rounded-full"
              style={{
                background: isActive ? color : "#6b6b6b",
              }}
            />
          ))}
        </div>
        <div className="cursor-pointer hover:text-white flex gap-1 py-0.5 px-2 w-fit bg-black rounded-full text-white/60 font-mono text-xs">
          <p>{shortlink}</p>
          <span>
            <MdArrowOutward />
          </span>
        </div>
      </div>
      <div className="rounded-sm w-full aspect-video border border-white/20 overflow-hidden">
        <video
          className="w-full"
          src={presentation}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        {/* <Image src={EasyAlmanax} alt="image" /> */}
      </div>
    </div>
  );
}
