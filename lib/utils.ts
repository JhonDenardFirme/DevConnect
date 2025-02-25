import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { techMap } from "./techmap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassname = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName] 
  ? `${techMap[normalizedTechName]} colored` 
  : "devicon-devicon-plain";

};
