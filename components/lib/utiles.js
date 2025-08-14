import { clsx } from "clsx"; //npm install clsx
import { twMerge } from "tailwind-merge"; //npm install tailwind-merge

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
