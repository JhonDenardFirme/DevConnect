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


export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { label: "Year", seconds: 31536000 },
    { label: "Month", seconds: 2592000 },
    { label: "Week", seconds: 604800 },
    { label: "Day", seconds: 86400 },
    { label: "Hour", seconds: 3600 },
    { label: "Minute", seconds: 60 },
    { label: "Second", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
};