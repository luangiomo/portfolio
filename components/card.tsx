import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="w-full p-2 bg-[#1c1c1c] border border-[#353535] rounded-lg">
      {children}
    </div>
  );
}
